import React, {useEffect, useState} from 'react';
import {Button, ListGroup, Modal, Spinner} from 'react-bootstrap';
import Areas from '../../objects/areas/Areas';
import {
    deleteArea,
    getAllAreas,
    getDesarrollosByArea,
    saveArea,
    serializeArea
} from '../../services/database';
import {Area} from '../../models/areas/Area';
import MultiStepWizard from './MultiStepWizard';
import {useTranslation} from '../../i18n.tsx';

export default function AreaEditor() {
    const {t, lang} = useTranslation();
    const [selectedArea, setSelectedArea] = useState<any | null>(null);
    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');
    const [areas, setAreas] = useState<any[]>([]);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [areaToDelete, setAreaToDelete] = useState<any>(null);
    const [affectedProjects, setAffectedProjects] = useState<any[]>([]);

    useEffect(() => {
        loadAreas();
    }, []);

    const loadAreas = async () => {
        setLoading(true);
        try {
            const dbAreas = await getAllAreas();
            // Merge with static areas if needed, or prefer DB
            // For now, let's use DB areas primarily, but fall back to static if empty?
            // Actually, we want to migrate to DB, so let's show DB areas.
            // If DB is empty, maybe we should seed it?
            // For now, let's just list what's in DB + what's in static that's not in DB

            const staticAreas = Areas();
            const combinedAreas = [...dbAreas];

            // Add static areas that are not in DB (by name/id)
            staticAreas.forEach(sa => {
                if (!combinedAreas.find(da => da.id === sa.name || da.name === sa.name)) {
                    combinedAreas.push(sa as any);
                }
            });

            setAreas(combinedAreas);
        } catch (error) {
            console.error("Error loading areas", error);
            // Fallback to static
            setAreas(Areas());
        } finally {
            setLoading(false);
        }
    };

    const handleSelectArea = (area: Area) => {
        setSelectedArea(area);
        setMessage('');
        setMessageType('');
    };

    const handleCreateNew = () => {
        setSelectedArea({
            name: '',
            titulo: { es: '', en: '' },
            slogan: { es: '', en: '' },
            descripcion: [],
            numberOfImages: 0,
            images: [],
            isNew: true
        });
        setMessage('');
        setMessageType('');
    };

    const handleSaveArea = async (data: any) => {
        setSaving(true);
        setMessage('');
        setMessageType('');
        try {
            // If creating new, ensure we have an ID (name is often used as ID)
            const areaId = data.name || data.id;
            if (!areaId) throw new Error("Area name is required as ID");

            await saveArea(areaId, serializeArea(data));
            setMessage(String(t('pages.editor.messages.areaSaved', 'Area saved successfully')));
            setMessageType('success');
            setTimeout(() => {
                setMessage('');
                setSelectedArea(null);
                loadAreas();
            }, 1000);
        } catch (error) {
            console.error('Error saving area:', error);
            setMessage(String(t('pages.editor.messages.areaSaveError', 'Error saving area')));
            setMessageType('error');
        } finally {
            setSaving(false);
        }
    };

    const handleDeleteClick = async (area: any) => {
        setDeleting(true);
        try {
            const areaId = area.id || area.name;
            const projects = await getDesarrollosByArea(areaId);
            setAffectedProjects(projects);
            setAreaToDelete(area);
            setShowDeleteConfirm(true);
        } catch (error) {
            console.error("Error checking dependencies", error);
            alert("Error checking project dependencies");
        } finally {
            setDeleting(false);
        }
    };

    const confirmDelete = async () => {
        if (!areaToDelete) return;
        setDeleting(true);
        try {
            const areaId = areaToDelete.id || areaToDelete.name;
            await deleteArea(areaId);
            setMessage('Area deleted successfully');
            setMessageType('success');
            setShowDeleteConfirm(false);
            setAreaToDelete(null);
            setSelectedArea(null);
            loadAreas();
        } catch (error) {
            console.error("Error deleting area", error);
            setMessage('Error deleting area');
            setMessageType('error');
        } finally {
            setDeleting(false);
        }
    };

    const handleCancel = () => {
        setSelectedArea(null);
        setMessage('');
        setMessageType('');
    };

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

    if (selectedArea) {
        return (
            <div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3>
                        {selectedArea.isNew ? t('pages.editor.createArea', 'Create New Area') : `${t('pages.editor.edit', 'Edit')}: ${getLocalized(selectedArea.titulo) || selectedArea.name}`}
                    </h3>
                    <div>
                        {!selectedArea.isNew && (
                            <Button variant="danger" className="me-2" onClick={() => handleDeleteClick(selectedArea)} disabled={deleting}>
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
                    type="area"
                    data={selectedArea}
                    onSave={handleSaveArea}
                    onCancel={handleCancel}
                    saving={saving}
                />
            </div>
        );
    }

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="mb-0">{t('pages.editor.selectArea', 'Select an area to edit')}</h3>
                <Button variant="primary" onClick={handleCreateNew}>
                    {t('pages.editor.createNew', 'Create New')}
                </Button>
            </div>

            {loading ? (
                <div className="text-center py-5">
                    <Spinner animation="border"/>
                </div>
            ) : (
                <ListGroup>
                    {areas.map((area, index) => (
                        <ListGroup.Item
                            key={index}
                            action
                            onClick={() => handleSelectArea(area)}
                            className="d-flex justify-content-between align-items-center"
                        >
                            <div>
                                <strong>{getLocalized(area.titulo) || area.name}</strong>
                                {area.slogan && (
                                    <div className="text-muted small">{getLocalized(area.slogan)}</div>
                                )}
                            </div>
                            <i className="fas fa-chevron-right"></i>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}

            <Modal show={showDeleteConfirm} onHide={() => setShowDeleteConfirm(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{t('pages.editor.confirmDelete', 'Confirm Deletion')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        {t('pages.editor.deleteWarning', 'Are you sure you want to delete this area?')}
                    </p>
                    {affectedProjects.length > 0 && (
                        <div className="alert alert-warning">
                            <strong>{t('pages.editor.warning', 'Warning')}:</strong> {t('pages.editor.projectsAffected', 'The following projects will be affected (you may lose access to them via this area):')}
                            <ul className="mt-2 mb-0">
                                {affectedProjects.map(p => (
                                    <li key={p.id}>{p.nombre || p.id}</li>
                                ))}
                            </ul>
                        </div>
                    )}
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
