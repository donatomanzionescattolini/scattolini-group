import React, { useEffect, useMemo, useState } from "react";
import { Form, ListGroup, Spinner } from "react-bootstrap";
import { useTranslation } from "../../i18n";

interface AddressSuggestion {
  place_id: number;
  display_name: string;
}

interface AddressAutocompleteFieldProps {
  value: string;
  onValueChange: (value: string) => void;
  onSelectSuggestion: (value: string) => void;
  selected: boolean;
}

export default function AddressAutocompleteField({
  value,
  onValueChange,
  onSelectSuggestion,
  selected,
}: AddressAutocompleteFieldProps) {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<AddressSuggestion[]>([]);
  const [error, setError] = useState("");

  const trimmedValue = useMemo(() => value.trim(), [value]);

  useEffect(() => {
    if (!trimmedValue || selected || trimmedValue.length < 3) {
      setSuggestions([]);
      return;
    }

    const controller = new AbortController();
    const timeout = window.setTimeout(async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&limit=6&q=${encodeURIComponent(trimmedValue)}`,
          {
            signal: controller.signal,
            headers: {
              "Accept-Language": "en,es",
            },
          },
        );

        if (!response.ok) {
          console.error("Address search failed", response.status);
          setSuggestions([]);
          setError(
            String(
              t(
                "pages.editor.address.lookupError",
                "We could not fetch address suggestions right now.",
              ),
            ),
          );
          return;
        }

        const results = (await response.json()) as AddressSuggestion[];
        setSuggestions(results);
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          console.error("Address autocomplete error:", err);
          setError(
            String(
              t(
                "pages.editor.address.lookupError",
                "We could not fetch address suggestions right now.",
              ),
            ),
          );
        }
      } finally {
        setLoading(false);
      }
    }, 350);

    return () => {
      controller.abort();
      window.clearTimeout(timeout);
    };
  }, [selected, t, trimmedValue]);

  return (
    <div>
      <Form.Control
        type="text"
        value={value}
        onChange={(event) => onValueChange(event.target.value)}
        placeholder={String(
          t(
            "pages.editor.address.placeholder",
            "Type at least 3 characters to search",
          ),
        )}
      />

      {loading && (
        <div className="small text-muted mt-2">
          <Spinner animation="border" size="sm" className="me-2" />
          {t("pages.editor.address.searching", "Searching addresses...")}
        </div>
      )}

      {error && <div className="text-danger small mt-2">{error}</div>}

      {!selected && suggestions.length > 0 && (
        <ListGroup className="mt-2">
          {suggestions.map((suggestion) => (
            <ListGroup.Item
              key={suggestion.place_id}
              action
              onClick={() => {
                setSuggestions([]);
                onSelectSuggestion(suggestion.display_name);
              }}
            >
              {suggestion.display_name}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}

      {!selected && trimmedValue.length >= 3 && (
        <div className="form-text text-warning mt-2">
          {t(
            "pages.editor.address.mustSelect",
            "Please click the matching address from the list above to confirm it.",
          )}
        </div>
      )}
    </div>
  );
}
