import React, { useEffect } from "react";
import { Form, ListGroup, Spinner } from "react-bootstrap";
import usePlacesAutocomplete from "use-places-autocomplete";
import { useLoadScript } from "@react-google-maps/api";
import { useTranslation } from "../../i18n";

interface AddressAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
}

const libraries: ("places")[] = ["places"];

function AddressAutocompleteInner({ value, onChange, label }: AddressAutocompleteProps) {
  const { t } = useTranslation();

  const {
    ready,
    value: inputValue,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here if needed */
    },
    debounce: 300,
  });

  // Sync prop value to local hook value
  useEffect(() => {
      if (value !== inputValue) {
        setValue(value, false);
      }
  }, [value, setValue]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange(e.target.value);
  };

  const handleSelect = (description: string) => {
    setValue(description, false);
    clearSuggestions();
    onChange(description);
  };

  return (
    <Form.Group className="mb-4 position-relative">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type="text"
        value={inputValue}
        onChange={handleInput}
        disabled={!ready}
        placeholder={String(t("pages.editor.searchAddress", "Search for an address..."))}
        autoComplete="off"
      />
      {status === "OK" && (
        <ListGroup className="position-absolute w-100 shadow" style={{ zIndex: 1050, maxHeight: "200px", overflowY: "auto" }}>
          {data.map(({ place_id, description }) => (
            <ListGroup.Item
              action
              key={place_id}
              onClick={() => handleSelect(description)}
            >
              {description}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
       <div className="form-text text-muted">
            {t("pages.editor.addressHelp", "Start typing to see suggestions")}
        </div>
    </Form.Group>
  );
}

export default function AddressAutocomplete(props: AddressAutocompleteProps) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "",
    libraries,
  });

  const { t } = useTranslation();

  if (loadError) {
      console.warn("Google Maps API failed to load", loadError);
      return (
         <Form.Group className="mb-4">
            <Form.Label>{props.label}</Form.Label>
            <Form.Control
              type="text"
              value={props.value}
              onChange={(e) => props.onChange(e.target.value)}
              placeholder={String(t("pages.editor.enterAddress", "Enter address"))}
            />
             <div className="form-text text-danger">
               {t("pages.editor.googleMapsError", "Address autocomplete unavailable (API Key missing or invalid)")}
            </div>
         </Form.Group>
      );
  }

  if (!isLoaded) {
      return (
         <Form.Group className="mb-4">
             <Form.Label>{props.label}</Form.Label>
             <div className="d-flex align-items-center">
                <Spinner size="sm" animation="border" className="me-2"/>
                <Form.Control
                  type="text"
                  disabled
                  placeholder={String(t("common.loading", "Loading..."))}
                />
             </div>
         </Form.Group>
      );
  }

  return <AddressAutocompleteInner {...props} />;
}

