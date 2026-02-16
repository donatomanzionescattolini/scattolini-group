import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBInput,
  MDBTextArea,
  MDBCard,
  MDBCardBody,
} from 'mdb-react-ui-kit';
import './MultiStepWizard.scss';

interface MultiStepWizardProps {
  type: 'desarrollo' | 'area';
  data: any;
  onSave: (data: any) => Promise<void>;
  onCancel: () => void;
  saving: boolean;
}

export default function MultiStepWizard({
  type,
  data,
  onSave,
  onCancel,
  saving,
}: MultiStepWizardProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<any>(data);
  const { control, handleSubmit, formState: { errors }, setValue } = useForm({
    defaultValues: formData,
  });

  // Define steps based on type
  const getSteps = () => {
    if (type === 'desarrollo') {
      return [
        {
          title: 'Información Básica',
          fields: ['nombre', 'titulo', 'slogan'],
        },
        {
          title: 'Detalles',
          fields: ['introduccion', 'ubicacion', 'ubicación'],
        },
        {
          title: 'Características',
          fields: ['numberOfUnits', 'numberOfFloors', 'estimatedCompletionYear'],
        },
        {
          title: 'Revisión',
          fields: [],
        },
      ];
    } else {
      return [
        {
          title: 'Información Básica',
          fields: ['name', 'titulo', 'slogan'],
        },
        {
          title: 'Descripción',
          fields: ['descripcion'],
        },
        {
          title: 'Revisión',
          fields: [],
        },
      ];
    }
  };

  const steps = getSteps();

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = async (data: any) => {
    setFormData(data);
    if (currentStep === steps.length - 1) {
      // Final step - save
      await onSave(data);
    } else {
      handleNext();
    }
  };

  const getFieldValue = (fieldName: string) => {
    const value = formData[fieldName];
    if (Array.isArray(value)) {
      return value.join('\n\n');
    }
    if (typeof value === 'object' && value !== null) {
      if (value.es) return value.es;
      return JSON.stringify(value, null, 2);
    }
    return value || '';
  };

  const setFieldValue = (fieldName: string, value: string) => {
    let processedValue: any = value;
    
    // Handle arrays (like introduccion and descripcion)
    if (fieldName === 'introduccion' || fieldName === 'descripcion') {
      processedValue = value.split('\n\n').filter(p => p.trim());
    }
    
    setFormData({ ...formData, [fieldName]: processedValue });
    setValue(fieldName, processedValue);
  };

  const renderField = (fieldName: string) => {
    const isTextarea = ['introduccion', 'descripcion', 'slogan'].includes(fieldName);
    const label = fieldName.charAt(0).toUpperCase() + fieldName.slice(1);

    return (
      <div key={fieldName} className="mb-4">
        <Controller
          name={fieldName}
          control={control}
          render={({ field }) => (
            isTextarea ? (
              <MDBTextArea
                label={label}
                rows={fieldName === 'introduccion' || fieldName === 'descripcion' ? 6 : 3}
                value={getFieldValue(fieldName)}
                onChange={(e) => setFieldValue(fieldName, e.target.value)}
              />
            ) : (
              <MDBInput
                label={label}
                type="text"
                value={getFieldValue(fieldName)}
                onChange={(e) => setFieldValue(fieldName, e.target.value)}
              />
            )
          )}
        />
      </div>
    );
  };

  const renderStep = () => {
    const step = steps[currentStep];

    if (currentStep === steps.length - 1) {
      // Review step
      return (
        <div className="review-step">
          <h4 className="mb-4">Revisión de Cambios</h4>
          <MDBCard className="mb-3">
            <MDBCardBody>
              {Object.keys(formData).map((key) => {
                const value = formData[key];
                
                // Skip complex objects and functions
                if (typeof value === 'function') return null;
                if (value && typeof value === 'object' && '$$typeof' in value) return null;
                if (key === 'area') return null;
                if (key === 'caracteristicas') return null;
                
                let displayValue = value;
                if (Array.isArray(value)) {
                  displayValue = value.join(', ');
                } else if (typeof value === 'object' && value !== null) {
                  if (value.es) displayValue = value.es;
                  else displayValue = JSON.stringify(value);
                }

                return (
                  <div key={key} className="mb-3">
                    <strong className="text-capitalize">{key}:</strong>
                    <div className="text-muted">{String(displayValue || 'N/A')}</div>
                  </div>
                );
              })}
            </MDBCardBody>
          </MDBCard>
        </div>
      );
    }

    return (
      <div className="form-step">
        <h4 className="mb-4">{step.title}</h4>
        {step.fields.map((field) => renderField(field))}
      </div>
    );
  };

  return (
    <div className="multi-step-wizard">
      <div className="wizard-steps mb-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`wizard-step ${index === currentStep ? 'active' : ''} ${
              index < currentStep ? 'completed' : ''
            }`}
          >
            <div className="step-number">{index + 1}</div>
            <div className="step-title">{step.title}</div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {renderStep()}

        <MDBRow className="mt-4">
          <MDBCol>
            {currentStep > 0 && (
              <MDBBtn color="secondary" onClick={handlePrevious}>
                Anterior
              </MDBBtn>
            )}
          </MDBCol>
          <MDBCol className="text-end">
            <MDBBtn color="secondary" onClick={onCancel} className="me-2">
              Cancelar
            </MDBBtn>
            {currentStep === steps.length - 1 ? (
              <MDBBtn type="submit" color="primary" disabled={saving}>
                {saving ? 'Guardando...' : 'Guardar Cambios'}
              </MDBBtn>
            ) : (
              <MDBBtn type="submit" color="primary">
                Siguiente
              </MDBBtn>
            )}
          </MDBCol>
        </MDBRow>
      </form>
    </div>
  );
}
