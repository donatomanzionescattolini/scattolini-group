import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import "./MultiStepWizard.scss";
import { useTranslation } from "../../i18n.tsx";
import MediaUploadStep from "./MediaUploadStep";
import AreaMediaUploadStep from "./AreaMediaUploadStep";
import Areas, {DYNAMIC_AREAS_UPDATED_EVENT} from "../../objects/areas/Areas";
import AddressAutocompleteField from "./AddressAutocompleteField";

interface MultiStepWizardProps {
  type: "desarrollo" | "area";
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
  const [areaVersion, setAreaVersion] = useState(0);

  const getLocationValue = (source: any) =>
    source?.ubicacion ?? source?.["ubicación"] ?? "";

  const [addressSelected, setAddressSelected] = useState(
    Boolean(getLocationValue(data)),
  );
  const [formError, setFormError] = useState("");
  const { control, handleSubmit, setValue, reset } = useForm({
    defaultValues: formData,
  });

  useEffect(() => {
    setFormData(data);
    reset(data);
    setCurrentStep(0);
    setAddressSelected(Boolean(getLocationValue(data)));
    setFormError("");
  }, [data, reset]);

  useEffect(() => {
    const handleAreasUpdated = () => setAreaVersion((prev) => prev + 1);
    window.addEventListener(DYNAMIC_AREAS_UPDATED_EVENT, handleAreasUpdated as EventListener);
    return () => {
      window.removeEventListener(DYNAMIC_AREAS_UPDATED_EVENT, handleAreasUpdated as EventListener);
    };
  }, []);

  // Get available areas for select dropdown
  const areas = useMemo(() => {
    const areaList = Areas();
    // Remove duplicates by name
    const unique = new Map();
    areaList.forEach((area) => {
      if (area.name && !unique.has(area.name)) {
        unique.set(area.name, area);
      }
    });
    return Array.from(unique.values());
  }, [areaVersion]);

  // Helper to get localized value from an area
  const getLocalizedValue = (
    value: string | { es: string; en: string } | undefined,
  ): string => {
    if (!value) return "";
    if (typeof value === "string") return value;
    return value[lang] || value.es || "";
  };

