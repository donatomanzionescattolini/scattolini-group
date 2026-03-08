import React, {useEffect, useState} from 'react';
import {Button, ListGroup, Spinner} from 'react-bootstrap';
import Areas from '../../objects/areas/Areas';
import {getDesarrollosForArea, registerDynamicDesarrollos} from '../../objects/desarrollos/Desarrollos';
import {deleteDesarrollo, saveDesarrollo, serializeDesarrollo,} from '../../services/database';
import MultiStepWizard from './MultiStepWizard';
import {useTranslation} from '../../i18n.tsx';

export default function DesarrolloEditor() {
    const {t, lang} = useTranslation();
    const [selectedDesarrollo, setSelectedDesarrollo] = useState<any | null>(null);
    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);
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

    const loadDesarrollos = () => {
        const allDesarrollos: any[] = [];
        Areas().forEach((area) => {
            const desSet = getDesarrollosForArea(area, lang);
            desSet.forEach((desarrollo) => {
                allDesarrollos.push({
                    id: desarrollo.nombre || 'unknown',
                    areaName: desarrollo?.area?.name || area.name,
                    ...desarrollo,
                });
            });
        });
        setDesarrollos(allDesarrollos);
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
            // Update the dynamic map immediately
            registerDynamicDesarrollos([payload]);
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

    const handleCancel = () => {
        setSelectedDesarrollo(null);
        setIsCreating(false);
        setMessage('');
        setMessageType('');
    };

    const handleDeleteDesarrollo = async (desarrollo: any, e: React.MouseEvent) => {
        e.stopPropagation();
        const name = getLocalized(desarrollo.titulo) || desarrollo.nombre || 'this development';
        if (!confirm(`Are you sure you want to delete "${name}"? This action cannot be undone.`)) return;
        try {
            const id = String(desarrollo.nombre || desarrollo.id || '').trim();
            await deleteDesarrollo(id);
            loadDesarrollos();
            setMessage(String(t('pages.editor.messages.desarrolloDeleted', 'Development deleted successfully')));
            setMessageType('success');
            setTimeout(() => setMessage(''), 3000);
        } catch (error) {
            console.error('Error deleting desarrollo:', error);
            setMessage(String(t('pages.editor.messages.desarrolloDeleteError', 'Error deleting development')));
            setMessageType('error');
        }
    };

    if (selectedDesarrollo) {
        return (
            <div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3>
                        {(isCreating ? t('pages.editor.createDesarrollo', 'Create development') : t('pages.editor.edit', 'Edit'))}: {getLocalized(selectedDesarrollo.titulo) || selectedDesarrollo.nombre || 'Nuevo'}
                    </h3>
                    <Button variant="secondary" onClick={handleCancel}>
                        {t('pages.editor.backToList', 'Back to list')}
                    </Button>
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

            {message && (
                <div className={`alert ${messageType === 'success' ? 'alert-success' : 'alert-danger'} mb-3`}>
                    {message}
                </div>
            )}

            {loading ? (
                <div className="text-center py-5">
                    <Spinner animation="border"/>
                </div>
            ) : (
                <ListGroup>
                    {desarrollos.map((desarrollo, index) => (
                        <ListGroup.Item
                            key={index}
                            className="d-flex justify-content-between align-items-center"
                        >
                            <div
                                className="flex-grow-1"
                                style={{cursor: 'pointer'}}
                                onClick={() => handleSelectDesarrollo(desarrollo)}
                            >
                                <strong>{getLocalized(desarrollo.titulo) || desarrollo.nombre}</strong>
                                {desarrollo.area && (
                                    <div className="text-muted small">
                                        {t('pages.editor.areaLabel', 'Area')}: {getLocalized(desarrollo.area.titulo) || desarrollo.area.name}
                                    </div>
                                )}
                            </div>
                            <div className="d-flex gap-2">
                                <Button
                                    size="sm"
                                    variant="outline-primary"
                                    onClick={() => handleSelectDesarrollo(desarrollo)}
                                >
                                    {t('common.edit', 'Edit')}
                                </Button>
                                <Button
                                    size="sm"
                                    variant="outline-danger"
                                    onClick={(e) => handleDeleteDesarrollo(desarrollo, e)}
                                >
                                    {t('common.delete', 'Delete')}
                                </Button>
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}
        </div>
    );
}
