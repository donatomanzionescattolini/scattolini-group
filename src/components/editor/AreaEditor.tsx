import React, {useEffect, useState} from 'react';
import {Button, ListGroup, Modal, Spinner} from 'react-bootstrap';
import Areas from '../../objects/areas/Areas';
import {deleteArea, deleteDesarrollo, getDesarrollosByArea, saveArea, serializeArea} from '../../services/database';
import {Area} from '../../models/areas/Area';
import MultiStepWizard from './MultiStepWizard';
import {useTranslation} from '../../i18n.tsx';

export default function AreaEditor() {
    const {t, lang} = useTranslation();
    const [selectedArea, setSelectedArea] = useState<any | null>(null);
    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');
    const [areas, setAreas] = useState<Area[]>([]);
    const [isCreating, setIsCreating] = useState(false);

    // Delete confirmation modal state
    const [deleteModal, setDeleteModal] = useState<{
        show: boolean;
        area: any | null;
        affectedProjects: Array<{id: string; nombre: string; titulo: any}>;
        loading: boolean;
    }>({show: false, area: null, affectedProjects: [], loading: false});

    useEffect(() => {
        loadAreas();
    }, []);

    const loadAreas = () => {
        const allAreas = Areas();
        setAreas(allAreas);
    };

    const handleSelectArea = (area: Area) => {
        setSelectedArea(area);
        setIsCreating(false);
        setMessage('');
        setMessageType('');
    };

    const handleCreateNew = () => {
        setSelectedArea({
            id: '',
            name: '',
            titulo: {es: '', en: ''},
            slogan: {es: '', en: ''},
            descripcion: {es: [], en: []},
            numberOfImages: 0,
        });
        setIsCreating(true);
        setMessage('');
        setMessageType('');
    };

    const handleSaveArea = async (data: any) => {
        setSaving(true);
        setMessage('');
        setMessageType('');
        try {
            const areaId = data.name || data.id;
            if (!areaId) throw new Error('Area name/id is required');
            await saveArea(areaId, serializeArea(data));
            setMessage(String(t('pages.editor.messages.areaSaved', 'Area saved successfully')));
            setMessageType('success');
            setIsCreating(false);
            loadAreas();
            setTimeout(() => setMessage(''), 3000);
        } catch (error) {
            console.error('Error saving area:', error);
            setMessage(String(t('pages.editor.messages.areaSaveError', 'Error saving area')));
            setMessageType('error');
        } finally {
            setSaving(false);
        }
    };

    const handleCancel = () => {
        setSelectedArea(null);
        setIsCreating(false);
        setMessage('');
        setMessageType('');
    };

    const handleDeleteAreaClick = async (area: any, e: React.MouseEvent) => {
        e.stopPropagation();
        setDeleteModal({show: true, area, affectedProjects: [], loading: true});
        try {
            const projects = await getDesarrollosByArea(area.name);
            setDeleteModal(prev => ({...prev, affectedProjects: projects, loading: false}));
        } catch {
            setDeleteModal(prev => ({...prev, affectedProjects: [], loading: false}));
        }
    };

    const handleConfirmDeleteArea = async () => {
        const {area, affectedProjects} = deleteModal;
        if (!area) return;
        setDeleteModal(prev => ({...prev, loading: true}));
        try {
            // Delete all associated projects concurrently
            await Promise.all(affectedProjects.map((project) => deleteDesarrollo(project.id)));
            // Delete the area itself
            await deleteArea(area.name || area.id);
            setDeleteModal({show: false, area: null, affectedProjects: [], loading: false});
            loadAreas();
            setMessage(String(t('pages.editor.messages.areaDeleted', 'Area and its projects deleted successfully')));
            setMessageType('success');
            setTimeout(() => setMessage(''), 4000);
        } catch (error) {
            console.error('Error deleting area:', error);
            setDeleteModal(prev => ({...prev, loading: false}));
            setMessage(String(t('pages.editor.messages.areaDeleteError', 'Error deleting area')));
            setMessageType('error');
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

    if (selectedArea) {
        return (
            <div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3>
                        {isCreating
                            ? t('pages.editor.createArea', 'Create area')
                            : `${t('pages.editor.edit', 'Edit')}: ${getLocalized(selectedArea.titulo) || selectedArea.name}`}
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
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="mb-0">{t('pages.editor.selectArea', 'Select an area to edit')}</h3>
                <Button onClick={handleCreateNew}>
                    {t('pages.editor.addArea', 'Add area')}
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
                    {areas.map((area, index) => (
                        <ListGroup.Item
                            key={index}
                            className="d-flex justify-content-between align-items-center"
                        >
                            <div
                                className="flex-grow-1"
                                style={{cursor: 'pointer'}}
                                onClick={() => handleSelectArea(area)}
                            >
                                <strong>{getLocalized(area.titulo) || area.name}</strong>
                                {area.slogan && (
                                    <div className="text-muted small">{getLocalized(area.slogan)}</div>
                                )}
                            </div>
                            <div className="d-flex gap-2">
                                <Button
                                    size="sm"
                                    variant="outline-primary"
                                    onClick={() => handleSelectArea(area)}
                                >
                                    {t('common.edit', 'Edit')}
                                </Button>
                                <Button
                                    size="sm"
                                    variant="outline-danger"
                                    onClick={(e) => handleDeleteAreaClick(area, e)}
                                >
                                    {t('common.delete', 'Delete')}
                                </Button>
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}

            {/* Delete Confirmation Modal */}
            <Modal show={deleteModal.show} onHide={() => setDeleteModal(prev => ({...prev, show: false}))} centered>
                <Modal.Header closeButton>
                    <Modal.Title className="text-danger">
                        ⚠️ {t('pages.editor.deleteArea', 'Delete Area')}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {deleteModal.loading ? (
                        <div className="text-center py-3">
                            <Spinner animation="border" size="sm"/> Checking for affected projects...
                        </div>
                    ) : (
                        <>
                            <p>
                                Are you sure you want to delete the area{' '}
                                <strong>"{getLocalized(deleteModal.area?.titulo) || deleteModal.area?.name}"</strong>?
                            </p>
                            {deleteModal.affectedProjects.length > 0 ? (
                                <>
                                    <p className="text-danger fw-bold">
                                        ⚠️ The following {deleteModal.affectedProjects.length} project(s) will also be permanently deleted:
                                    </p>
                                    <ul>
                                        {deleteModal.affectedProjects.map((p) => (
                                            <li key={p.id}>
                                                <strong>{getLocalized(p.titulo) || p.nombre || p.id}</strong>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            ) : (
                                <p className="text-muted">No Firestore-stored projects are associated with this area.</p>
                            )}
                            <p className="text-danger">This action cannot be undone.</p>
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => setDeleteModal(prev => ({...prev, show: false}))}
                        disabled={deleteModal.loading}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="danger"
                        onClick={handleConfirmDeleteArea}
                        disabled={deleteModal.loading}
                    >
                        {deleteModal.loading ? <Spinner animation="border" size="sm"/> : 'Delete Area'}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
