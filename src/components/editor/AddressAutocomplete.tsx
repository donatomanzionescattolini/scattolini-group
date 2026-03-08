import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Form} from 'react-bootstrap';
import {useTranslation} from '../../i18n.tsx';

const DEBOUNCE_DELAY_MS = 350;

interface NominatimResult {
    place_id: number;
    display_name: string;
    lat: string;
    lon: string;
}

interface AddressAutocompleteProps {
    value: string;
    onChange: (address: string) => void;
    label?: string;
    placeholder?: string;
    id?: string;
}

export default function AddressAutocomplete({
    value,
    onChange,
    label = 'Address',
    placeholder = 'Start typing an address...',
    id = 'address-autocomplete',
}: AddressAutocompleteProps) {
    const {lang} = useTranslation();
    const [inputValue, setInputValue] = useState(value);
    const [suggestions, setSuggestions] = useState<NominatimResult[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [loading, setLoading] = useState(false);
    const [confirmed, setConfirmed] = useState(!!value);
    const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    // Sync external value changes
    useEffect(() => {
        setInputValue(value);
        setConfirmed(!!value);
    }, [value]);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
                setShowSuggestions(false);
                // If user typed but didn't confirm, revert to last confirmed value
                if (!confirmed) {
                    setInputValue(value);
                }
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [confirmed, value]);

    const fetchSuggestions = useCallback(async (query: string) => {
        if (query.length < 3) {
            setSuggestions([]);
            setShowSuggestions(false);
            return;
        }
        setLoading(true);
        try {
            const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=6&addressdetails=1&accept-language=${lang}`;
            const res = await fetch(url, {
                headers: {'Accept-Language': lang, 'User-Agent': 'ScattoliniGroupAdmin/1.0'},
            });
            const data: NominatimResult[] = await res.json();
            setSuggestions(data);
            setShowSuggestions(data.length > 0);
        } catch {
            setSuggestions([]);
            setShowSuggestions(false);
        } finally {
            setLoading(false);
        }
    }, [lang]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setInputValue(val);
        setConfirmed(false);

        if (debounceRef.current) clearTimeout(debounceRef.current);
        debounceRef.current = setTimeout(() => fetchSuggestions(val), DEBOUNCE_DELAY_MS);
    };

    const handleSelect = (result: NominatimResult) => {
        const addr = result.display_name;
        setInputValue(addr);
        setConfirmed(true);
        setSuggestions([]);
        setShowSuggestions(false);
        onChange(addr);
    };

    return (
        <div ref={wrapperRef} style={{position: 'relative'}}>
            <Form.Group>
                <Form.Label htmlFor={id}>{label}</Form.Label>
                <Form.Control
                    id={id}
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder={placeholder}
                    autoComplete="off"
                    style={confirmed && inputValue ? {borderColor: '#198754'} : undefined}
                />
                {confirmed && inputValue && (
                    <Form.Text className="text-success">✓ Address confirmed</Form.Text>
                )}
                {!confirmed && inputValue.length >= 3 && !loading && suggestions.length === 0 && (
                    <Form.Text className="text-warning">No suggestions found — type more or try a different address</Form.Text>
                )}
                {loading && (
                    <Form.Text className="text-muted">Searching...</Form.Text>
                )}
            </Form.Group>

            {showSuggestions && suggestions.length > 0 && (
                <ul
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        right: 0,
                        zIndex: 1000,
                        background: '#fff',
                        border: '1px solid #ced4da',
                        borderRadius: '0 0 4px 4px',
                        listStyle: 'none',
                        margin: 0,
                        padding: 0,
                        maxHeight: 260,
                        overflowY: 'auto',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
                    }}
                >
                    {suggestions.map((s) => (
                        <li
                            key={s.place_id}
                            onMouseDown={() => handleSelect(s)}
                            style={{
                                padding: '10px 14px',
                                cursor: 'pointer',
                                fontSize: '0.875rem',
                                borderBottom: '1px solid #f0f0f0',
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.background = '#f8f9fa')}
                            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                        >
                            {s.display_name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
