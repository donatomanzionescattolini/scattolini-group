import React, { useState, useCallback, useMemo } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Row, Col, Button, Card, Form } from 'react-bootstrap';
import './MultiStepWizard.scss';
import { useTranslation } from '../../i18n.tsx';
import MediaUploadStep from './MediaUploadStep';
import Areas from '../../objects/areas/Areas';

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
  const { t, lang } = useTranslation();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<any>(data);
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: formData,
  });

  // Get available areas for select dropdown
  const areas = useMemo(() => {
    const areaList = Areas();
    // Remove duplicates by name
    const unique = new Map();
    areaList.forEach(area => {
      if (area.name && !unique.has(area.name)) {
        unique.set(area.name, area);
      }
    });
    return Array.from(unique.values());
  }, []);

  // Helper to get localized value from an area
  const getLocalizedValue = (value: string | { es: string, en: string } | undefined): string => {
    if (!value) return '';
    if (typeof value === 'string') return value;
    return value[lang] || value.es || '';
  };

  // Define steps based on type
  const getSteps = () => {
    if (type === 'desarrollo') {
      return [
        {
          title: t('pages.editor.wizard.desarrollo.basic', 'Basic info'),
          fields: ['nombre', 'titulo', 'slogan', 'areaName'],
        },
        {
          title: t('pages.editor.wizard.desarrollo.details', 'Details'),
          fields: ['introduccion', 'ubicacion'],
        },
        {
          title: t('pages.editor.wizard.desarrollo.features', 'Features'),
          fields: ['numberOfUnits', 'numberOfFloors', 'estimatedCompletionYear'],
        },
        {
          title: t('pages.editor.wizard.desarrollo.media', 'Media (S3)'),
          fields: ['mediaUpload'],
        },
        {
          title: t('pages.editor.wizard.review', 'Review'),
          fields: [],
        },
      ];
    } else {
      return [
        {
          title: t('pages.editor.wizard.area.basic', 'Basic info'),
          fields: ['name', 'titulo', 'slogan'],
        },
        {
          title: t('pages.editor.wizard.area.description', 'Description'),
          fields: ['descripcion'],
        },
        {
          title: t('pages.editor.wizard.review', 'Review'),
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

  const setFieldValue = useCallback((fieldName: string, value: string) => {
    let processedValue: any = value;
    
    // Handle arrays (like introduccion and descripcion)
    if (fieldName === 'introduccion' || fieldName === 'descripcion') {
      processedValue = value.split('\n\n').filter(p => p.trim());
    }
    
    setFormData((prev: any) => ({ ...prev, [fieldName]: processedValue }));
    setValue(fieldName, processedValue);
  }, [setValue]);

  const handleNumberOfImagesChange = useCallback((count: number) => {
    setFormData((prev: any) => ({ ...prev, numberOfImages: count }));
    setValue('numberOfImages', count);
  }, [setValue]);

  const renderField = (fieldName: string) => {
    if (fieldName === 'mediaUpload') {
      const projectName = formData.nombre || 'project-name';
      
      return (
        <div key={fieldName} className="mb-4">
          <MediaUploadStep 
            projectName={projectName}
            onNumberOfImagesChange={handleNumberOfImagesChange}
          />
        </div>
      );
    }

    // Handle select fields that reference existing data
    if (fieldName === 'areaName') {
      const fallbackLabel = t('pages.editor.fields.areaName', 'Area');
      const currentValue = formData.areaName || formData.area?.name || '';
      
      return (
        <div key={fieldName} className="mb-4">
          <label htmlFor="areaName-select" className="form-label">{fallbackLabel}</label>
          <select
            id="areaName-select"
            className="form-select"
            value={currentValue}
            title={fallbackLabel}
            aria-label={fallbackLabel}
            onChange={(e) => {
              setFormData((prev: any) => ({ ...prev, areaName: e.target.value }));
              setValue('areaName', e.target.value);
            }}
          >
            <option value="">{t('pages.editor.selectArea', '-- Select an area --')}</option>
            {areas.map((area) => (
              <option key={area.name} value={area.name}>
                {getLocalizedValue(area.titulo) || area.name}
              </option>
            ))}
          </select>
          <div className="form-text text-muted">
            {t('pages.editor.areaHelp', 'Select the area where this development is located')}
          </div>
        </div>
      );
    }

    const isTextarea = ['introduccion', 'descripcion', 'slogan'].includes(fieldName);
    const fallbackLabel = fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
    const label = t(`pages.editor.fields.${fieldName}`, fallbackLabel);

    return (
      <div key={fieldName} className="mb-4">
        <Controller
          name={fieldName}
          control={control}
          render={({ field }) => (
            isTextarea ? (
              <Form.Group>
                <Form.Label>{label}</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={fieldName === 'introduccion' || fieldName === 'descripcion' ? 6 : 3}
                  value={getFieldValue(fieldName)}
                  onChange={(e) => setFieldValue(fieldName, e.target.value)}
                />
              </Form.Group>
            ) : (
              <Form.Group>
                <Form.Label>{label}</Form.Label>
                <Form.Control
                  type="text"
                  value={getFieldValue(fieldName)}
                  onChange={(e) => setFieldValue(fieldName, e.target.value)}
                />
              </Form.Group>
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
          <h4 className="mb-4">{t('pages.editor.reviewTitle', 'Review changes')}</h4>
          <Card className="mb-3">
            <Card.Body>
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
                    <div className="text-muted">{String(displayValue || t('common.na', 'N/A'))}</div>
                  </div>
                );
              })}
            </Card.Body>
          </Card>
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

        <Row className="mt-4">
          <Col>
            {currentStep > 0 && (
              <Button variant="secondary" onClick={handlePrevious}>
                {t('common.previous', 'Previous')}
              </Button>
            )}
          </Col>
          <Col className="text-end">
            <Button variant="secondary" onClick={onCancel} className="me-2">
              {t('common.cancel', 'Cancel')}
            </Button>
            {currentStep === steps.length - 1 ? (
              <Button type="submit" variant="primary" disabled={saving}>
                {saving ? t('common.saving', 'Saving...') : t('common.saveChanges', 'Save changes')}
              </Button>
            ) : (
              <Button type="submit" variant="primary">
                {t('common.next', 'Next')}
              </Button>
            )}
          </Col>
        </Row>
      </form>
    </div>
  );
}

