# Internationalization Guide for Development Files

This guide explains how to internationalize the development files in `/src/objects/desarrollos/`.

## Overview

The internationalization system allows development properties to display content in both Spanish and English based on the user's language preference.

## Files Added

1. **`useDesarrolloI18n.ts`** - Custom hook for development-specific translations
2. **`InternationalizedExample.tsx`** - Example implementation
3. **Updated `i18n.tsx`** - Added `desarrollos` section to translations
4. **Updated `Desarrollo.tsx`** - Added `getLocalizedContent` method

## How to Internationalize a Development File

### Step 1: Add Translations to `i18n.tsx`

Add your development's content to both Spanish and English sections:

```typescript
// Spanish section (es)
desarrollos: {
  yourDevelopmentKey: {
    titulo: "Título en Español",
    subtitulo: "Subtítulo en Español",
    introduccion: [
      "Primer párrafo en español",
      "Segundo párrafo en español"
    ],
    direccion: "Dirección en español",
    caracteristicas: {
      edificio: {
        entrada: "Entrada Porte-cochère",
        vestibulo: "Vestíbulo de entrada exquisitamente decorado"
      },
      residencias: {
        planos: "Planos de planta contemporáneos"
      },
      amenidades: {
        gimnasio: "Gimnasio totalmente equipado"
      }
    }
  }
}

// English section (en) - same structure with English translations
desarrollos: {
  yourDevelopmentKey: {
    titulo: "Title in English",
    subtitulo: "Subtitle in English",
    // ... rest of translations
  }
}
```

### Step 2: Update Your Development File

Replace your development file with the internationalized pattern:

```typescript
import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import Brickell from "../../areas/Brickell.tsx";
import { useDesarrolloI18n } from "../useDesarrolloI18n";

export default function YourDevelopment() {
    const { getLocalizedField, getLocalizedArray } = useDesarrolloI18n("yourDevelopmentKey");

    const desarrolloObject = Object.getPrototypeOf(Desarrollo);
    desarrolloObject.banner = true;
    desarrolloObject.area = Brickell();
    desarrolloObject.nombre = "your-development-key";
    
    // Use internationalized content with fallbacks
    desarrolloObject.titulo = getLocalizedField("titulo", "Default Title");
    desarrolloObject.subtitulo = (
        <p className="text-cursive p-0 m-0">
            <em>{getLocalizedField("subtitulo", "Default Subtitle")}</em>
        </p>
    );
    desarrolloObject.introduccion = getLocalizedArray("introduccion", ["Default intro text"]);
    
    // Keep existing non-textual content
    desarrolloObject.video = <YourVideoComponent />;
    desarrolloObject.caracteristicas = {
        edificio: (
            <ul>
                <li>{getLocalizedField("caracteristicas.edificio.entrada", "Default entry text")}</li>
                <li>{getLocalizedField("caracteristicas.edificio.vestibulo", "Default lobby text")}</li>
            </ul>
        ),
        residencias: (
            <ul>
                <li>{getLocalizedField("caracteristicas.residencias.planos", "Default floor plans text")}</li>
            </ul>
        ),
        amenidades: (
            <ul>
                <li>{getLocalizedField("caracteristicas.amenidades.gimnasio", "Default gym text")}</li>
            </ul>
        ),
    };
    desarrolloObject.numberOfImages = 79;

    return desarrolloObject;
}
```

## Key Functions

### `getLocalizedField(field, fallback)`

- **field**: Translation key (e.g., "titulo", "subtitulo", "caracteristicas.edificio.entrada")
- **fallback**: Default text if translation is not found
- **Returns**: Translated string or fallback

### `getLocalizedArray(field, fallback)`

- **field**: Translation key for array content (e.g., "introduccion")
- **fallback**: Default array if translation is not found
- **Returns**: Array of translated strings or fallback array

## Development Key Naming

Use the development name as the key:
- Remove spaces and hyphens
- Convert to lowercase
- Example: "Baccarat Residences" → "baccarat"
- Example: "2200 Brickell" → "brickell2200"

## Migration Steps

1. **Add translations** to `i18n.tsx` for your development
2. **Import the hook**: `import { useDesarrolloI18n } from "../useDesarrolloI18n"`
3. **Replace hardcoded text** with `getLocalizedField()` calls
4. **Replace hardcoded arrays** with `getLocalizedArray()` calls
5. **Test both languages** to ensure proper display

## Benefits

- **Automatic language switching** based on user preference
- **Fallback support** if translations are missing
- **Consistent translation structure** across all developments
- **Easy maintenance** of multilingual content

## Example Usage

See `InternationalizedExample.tsx` for a complete working example of an internationalized development file.
