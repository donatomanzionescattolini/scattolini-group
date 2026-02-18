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
import { useTranslation } from "../../i18n.tsx";

export default function DesarrolloEditor() {
  const { t } = useTranslation();
  const [selectedDesarrollo, setSelectedDesarrollo] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [desarrollos, setDesarrollos] = useState<any[]>([]);

  useEffect(() => {
    loadDesarrollos();
  }, []);

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
  };

  const handleSaveDesarrollo = async (data: any) => {
    setSaving(true);
    setMessage('');
    try {
      const desarrolloId = data.nombre || data.id;
      await saveDesarrollo(desarrolloId, serializeDesarrollo(data));
      setMessage(t("pages.admin.editor.desarrolloSaved"));
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error saving desarrollo:', error);
      setMessage(t("pages.admin.editor.desarrolloSaveError"));
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    setSelectedDesarrollo(null);
    setMessage('');
  };

  if (selectedDesarrollo) {
    return (
      <div>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3>{t("pages.admin.editor.edit")} {selectedDesarrollo.titulo || selectedDesarrollo.nombre}</h3>
          <MDBBtn color="secondary" onClick={handleCancel}>
            {t("pages.admin.editor.backToList")}
          </MDBBtn>
        </div>

        {message && (
          <div
            className={`alert ${
              message.includes('✓') ? 'alert-success' : 'alert-danger'
            } mb-4`}
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
      <h3 className="mb-4">{t("pages.admin.editor.selectDesarrollo")}</h3>
      
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
                <strong>{desarrollo.titulo || desarrollo.nombre}</strong>
                  {desarrollo.area && (
                    <div className="text-muted small">
                      {t("pages.admin.editor.areaLabel")}: {desarrollo.area.titulo || desarrollo.area.name}
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
