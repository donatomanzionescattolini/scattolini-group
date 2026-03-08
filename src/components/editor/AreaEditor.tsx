import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, ListGroup, Spinner } from 'react-bootstrap';
import { Area } from '../../models/areas/Area';
import MultiStepWizard from './MultiStepWizard';
import { useTranslation } from '../../i18n.tsx';
import {
    deleteAreaWithProjects,
    getAllAreas,
    getDesarrollosByArea,
    saveArea,
    serializeArea,
} from '../../services/database';

type EditorMode = 'create' | 'edit' | 'delete';

export default function AreaEditor() {
    const {t, lang} = useTranslation();
    const [selectedArea, setSelectedArea] = useState<any | null>(null);
    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    const [deletingName, setDeletingName] = useState('');
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');
    const [areas, setAreas] = useState<Area[]>([]);
    const [mode, setMode] = useState<EditorMode>('edit');

    useEffect(() => {
        loadAreas();
    }, []);

    const loadAreas = async () => {
        setLoading(true);
        try {
            const allAreas = await getAllAreas();
            setAreas(allAreas as Area[]);
        } catch (error) {
            console.error('Error loading areas:', error);
            setMessage(String(t('pages.editor.messages.areaLoadError', 'Error loading areas')));
            setMessageType('error');
        } finally {
            setLoading(false);
        }
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

    const sortedAreas = [...areas].sort((a, b) => {
        const left = String(getLocalized(a.titulo) || a.name || '').toLowerCase();
        const right = String(getLocalized(b.titulo) || b.name || '').toLowerCase();
        return left.localeCompare(right);
    });

    const handleSelectArea = (area: Area) => {
        setSelectedArea(area);
        setMode('edit');
        setMessage('');
        setMessageType('');
    };

    const handleCreateArea = () => {
        setSelectedArea({
            id: '',
            name: '',
            titulo: '',
            slogan: '',
            descripcion: [],
            numberOfImages: 0,
        });
        setMode('create');
        setMessage('');
        setMessageType('');
    };

    const handleSaveArea = async (data: any) => {
        setSaving(true);
        setMessage('');
        setMessageType('');
        try {
            const areaId = String(data.name || data.id || '').trim();
            if (!areaId) {
                setMessage(String(t('pages.editor.messages.areaSaveError', 'Error saving area')));
                setMessageType('error');
                return;
            }
            await saveArea(areaId, serializeArea(data));
            await loadAreas();
            setMessage(String(t('pages.editor.messages.areaSaved', 'Area saved successfully')));
            setMessageType('success');
            setSelectedArea(null);
            setTimeout(() => setMessage(''), 3000);
        } catch (error) {
            console.error('Error saving area:', error);
            setMessage(String(t('pages.editor.messages.areaSaveError', 'Error saving area')));
            setMessageType('error');
        } finally {
            setSaving(false);
        }
    };

    const handleDeleteArea = async (area: Area) => {
        const areaName = String(area.name || '').trim();
        if (!areaName) return;

        setDeletingName(areaName);
        setMessage('');
        setMessageType('');

        try {
            const impactedProjects = await getDesarrollosByArea(areaName);
            const impactedList = impactedProjects.map((project) => `- ${project.nombre || project.id}`).join('\n');

            const confirmationMessage = impactedProjects.length
                ? `${t('pages.editor.areaDeleteCascadeIntro', 'Deleting this area will also delete the following projects:')}\n\n${impactedList}\n\n${t('pages.editor.areaDeleteCascadeConfirm', 'Do you want to continue?')}`
                : String(t('pages.editor.confirmDeleteArea', 'Are you sure you want to delete this area?'));

            const confirmed = confirm(confirmationMessage);
            if (!confirmed) {
                setDeletingName('');
                return;
            }

            await deleteAreaWithProjects(areaName);
            await loadAreas();
            setMessage(String(t('pages.editor.messages.areaDeleted', 'Area deleted successfully')));
            setMessageType('success');
        } catch (error) {
            console.error('Error deleting area:', error);
            setMessage(String(t('pages.editor.messages.areaDeleteError', 'Error deleting area')));
            setMessageType('error');
        } finally {
            setDeletingName('');
        }
    };

    const handleCancel = () => {
        setSelectedArea(null);
        setMessage('');
        setMessageType('');
    };

    const renderProcessSelector = () => (
        <ButtonGroup className="mb-3" aria-label="area-process-selector">
            <Button variant={mode === 'create' ? 'primary' : 'outline-primary'} onClick={handleCreateArea}>
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

    if (selectedArea) {
        return (
            <div>
                {renderProcessSelector()}

                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3>
                        {mode === 'create' ? t('pages.editor.createArea', 'Create area') : t('pages.editor.edit', 'Edit')}: {getLocalized(selectedArea.titulo) || selectedArea.name || 'Nueva'}
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
            {renderProcessSelector()}

            {message && (
                <div className={`alert ${messageType === 'success' ? 'alert-success' : 'alert-danger'} mb-3`}>
                    {message}
                </div>
            )}

            <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="mb-0">
                    {mode === 'delete'
                        ? t('pages.editor.selectAreaToDelete', 'Select an area to delete')
                        : t('pages.editor.selectArea', 'Select an area to edit')}
                </h3>
                <Button variant="outline-secondary" onClick={loadAreas}>
                    {t('pages.editor.refresh', 'Refresh')}
                </Button>
            </div>

            {loading ? (
                <div className="text-center py-5">
                    <Spinner animation="border"/>
                </div>
            ) : sortedAreas.length === 0 ? (
                <div className="alert alert-warning">
                    {t('pages.editor.noAreas', 'No areas found yet.')}
                </div>
            ) : (
                <ListGroup>
                    {sortedAreas.map((area) => (
                        <ListGroup.Item
                            key={area.name}
                            className="d-flex justify-content-between align-items-center"
                        >
                            <div>
                                <strong>{getLocalized(area.titulo) || area.name}</strong>
                                {area.slogan && (
                                    <div className="text-muted small">{getLocalized(area.slogan)}</div>
                                )}
                            </div>

                            {mode === 'delete' ? (
                                <Button
                                    variant="danger"
                                    size="sm"
                                    disabled={deletingName === area.name}
                                    onClick={() => handleDeleteArea(area)}
                                >
                                    {deletingName === area.name
                                        ? t('pages.editor.deleting', 'Deleting...')
                                        : t('pages.editor.delete', 'Delete')}
                                </Button>
                            ) : (
                                <Button variant="outline-primary" size="sm" onClick={() => handleSelectArea(area)}>
                                    {t('pages.editor.open', 'Open')}
                                </Button>
                            )}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}
        </div>
    );
}
