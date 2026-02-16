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

export default function DesarrolloEditor() {
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
      setMessage('✓ Desarrollo guardado exitosamente');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error saving desarrollo:', error);
      setMessage('✗ Error al guardar el desarrollo');
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
          <h3>Editar: {selectedDesarrollo.titulo || selectedDesarrollo.nombre}</h3>
          <MDBBtn color="secondary" onClick={handleCancel}>
            Volver a la lista
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
      <h3 className="mb-4">Seleccione un Desarrollo para Editar</h3>
      
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
                    Área: {desarrollo.area.titulo || desarrollo.area.name}
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
