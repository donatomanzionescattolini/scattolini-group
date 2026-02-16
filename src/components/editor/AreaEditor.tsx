import React, { useState, useEffect } from 'react';
import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBSpinner,
  MDBListGroup,
  MDBListGroupItem,
} from 'mdb-react-ui-kit';
import Areas from '../../objects/areas/Areas';
import { getAllAreas, saveArea, serializeArea } from '../../services/database';
import { Area } from '../../models/areas/Area';
import MultiStepWizard from './MultiStepWizard';

export default function AreaEditor() {
  const [selectedArea, setSelectedArea] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [areas, setAreas] = useState<Area[]>([]);

  useEffect(() => {
    loadAreas();
  }, []);

  const loadAreas = () => {
    const allAreas = Areas();
    setAreas(allAreas);
  };

  const handleSelectArea = (area: Area) => {
    setSelectedArea(area);
    setMessage('');
  };

  const handleSaveArea = async (data: any) => {
    setSaving(true);
    setMessage('');
    try {
      const areaId = data.name || data.id;
      await saveArea(areaId, serializeArea(data));
      setMessage('✓ Área guardada exitosamente');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error saving area:', error);
      setMessage('✗ Error al guardar el área');
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    setSelectedArea(null);
    setMessage('');
  };

  if (selectedArea) {
    return (
      <div>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3>Editar: {selectedArea.titulo || selectedArea.name}</h3>
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
      <h3 className="mb-4">Seleccione un Área para Editar</h3>
      
      {loading ? (
        <div className="text-center py-5">
          <MDBSpinner />
        </div>
      ) : (
        <MDBListGroup>
          {areas.map((area, index) => (
            <MDBListGroupItem
              key={index}
              action
              onClick={() => handleSelectArea(area)}
              className="d-flex justify-content-between align-items-center"
            >
              <div>
                <strong>{area.titulo || area.name}</strong>
                {area.slogan && (
                  <div className="text-muted small">{area.slogan}</div>
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
