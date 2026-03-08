import React, {useEffect, useState} from 'react';
import {Button, ButtonGroup, ListGroup, Spinner} from 'react-bootstrap';
import {deleteDesarrollo, getAllDesarrollos, saveDesarrollo, serializeDesarrollo} from '../../services/database';
import Areas from '../../objects/areas/Areas';
import {getDesarrollosForArea} from '../../objects/desarrollos/Desarrollos';
import MultiStepWizard from './MultiStepWizard';
import {useTranslation} from '../../i18n.tsx';

type EditorMode = 'create' | 'edit' | 'delete';

export default function DesarrolloEditor() {
    const {t, lang} = useTranslation();
    const [selectedDesarrollo, setSelectedDesarrollo] = useState<any | null>(null);
    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    const [deletingId, setDeletingId] = useState<string>('');
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');
    const [desarrollos, setDesarrollos] = useState<any[]>([]);
    const [mode, setMode] = useState<EditorMode>('edit');

    useEffect(() => {
        loadDesarrollos();
    }, []);

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

    const sortedDesarrollos = [...desarrollos].sort((a, b) => {
        const left = String(getLocalized(a.titulo) || a.nombre || '').toLowerCase();
        const right = String(getLocalized(b.titulo) || b.nombre || '').toLowerCase();
        return left.localeCompare(right);
    });

    const loadStaticDesarrollos = () => {
        const staticItems: any[] = [];
        Areas().forEach((area) => {
            const set = getDesarrollosForArea(area, lang);
            set.forEach((desarrollo) => {
                staticItems.push({
                    id: desarrollo.nombre || `${area.name}-${Math.random()}`,
                    areaName: desarrollo?.area?.name || area.name,
                    ...desarrollo,
                });
            });
        });
        return staticItems;
    };

    const loadDesarrollos = async () => {
        setLoading(true);
        try {
            const staticItems = loadStaticDesarrollos();
            const firestoreItems = await getAllDesarrollos();

            const merged = new Map<string, any>();
            staticItems.forEach((item) => {
                const key = String(item.id || item.nombre || '');
                if (key) merged.set(key, item);
            });
            firestoreItems.forEach((item) => {
                const key = String(item.id || item.nombre || '');
                if (key) merged.set(key, item);
            });

            setDesarrollos(Array.from(merged.values()));
            setMessage('');
            setMessageType('');
        } catch (error) {
            console.error('Error loading desarrollos:', error);

            // Firestore failed: still show static developments so editing can continue.
            const staticItems = loadStaticDesarrollos();
            setDesarrollos(staticItems);

            if (staticItems.length === 0) {
                setMessage(String(t('pages.editor.messages.desarrolloLoadError', 'Error loading developments')));
                setMessageType('error');
            } else {
                setMessage('');
                setMessageType('');
            }
        } finally {
            setLoading(false);
        }
    };

    const buildEmptyDesarrollo = () => ({
        id: '',
        nombre: '',
        titulo: '',
        slogan: '',
        introduccion: [],
        ubicacion: '',
        numberOfUnits: 0,
        numberOfFloors: 0,
        estimatedCompletionYear: new Date().getFullYear(),
        areaName: '',
    });

    const handleSelectDesarrollo = (desarrollo: any) => {
        setSelectedDesarrollo(desarrollo);
        setMode('edit');
        setMessage('');
        setMessageType('');
    };

    const handleCreateNew = () => {
        setSelectedDesarrollo(buildEmptyDesarrollo());
        setMode('create');
        setMessage('');
        setMessageType('');
    };

    const handleSaveDesarrollo = async (data: any) => {
        setSaving(true);
        setMessage('');
        setMessageType('');
        try {
            const desarrolloId = String(data.nombre || data.id || '').trim();
            if (!desarrolloId) {
                setMessage(String(t('pages.editor.messages.desarrolloSaveError', 'Error saving development')));
                setMessageType('error');
                return;
            }

            const payload = {...data} as any;
            const areaName = String(payload.areaName || payload?.area?.name || '').trim();
            if (areaName) {
                payload.area = {
                    name: areaName,
                    titulo: areaName,
                    slogan: payload?.area?.slogan || '',
                    descripcion: payload?.area?.descripcion || [],
                    numberOfImages: Number(payload?.area?.numberOfImages || 0),
                };
            }

            delete payload.id;
            await saveDesarrollo(desarrolloId, serializeDesarrollo(payload));
            await loadDesarrollos();
            setMessage(String(t('pages.editor.messages.desarrolloSaved', 'Development saved successfully')));
            setMessageType('success');
            setSelectedDesarrollo(null);
            setTimeout(() => setMessage(''), 3000);
        } catch (error) {
            console.error('Error saving desarrollo:', error);
            setMessage(String(t('pages.editor.messages.desarrolloSaveError', 'Error saving development')));
            setMessageType('error');
        } finally {
            setSaving(false);
        }
    };

    const handleDeleteDesarrollo = async (desarrollo: any) => {
        const desarrolloId = String(desarrollo.id || desarrollo.nombre || '').trim();
        if (!desarrolloId) return;

        const confirmed = confirm(
            String(
                t(
                    'pages.editor.confirmDeleteDesarrollo',
                    'Are you sure you want to delete this development?'
                )
            )
        );

        if (!confirmed) return;

        setDeletingId(desarrolloId);
        setMessage('');
        setMessageType('');

        try {
            await deleteDesarrollo(desarrolloId);
            await loadDesarrollos();
            setMessage(String(t('pages.editor.messages.desarrolloDeleted', 'Development deleted successfully')));
            setMessageType('success');
        } catch (error) {
            console.error('Error deleting desarrollo:', error);
            setMessage(String(t('pages.editor.messages.desarrolloDeleteError', 'Error deleting development')));
            setMessageType('error');
        } finally {
            setDeletingId('');
        }
    };

    const handleCancel = () => {
        setSelectedDesarrollo(null);
        setMessage('');
        setMessageType('');
    };

    const renderProcessSelector = () => (
        <ButtonGroup className="mb-3" aria-label="editor-process-selector">
            <Button variant={mode === 'create' ? 'primary' : 'outline-primary'} onClick={handleCreateNew}>
                {t('pages.editor.processes.create', 'Create')}
            </Button>
            <Button variant={mode === 'edit' ? 'primary' : 'outline-primary'} onClick={() => setMode('edit')}>
                {t('pages.editor.processes.edit', 'Edit')}
            </Button>
            <Button variant={mode === 'delete' ? 'danger' : 'outline-danger'} onClick={() => setMode('delete')}>
                {t('pages.editor.processes.delete', 'Delete')}
            </Button>
        </ButtonGroup>
    );

    if (selectedDesarrollo) {
        return (
            <div>
                {renderProcessSelector()}

                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3>
                        {(mode === 'create' ? t('pages.editor.createDesarrollo', 'Create development') : t('pages.editor.edit', 'Edit'))}: {getLocalized(selectedDesarrollo.titulo) || selectedDesarrollo.nombre || 'Nuevo'}
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
            {renderProcessSelector()}

            {message && (
                <div className={`alert ${messageType === 'success' ? 'alert-success' : 'alert-danger'} mb-3`}>
                    {message}
                </div>
            )}

            <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="mb-0">
                    {mode === 'delete'
                        ? t('pages.editor.selectDesarrolloToDelete', 'Select a development to delete')
                        : t('pages.editor.selectDesarrollo', 'Select a development to edit')}
                </h3>
                <Button variant="outline-secondary" onClick={loadDesarrollos}>
                    {t('pages.editor.refresh', 'Refresh')}
                </Button>
            </div>

            {loading ? (
                <div className="text-center py-5">
                    <Spinner animation="border"/>
                </div>
            ) : sortedDesarrollos.length === 0 ? (
                <div className="alert alert-warning">
                    {t('pages.editor.noDesarrollos', 'No developments found yet.')}
                </div>
            ) : (
                <ListGroup>
                    {sortedDesarrollos.map((desarrollo) => {
                        const id = String(desarrollo.id || desarrollo.nombre || '');
                        const areaName = desarrollo.area?.name || desarrollo.areaName || '-';
                        return (
                            <ListGroup.Item
                                key={id}
                                className="d-flex justify-content-between align-items-center"
                            >
                                <div>
                                    <strong>{getLocalized(desarrollo.titulo) || desarrollo.nombre || id}</strong>
                                    <div className="text-muted small">
                                        {t('pages.editor.areaLabel', 'Area')}: {areaName}
                                    </div>
                                </div>

                                {mode === 'delete' ? (
                                    <Button
                                        variant="danger"
                                        size="sm"
                                        disabled={deletingId === id}
                                        onClick={() => handleDeleteDesarrollo(desarrollo)}
                                    >
                                        {deletingId === id
                                            ? t('pages.editor.deleting', 'Deleting...')
                                            : t('pages.editor.delete', 'Delete')}
                                    </Button>
                                ) : (
                                    <Button variant="outline-primary" size="sm" onClick={() => handleSelectDesarrollo(desarrollo)}>
                                        {t('pages.editor.open', 'Open')}
                                    </Button>
                                )}
                            </ListGroup.Item>
                        );
                    })}
                </ListGroup>
            )}
        </div>
    );
}
