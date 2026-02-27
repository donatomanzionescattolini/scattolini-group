import React, { useState, useEffect } from 'react';
import {
  MDBBtn,
  MDBSpinner,
  MDBListGroup,
  MDBListGroupItem,
} from 'mdb-react-ui-kit';
import Areas from '../../objects/areas/Areas';
import { getDesarrollosForArea } from '../../objects/desarrollos/Desarrollos';
import {
  saveDesarrollo,
  serializeDesarrollo,
} from '../../services/database';
import MultiStepWizard from './MultiStepWizard';
import { useTranslation } from '../../i18n.tsx';

export default function DesarrolloEditor() {
  const { t, lang } = useTranslation();
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
    if (typeof field === 'object') return field[lang] || field.es || Object.values(field)[0] || '';
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

      const payload = { ...data } as any;
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

  if (selectedDesarrollo) {
    return (
      <div>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3>
            {(isCreating ? t('pages.editor.createDesarrollo', 'Create development') : t('pages.editor.edit', 'Edit'))}: {getLocalized(selectedDesarrollo.titulo) || selectedDesarrollo.nombre || 'Nuevo'}
          </h3>
          <MDBBtn color="secondary" onClick={handleCancel}>
            {t('pages.editor.backToList', 'Back to list')}
          </MDBBtn>
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
        <MDBBtn onClick={handleCreateNew}>
          {t('pages.editor.addDesarrollo', 'Add development')}
        </MDBBtn>
      </div>
      
      {loading ? (
        <div className="text-center py-5">
          <MDBSpinner />
        </div>
      ) : (
        <MDBListGroup>
          {desarrollos.map((desarrollo, index) => (
            <MDBListGroupItem
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
            </MDBListGroupItem>
          ))}
        </MDBListGroup>
      )}
    </div>
  );
}