  // Define steps based on type
  const getSteps = () => {
    if (type === "desarrollo") {
      return [
        {
          title: t("pages.editor.wizard.desarrollo.basic", "Basic info"),
          fields: ["nombre", "titulo", "slogan", "areaName"],
        },
        {
          title: t("pages.editor.wizard.desarrollo.details", "Details"),
          fields: ["introduccion", "ubicacion"],
        },
        {
          title: t("pages.editor.wizard.desarrollo.features", "Features"),
          fields: [
            "numberOfUnits",
            "numberOfFloors",
            "estimatedCompletionYear",
          ],
        },
        {
          title: t("pages.editor.wizard.desarrollo.media", "Media (S3)"),
          fields: ["mediaUpload"],
        },
        {
          title: t("pages.editor.wizard.review", "Review"),
          fields: [],
        },
      ];
    } else {
      return [
        {
          title: t("pages.editor.wizard.area.basic", "Basic info"),
          fields: ["name", "titulo", "slogan", "imageExtension"],
        },
        {
          title: t("pages.editor.wizard.area.description", "Description"),
          fields: ["descripcion"],
        },
        {
          title: t("pages.editor.wizard.area.media", "Media (S3)"),
          fields: ["areaMediaUpload"],
        },
        {
          title: t("pages.editor.wizard.review", "Review"),
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
    const mergedData = {
      ...formData,
      ...data,
    };

    setFormData(mergedData);
    setFormError("");

    const activeFields = steps[currentStep].fields;
    const isLocationStep = activeFields.includes("ubicacion") || activeFields.includes("ubicación");

    if (isLocationStep && type === "desarrollo") {
        const locationVal = String(mergedData.ubicacion || mergedData["ubicación"] || "").trim();
        if (locationVal && !addressSelected && locationVal !== String(getLocationValue(data)).trim()) {
          setFormError(
            String(
              t(
                "pages.editor.address.validation",
                "Please choose an address from the suggestions to ensure accuracy, or click next again to use what you typed.",
              ),
            ),
          );
          setAddressSelected(true);
          return;
        }
    }

    if (currentStep === steps.length - 1) {
      await onSave(mergedData);
    } else {
      handleNext();
    }
  };

  const getFieldValue = (fieldName: string) => {
    const value = formData[fieldName];
    if (Array.isArray(value)) {
      return value.join("\n\n");
    }
    if (typeof value === "object" && value !== null) {
      if (value.es) return value.es;
      return JSON.stringify(value, null, 2);
    }
    return value || "";
  };

  const setFieldValue = useCallback(
    (fieldName: string, value: string, isFromAutocomplete = false) => {
      let processedValue: any = value;

      // Handle arrays (like introduccion and descripcion)
      if (fieldName === "introduccion" || fieldName === "descripcion") {
        processedValue = value.split("\n\n").filter((p) => p.trim());
      }

      if ((fieldName === "ubicacion" || fieldName === "ubicación") && !isFromAutocomplete) {
        setAddressSelected(false);
      }

      setFormData((prev: any) => ({ ...prev, [fieldName]: processedValue }));
      setValue(fieldName, processedValue);
    },
    [setValue],
  );

  const handleNumberOfImagesChange = useCallback(
    (count: number) => {
      setFormData((prev: any) => ({ ...prev, numberOfImages: count }));
      setValue("numberOfImages", count);
    },
    [setValue],
  );

  // ── Bilingual helpers ──────────────────────────────────────────────────────

  /** Fields that should always be stored as {es, en} text objects */
  const BILINGUAL_TEXT_FIELDS = ["titulo", "slogan"];
  /** Fields that should always be stored as {es: string[], en: string[]} */
  const BILINGUAL_ARRAY_FIELDS = ["introduccion", "descripcion"];

  const getBilingualTextValue = (fieldName: string): { es: string; en: string } => {
    const raw = formData[fieldName];
    if (!raw) return { es: "", en: "" };
    if (typeof raw === "string") return { es: raw, en: "" };
    if (typeof raw === "object" && !Array.isArray(raw)) return { es: raw.es || "", en: raw.en || "" };
    return { es: "", en: "" };
  };

  const setBilingualTextValue = useCallback(
    (fieldName: string, lang: "es" | "en", value: string) => {
      setFormData((prev: any) => {
        const current = prev[fieldName];
        const obj = current && typeof current === "object" && !Array.isArray(current)
          ? current : { es: typeof current === "string" ? current : "", en: "" };
        const updated = { ...obj, [lang]: value };
        return { ...prev, [fieldName]: updated };
      });
    },
    [],
  );

  const getBilingualArrayValue = (fieldName: string): { es: string; en: string } => {
    const raw = formData[fieldName];
    if (!raw) return { es: "", en: "" };
    if (Array.isArray(raw)) return { es: raw.join("\n\n"), en: "" };
    if (typeof raw === "object" && !Array.isArray(raw)) {
      return {
        es: Array.isArray(raw.es) ? raw.es.join("\n\n") : (raw.es || ""),
        en: Array.isArray(raw.en) ? raw.en.join("\n\n") : (raw.en || ""),
      };
    }
    if (typeof raw === "string") return { es: raw, en: "" };
    return { es: "", en: "" };
  };

  const setBilingualArrayValue = useCallback(
    (fieldName: string, lang: "es" | "en", value: string) => {
      const arr = value.split("\n\n").filter((p) => p.trim());
      setFormData((prev: any) => {
        const current = prev[fieldName];
        const currentEs = current && typeof current === "object" && !Array.isArray(current)
          ? (Array.isArray(current.es) ? current.es : [])
          : (Array.isArray(current) ? current : []);
        const currentEn = current && typeof current === "object" && !Array.isArray(current)
          ? (Array.isArray(current.en) ? current.en : [])
          : [];
        return {
          ...prev,
          [fieldName]: {
            es: lang === "es" ? arr : currentEs,
            en: lang === "en" ? arr : currentEn,
          },
        };
      });
    },
    [],
  );

  // ── Render helpers ─────────────────────────────────────────────────────────

  const renderBilingualTextField = (fieldName: string) => {
    const { es, en } = getBilingualTextValue(fieldName);
    const fallbackLabel = fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
    const label = t(`pages.editor.fields.${fieldName}`, fallbackLabel);
    return (
      <div key={fieldName} className="mb-4">
        <Form.Label className="fw-semibold">{label}</Form.Label>
        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label className="small text-muted">🇪🇸 Español</Form.Label>
              <Form.Control
                type="text"
                value={es}
                onChange={(e) => setBilingualTextValue(fieldName, "es", e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label className="small text-muted">🇺🇸 English</Form.Label>
              <Form.Control
                type="text"
                value={en}
                onChange={(e) => setBilingualTextValue(fieldName, "en", e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
      </div>
    );
  };

  const renderBilingualArrayField = (fieldName: string) => {
    const { es, en } = getBilingualArrayValue(fieldName);
    const fallbackLabel = fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
    const label = t(`pages.editor.fields.${fieldName}`, fallbackLabel);
    return (
      <div key={fieldName} className="mb-4">
        <Form.Label className="fw-semibold">{label}</Form.Label>
        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label className="small text-muted">🇪🇸 Español</Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                value={es}
                onChange={(e) => setBilingualArrayValue(fieldName, "es", e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label className="small text-muted">🇺🇸 English</Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                value={en}
                onChange={(e) => setBilingualArrayValue(fieldName, "en", e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Text className="text-muted">
          {t("pages.editor.fields.paragraphHint", "Separate paragraphs with a blank line (double Enter).")}
        </Form.Text>
      </div>
    );
  };

  const renderField = (fieldName: string) => {
    // Bilingual text fields
    if (BILINGUAL_TEXT_FIELDS.includes(fieldName)) {
      return renderBilingualTextField(fieldName);
    }

    // Bilingual array fields
    if (BILINGUAL_ARRAY_FIELDS.includes(fieldName)) {
      return renderBilingualArrayField(fieldName);
    }

    if (fieldName === "mediaUpload") {
      const projectName = formData.nombre || "project-name";
      const areaName =
        formData.areaName || formData.area?.name || "unknown-area";

      return (
        <div key={fieldName} className="mb-4">
          <MediaUploadStep
            areaName={areaName}
            projectName={projectName}
            onNumberOfImagesChange={handleNumberOfImagesChange}
          />
        </div>
      );
    }

    if (fieldName === "areaMediaUpload") {
      const areaName = formData.name || "";
      return (
        <div key={fieldName} className="mb-4">
          <AreaMediaUploadStep
            areaName={areaName}
            onNumberOfImagesChange={handleNumberOfImagesChange}
          />
        </div>
      );
    }

    // Handle select fields that reference existing data
    if (fieldName === "areaName") {
      const fallbackLabel = String(
        t("pages.editor.fields.areaName", "Area") ?? "Area",
      );
      const currentValue =
        typeof formData.areaName === "string"
          ? formData.areaName
          : typeof formData.area?.name === "string"
            ? formData.area.name
            : "";

      return (
        <div key={fieldName} className="mb-4">
          <label htmlFor="areaName-select" className="form-label">
            {fallbackLabel}
          </label>
          <select
            id="areaName-select"
            className="form-select"
            value={currentValue}
            title={fallbackLabel}
            aria-label={fallbackLabel}
            onChange={(e) => {
              setFormData((prev: any) => ({
                ...prev,
                areaName: e.target.value,
              }));
              setValue("areaName", e.target.value);
            }}
          >
            <option value="">
              {t("pages.editor.areaSelectPlaceholder", "-- Select an area --")}
            </option>
            {areas.map((area) => (
              <option key={area.name} value={area.name}>
                {getLocalizedValue(area.titulo) || area.name}
              </option>
            ))}
          </select>
          <div className="form-text text-muted">
            {t(
              "pages.editor.areaHelp",
              "Select the area where this development is located",
            )}
          </div>
        </div>
      );
    }

    // Image extension selector (for area)
    if (fieldName === "imageExtension") {
      return (
        <div key={fieldName} className="mb-4">
          <Form.Group>
            <Form.Label>{t("pages.editor.fields.imageExtension", "Image format")}</Form.Label>
            <Form.Select
              value={formData.imageExtension || "jpg"}
              aria-label={String(t("pages.editor.fields.imageExtension", "Image format"))}
              onChange={(e) => {
                setFormData((prev: any) => ({ ...prev, imageExtension: e.target.value }));
                setValue("imageExtension", e.target.value);
              }}
            >
              <option value="jpg">JPG (new areas uploaded via this editor)</option>
              <option value="webp">WebP (legacy static areas)</option>
            </Form.Select>
            <Form.Text className="text-muted">
              {t("pages.editor.fields.imageExtensionHelp", "Choose JPG for new areas. WebP is only needed for pre-existing static areas.")}
            </Form.Text>
          </Form.Group>
        </div>
      );
    }

    if (fieldName === "ubicacion" || fieldName === "ubicación") {
      const label = t("pages.editor.fields.ubicacion", "Location");
      return (
        <div key={fieldName} className="mb-4">
          <Form.Group>
            <Form.Label>{label}</Form.Label>
            <AddressAutocompleteField
              value={String(getFieldValue(fieldName))}
              selected={addressSelected}
              onValueChange={(value) => setFieldValue(fieldName, value)}
              onSelectSuggestion={(value) => {
                setAddressSelected(true);
                setFieldValue(fieldName, value, true);
              }}
            />
          </Form.Group>
        </div>
      );
    }

    const fallbackLabel =
      fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
    const label = t(`pages.editor.fields.${fieldName}`, fallbackLabel);

    return (
      <div key={fieldName} className="mb-4">
        <Controller
          name={fieldName}
          control={control}
          render={() => (
            <Form.Group>
              <Form.Label>{label}</Form.Label>
              <Form.Control
                type="text"
                value={getFieldValue(fieldName)}
                onChange={(e) => setFieldValue(fieldName, e.target.value)}
              />
            </Form.Group>
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
          <h4 className="mb-4">
            {t("pages.editor.reviewTitle", "Review changes")}
          </h4>
          <Card className="mb-3">
            <Card.Body>
              {Object.keys(formData).map((key) => {
                const value = formData[key];

                // Skip complex objects and functions
                if (typeof value === "function") return null;
                if (value && typeof value === "object" && "$$typeof" in value)
                  return null;
                if (key === "area") return null;
                if (key === "caracteristicas") return null;

                let displayValue = value;
                if (Array.isArray(value)) {
                  displayValue = value.join(", ");
                } else if (typeof value === "object" && value !== null) {
                  if (value.es) displayValue = value.es;
                  else displayValue = JSON.stringify(value);
                }

                return (
                  <div key={key} className="mb-3">
                    <strong className="text-capitalize">{key}:</strong>
                    <div className="text-muted">
                      {String(displayValue || t("common.na", "N/A"))}
                    </div>
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
            className={`wizard-step ${index === currentStep ? "active" : ""} ${
              index < currentStep ? "completed" : ""
            }`}
          >
            <div className="step-number">{index + 1}</div>
            <div className="step-title">{step.title}</div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {renderStep()}

        {formError && <div className="alert alert-danger mt-3 mb-0">{formError}</div>}

        <Row className="mt-4">
          <Col>
            {currentStep > 0 && (
              <Button variant="secondary" onClick={handlePrevious}>
                {t("common.previous", "Previous")}
              </Button>
            )}
          </Col>
          <Col className="text-end">
            <Button variant="secondary" onClick={onCancel} className="me-2">
              {t("common.cancel", "Cancel")}
            </Button>
            {currentStep === steps.length - 1 ? (
              <Button type="submit" variant="primary" disabled={saving}>
                {saving
                  ? t("common.saving", "Saving...")
                  : t("common.saveChanges", "Save changes")}
              </Button>
            ) : (
              <Button type="submit" variant="primary">
                {t("common.next", "Next")}
              </Button>
            )}
          </Col>
        </Row>
      </form>
    </div>
  );
}
