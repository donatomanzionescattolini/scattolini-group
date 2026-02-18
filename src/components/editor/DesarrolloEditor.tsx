import React, { useState, useEffect } from 'react';
import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBInput,
  MDBSpinner,
  MDBListGroup,
  MDBListGroupItem,
} from 'mdb-react-ui-kit';
import { desarrolloMap } from '../../objects/desarrollos/Desarrollos';
import {
  getAllDesarrollos,
  saveDesarrollo,
  serializeDesarrollo,
} from '../../services/database';
import Desarrollo from '../../models/desarrollos/Desarrollo';
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

  useEffect(() => {
    loadDesarrollos();
  }, []);

  const getLocalized = (field: any) => {
    if (!field) return '';
    if (typeof field === 'object') return field[lang] || field.es || Object.values(field)[0] || '';
    return field;
  };

  const loadDesarrollos = () => {
    // Get desarrollos from the desarrolloMap
    const allDesarrollos: any[] = [];
    desarrolloMap.forEach((item) => {
      item.des.forEach((desarrollo) => {
        allDesarrollos.push({
          id: desarrollo.nombre || 'unknown',
          ...desarrollo,
        });
      });
    });
    setDesarrollos(allDesarrollos);
  };

  const handleSelectDesarrollo = (desarrollo: any) => {
    setSelectedDesarrollo(desarrollo);
    setMessage('');
    setMessageType('');
  };

  const handleSaveDesarrollo = async (data: any) => {
    setSaving(true);
    setMessage('');
    setMessageType('');
    try {
      const desarrolloId = data.nombre || data.id;
      await saveDesarrollo(desarrolloId, serializeDesarrollo(data));
      setMessage(t('pages.editor.messages.desarrolloSaved', 'Development saved successfully'));
      setMessageType('success');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error saving desarrollo:', error);
      setMessage(t('pages.editor.messages.desarrolloSaveError', 'Error saving development'));
      setMessageType('error');
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    setSelectedDesarrollo(null);
    setMessage('');
    setMessageType('');
  };

  if (selectedDesarrollo) {
    return (
      <div>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3>
            {t('pages.editor.edit', 'Edit')}: {getLocalized(selectedDesarrollo.titulo) || selectedDesarrollo.nombre}
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
      <h3 className="mb-4">{t('pages.editor.selectDesarrollo', 'Select a development to edit')}</h3>
      
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
