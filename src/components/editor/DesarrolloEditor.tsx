import React, {useEffect, useState} from 'react';
import {Button, ListGroup, Modal, Spinner} from 'react-bootstrap';
import Areas from '../../objects/areas/Areas';
import {getDesarrollosForArea, registerDynamicDesarrollos} from '../../objects/desarrollos/Desarrollos';
import {
    deleteDesarrollo,
    getAllDesarrollos,
    saveDesarrollo,
    serializeDesarrollo,
} from '../../services/database';
import MultiStepWizard from './MultiStepWizard';
import {useTranslation} from '../../i18n.tsx';

export default function DesarrolloEditor() {
    const {t, lang} = useTranslation();
    const [selectedDesarrollo, setSelectedDesarrollo] = useState<any | null>(null);
    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');
    const [desarrollos, setDesarrollos] = useState<any[]>([]);
    const [isCreating, setIsCreating] = useState(false);

    useEffect(() => {
        loadDesarrollos();
    }, [lang]);

    const getLocalized = (field: any) => {
        if (!field) return '';
        const isPlaceholder = (value: unknown) =>
            typeof value === 'string' && value.trim().toLowerCase() === 'latest';
        if (typeof field === 'object') {
            const preferred = field[lang];
            if (preferred && !isPlaceholder(preferred)) return preferred;
            const spanish = field.es;
            if (spanish && !isPlaceholder(spanish)) return spanish;
            const firstValid = Object.values(field).find(
                (value) => value && !isPlaceholder(value)
            );
            return (firstValid as string) || '';
        }
        if (isPlaceholder(field)) return '';
        return field;
    };

    const loadDesarrollos = async () => {
        setLoading(true);
        try {
            const dbDesarrollos = await getAllDesarrollos();
            const allDesarrollos: any[] = [...dbDesarrollos].map(d => ({
                ...d,
                areaName: d.area?.name || d.areaName || 'unknown'
            }));

            // Load static ones only if not present in DB
            Areas().forEach((area) => {
                const desSet = getDesarrollosForArea(area, lang);
                desSet.forEach((desarrollo) => {
                    const id = desarrollo.nombre || 'unknown';
                    if (!allDesarrollos.find(d => d.id === id || d.nombre === id)) {
                        allDesarrollos.push({
                            id: id,
                            areaName: desarrollo?.area?.name || area.name,
                            ...desarrollo,
                        });
                    }
                });
            });
            setDesarrollos(allDesarrollos);
        } catch (error) {
            console.error("Error loading developments", error);
            // Fallback
        } finally {
            setLoading(false);
        }
    };

    const handleSelectDesarrollo = (desarrollo: any) => {
        setSelectedDesarrollo(desarrollo);
        setIsCreating(false);
        setMessage('');
        setMessageType('');
    };

    const handleCreateNew = () => {
        const firstArea = Areas()[0];
        setSelectedDesarrollo({
            id: '',
            nombre: '',
            titulo: '',
            slogan: '',
            introduccion: [],
            ubicacion: '',
            numberOfUnits: 0,
            numberOfFloors: 0,
            estimatedCompletionYear: new Date().getFullYear(),
            areaName: firstArea?.name || '',
        });
        setIsCreating(true);
        setMessage('');
        setMessageType('');
    };

    const handleSaveDesarrollo = async (data: any) => {
        setSaving(true);
        setMessage('');
        setMessageType('');
        try {
            const desarrolloId = String(data.nombre || data.id || '').trim();
            if (!desarrolloId) throw new Error('Missing desarrollo id');

            // If ID changed (renaming), we might want to delete the old one, but let's just save for now.
            // If the user wants to rename, they strictly create a new one.

            const payload = {...data} as any;
            const areaName = String(payload.areaName || payload?.area?.name || '').trim();
            if (areaName) {
                const matchedArea = Areas().find((area) => area.name === areaName);
                payload.area = matchedArea || {
                    name: areaName,
                    titulo: areaName,
                    slogan: '',
                    descripcion: [],
                    numberOfImages: 0,
                };
            }
            delete payload.areaName;

            await saveDesarrollo(desarrolloId, serializeDesarrollo(payload));

            // Re-fetch to update list
            loadDesarrollos();

            setMessage(String(t('pages.editor.messages.desarrolloSaved', 'Development saved successfully')));
            setMessageType('success');
            setIsCreating(false);
            setTimeout(() => setMessage(''), 3000);
        } catch (error) {
            console.error('Error saving desarrollo:', error);
            setMessage(String(t('pages.editor.messages.desarrolloSaveError', 'Error saving development')));
            setMessageType('error');
        } finally {
            setSaving(false);
        }
    };

    const handleDeleteClick = () => {
        setShowDeleteConfirm(true);
    };

    const confirmDelete = async () => {
        if (!selectedDesarrollo) return;
        setDeleting(true);
        try {
            const id = selectedDesarrollo.id || selectedDesarrollo.nombre;
            await deleteDesarrollo(id);
            setMessage('Development deleted successfully');
            setMessageType('success');
            setShowDeleteConfirm(false);
            setSelectedDesarrollo(null);
            loadDesarrollos();
        } catch (error) {
            console.error("Error deleting development", error);
            setMessage('Error deleting development');
            setMessageType('error');
        } finally {
            setDeleting(false);
        }
    };

    const handleCancel = () => {
        setSelectedDesarrollo(null);
        setIsCreating(false);
        setMessage('');
        setMessageType('');
    };

    if (selectedDesarrollo) {
        return (
            <div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3>
                        {(isCreating ? t('pages.editor.createDesarrollo', 'Create development') : t('pages.editor.edit', 'Edit'))}: {getLocalized(selectedDesarrollo.titulo) || selectedDesarrollo.nombre || 'Nuevo'}
                    </h3>
                    <div>
                         {!isCreating && (
                            <Button variant="danger" className="me-2" onClick={handleDeleteClick} disabled={deleting}>
                                {deleting ? <Spinner size="sm" animation="border" /> : t('pages.editor.delete', 'Delete')}
                            </Button>
                        )}
                        <Button variant="secondary" onClick={handleCancel}>
                            {t('pages.editor.backToList', 'Back to list')}
                        </Button>
                    </div>
                </div>

                {message && (
                    <div
                        className={`alert ${messageType === 'success' ? 'alert-success' : 'alert-danger'} mb-4`}
                    >
                        {message}
                    </div>
                )}

                <MultiStepWizard
                    type="desarrollo"
                    data={selectedDesarrollo}
                    onSave={handleSaveDesarrollo}
                    onCancel={handleCancel}
                    saving={saving}
                />

                 <Modal show={showDeleteConfirm} onHide={() => setShowDeleteConfirm(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>{t('pages.editor.confirmDelete', 'Confirm Deletion')}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            {t('pages.editor.deleteProjectWarning', 'Are you sure you want to delete this development?')}
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowDeleteConfirm(false)}>
                            {t('common.cancel', 'Cancel')}
                        </Button>
                        <Button variant="danger" onClick={confirmDelete} disabled={deleting}>
                            {deleting ? <Spinner size="sm" animation="border"/> : t('common.delete', 'Delete')}
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="mb-0">{t('pages.editor.selectDesarrollo', 'Select a development to edit')}</h3>
                <Button onClick={handleCreateNew}>
                    {t('pages.editor.addDesarrollo', 'Add development')}
                </Button>
            </div>

            {loading ? (
                <div className="text-center py-5">
                    <Spinner animation="border"/>
                </div>
            ) : (
                <ListGroup>
                    {desarrollos.map((desarrollo, index) => (
                        <ListGroup.Item
                            key={index}
                            action
                            onClick={() => handleSelectDesarrollo(desarrollo)}
                            className="d-flex justify-content-between align-items-center"
                        >
                            <div>
                                <strong>{getLocalized(desarrollo.titulo) || desarrollo.nombre}</strong>
                                {desarrollo.area && (
                                    <div className="text-muted small">
                                        {t('pages.editor.areaLabel', 'Area')}: {getLocalized(desarrollo.area.titulo) || desarrollo.area.name}
                                    </div>
                                )}
                            </div>
                            <i className="fas fa-chevron-right"></i>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}
        </div>
    );
}
