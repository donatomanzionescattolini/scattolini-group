# Authentication and Editor Setup Guide

This guide explains how to set up and use the new authentication system and multi-step content editor for managing
Desarrollo and Area objects in the Scattolini Group website.

## Overview

The implementation includes:

- **Firebase Authentication** for secure user login/logout
- **Firebase Firestore** for data persistence
- **Multi-step wizard** for editing Desarrollo and Area objects
- **Protected routes** ensuring only authenticated users can access the editor

## Prerequisites

- Node.js 16+ installed
- Firebase account (free tier is sufficient)
- Access to Firebase Console

## Initial Setup

### 1. Firebase Project Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select an existing one
3. Enable **Authentication**:
    - Navigate to Authentication > Sign-in method
    - Enable "Email/Password" provider
    - Add authorized users in the Users tab
4. Enable **Firestore Database**:
    - Navigate to Firestore Database
    - Create database in production mode
    - Choose a region close to your users

### 2. Get Firebase Credentials

1. In Firebase Console, go to Project Settings (gear icon)
2. Under "Your apps", add a Web app
3. Copy the configuration values
4. Create a `.env` file in the project root:

```bash
cp .env.example .env
```

5. Fill in your Firebase credentials in `.env`:

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 3. Create Firebase User

In Firebase Console > Authentication > Users:

1. Click "Add user"
2. Enter email and password
3. Save the credentials (you'll need them to log in)

### 4. Install Dependencies

```bash
npm install --legacy-peer-deps
```

### 5. Run the Application

**Development mode:**

```bash
npm run dev
```

**Production build:**

```bash
npm run build
npm run preview
```

## Using the Editor

### Logging In

1. Navigate to `/login` in your browser
2. Enter your Firebase credentials
3. Click "Iniciar Sesión"
4. You'll be redirected to the editor at `/editor`

### Editing Desarrollos

1. In the editor, stay on the "Desarrollos" tab
2. Click on any desarrollo from the list
3. Follow the multi-step wizard:
    - **Step 1: Información Básica** - Edit name, title, slogan
    - **Step 2: Detalles** - Edit introduction, location
    - **Step 3: Características** - Edit units, floors, completion year
    - **Step 4: Revisión** - Review all changes
4. Click "Guardar Cambios" to save

### Importing Existing File-Based Content into Firestore

If your existing `Area` and `Desarrollo` content still lives in `src/objects/**`, you can import that legacy content into Firestore from the admin panel.

1. Log in and open `/editor`
2. At the top of the editor page, find the **Legacy content migration** panel
3. Review the counts for areas and developments detected from the legacy files
4. Click **Import legacy content into Firestore**
5. Confirm the import when prompted

What this does:

- Reads the legacy static content already defined in the codebase
- Serializes it into Firestore-safe data
- Writes it into the `areas` and `desarrollos` collections using merge writes
- Refreshes the in-memory site content so imported records are available immediately

Important notes:

- The migration is safe to re-run because it uses document IDs derived from the existing content and writes with merge semantics
- Existing Firestore documents with the same IDs will be updated
- Rich JSX-only fields from legacy objects are skipped or normalized during serialization so Firestore import does not fail

### Editing Areas

1. In the editor, click the "Áreas" tab
2. Click on any area from the list
3. Follow the multi-step wizard:
    - **Step 1: Información Básica** - Edit name, title, slogan
    - **Step 2: Descripción** - Edit description paragraphs
    - **Step 3: Revisión** - Review all changes
4. Click "Guardar Cambios" to save

### Logging Out

Click "Cerrar Sesión" in the top-right corner of the editor.

## Data Persistence

Data is stored in Firebase Firestore in two collections:

- `desarrollos` - Contains all Desarrollo objects
- `areas` - Contains all Area objects

Each object is serialized to remove React components and functions before storage.

## Security

- All editor routes are protected and require authentication
- Firebase Authentication handles session management
- Environment variables keep credentials secure
- Never commit `.env` file to version control

## Firestore Security Rules

This repository already includes a `firestore.rules` file. The intended behavior is:

- Public read access for `areas` and `desarrollos` so the website can render dynamic content
- Authenticated write access for the admin editor and legacy migration tool

If you are configuring rules manually in Firebase Console > Firestore Database > Rules, use the rules from this repository rather than the old fully-authenticated example.

Current project rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    function isSignedIn() {
      return request.auth != null;
    }

    match /desarrollos/{documentId} {
      allow read: if true;
      allow create, update, delete: if isSignedIn();
    }

    match /areas/{documentId} {
      allow read: if true;
      allow create, update, delete: if isSignedIn();
    }

    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

## Troubleshooting

### "Firebase not configured" error

- Ensure `.env` file exists and contains all required values
- Restart the development server after creating/updating `.env`

### Login fails with "auth/user-not-found"

- Verify the user exists in Firebase Console > Authentication > Users
- Check that email/password are correct

### Data not saving

- Check Firebase Console > Firestore Database to see if data appears
- Verify Firestore rules allow authenticated writes
- Check browser console for error messages

### Legacy migration fails

- Verify you are signed in before running the migration from `/editor`
- Confirm Firestore rules allow authenticated writes to `areas` and `desarrollos`
- Check that your Firebase project is correctly configured in `.env`
- Open browser devtools and review any logged Firestore permission or network errors

### Build errors

- Run `npm install --legacy-peer-deps` to ensure all dependencies are installed
- Clear `node_modules` and `package-lock.json`, then reinstall if issues persist

## Architecture

### Key Components

- `src/config/firebase.ts` - Firebase initialization
- `src/contexts/AuthContext.tsx` - Authentication state management
- `src/components/auth/Login.tsx` - Login page
- `src/components/auth/ProtectedRoute.tsx` - Route guard
- `src/components/editor/Editor.tsx` - Main editor page
- `src/components/editor/DesarrolloEditor.tsx` - Desarrollo list and editor
- `src/components/editor/AreaEditor.tsx` - Area list and editor
- `src/components/editor/MultiStepWizard.tsx` - Multi-step form wizard
- `src/services/database.ts` - Firestore CRUD operations

### Data Flow

1. User logs in via Firebase Auth
2. AuthContext stores user session
3. Protected routes verify authentication
4. Editor can import legacy file-based content into Firestore
5. Editor changes are saved to Firestore
6. Public site reads merged legacy-plus-Firestore content, with Firestore-backed areas and developments available dynamically

## Next Steps

Recommended follow-up improvements:

1. Migrate any remaining object-based content types into Firestore using the same pattern
2. Expand editor fields for any rich structured data you still keep only in code
3. Add content versioning or backups before large admin edits
4. Consider moving heavy public reads behind a cache or API layer if content volume grows

## Support

For issues or questions:

1. Check Firebase Console for errors
2. Review browser console for client-side errors
3. Verify `.env` configuration
4. Ensure Firebase services are enabled in Console
