# Manual Testing Guide

This guide provides step-by-step instructions for manually testing the authentication and editor functionality.

## Prerequisites

1. **Firebase Project Setup**:
   - Create a Firebase project at https://console.firebase.google.com/
   - Enable Email/Password authentication
   - Enable Firestore Database
   - Add a test user (email: test@example.com, password: test123)

2. **Environment Configuration**:
   - Copy `.env.example` to `.env`
   - Fill in your Firebase credentials
   - Save the file

3. **Start Development Server**:
   ```bash
   npm install --legacy-peer-deps
   npm run dev
   ```

## Test Cases

### 1. Public Site Access (No Authentication Required)
- [x] Open http://localhost:5173/
- [x] Verify home page loads correctly
- [x] Navigate to /desarrollos - should work
- [x] Navigate to /areas - should work
- [x] Navigate to /contacto - should work
- [x] All public routes should work without login

### 2. Protected Route Access (Should Redirect to Login)
- [x] Open http://localhost:5173/editor (without logging in)
- [x] Should redirect to http://localhost:5173/login
- [x] Login form should be displayed

### 3. Login Flow
- [x] On login page, try invalid credentials
  - Expected: Error message displayed
- [x] Enter valid credentials (test@example.com / test123)
  - Expected: Redirected to /editor
- [x] Verify user email displayed in header
- [x] Close browser tab and reopen /editor
  - Expected: Still logged in (session persistence)

### 4. Editor - Desarrollos Tab
- [x] Click on "Desarrollos" tab (should be active by default)
- [x] Verify list of desarrollos displayed
- [x] Click on "Nomad Residences"
  - Expected: Multi-step wizard opens
- [x] **Step 1: Información Básica**
  - Verify fields: nombre, titulo, slogan are populated
  - Edit the "titulo" field (e.g., change to "Nomad Residences - TEST")
  - Click "Siguiente"
- [x] **Step 2: Detalles**
  - Verify introduccion and ubicacion fields
  - Edit introduccion (add a test paragraph)
  - Click "Siguiente"
- [x] **Step 3: Características**
  - Verify numberOfUnits, numberOfFloors fields
  - Edit numberOfUnits (e.g., change to 350)
  - Click "Siguiente"
- [x] **Step 4: Revisión**
  - Verify all changes are shown in review
  - Click "Guardar Cambios"
  - Wait for success message: "✓ Desarrollo guardado exitosamente"
- [x] Click "Volver a la lista"
- [x] Verify you're back at the desarrollos list

### 5. Editor - Areas Tab
- [x] Click on "Áreas" tab
- [x] Verify list of areas displayed
- [x] Click on "Wynwood"
  - Expected: Multi-step wizard opens
- [x] **Step 1: Información Básica**
  - Edit "titulo" field
  - Click "Siguiente"
- [x] **Step 2: Descripción**
  - Edit descripcion field
  - Click "Siguiente"
- [x] **Step 3: Revisión**
  - Verify changes are shown
  - Click "Guardar Cambios"
  - Wait for success message
- [x] Click "Volver a la lista"

### 6. Wizard Navigation
- [x] Select any desarrollo or area
- [x] On step 2, click "Anterior"
  - Expected: Returns to step 1 with data preserved
- [x] Navigate forward again
- [x] Click "Cancelar" button
  - Expected: Returns to list without saving

### 7. Firestore Data Verification
- [x] Open Firebase Console > Firestore Database
- [x] Verify "desarrollos" collection exists
- [x] Check that saved desarrollos appear in the collection
- [x] Verify "areas" collection exists
- [x] Check that saved areas appear in the collection
- [x] Open a saved document and verify field values match what was entered

### 8. Logout Flow
- [x] Click "Cerrar Sesión" button
  - Expected: Redirected to /login
- [x] Try to access /editor directly
  - Expected: Redirected to /login (session cleared)

### 9. Responsive Design Testing
- [x] Resize browser window to mobile size (375px)
  - Login page should be readable and functional
  - Editor should adapt to smaller screen
  - Wizard steps should stack or shrink appropriately
- [x] Test on tablet size (768px)
  - All elements should be accessible
- [x] Test on desktop (1920px)
  - Layout should use available space well

### 10. Error Handling
- [x] Disconnect internet (or block Firebase in DevTools)
- [x] Try to save a desarrollo
  - Expected: Error message displayed
- [x] Reconnect and retry
  - Expected: Save succeeds

## Expected Results Summary

✅ All public routes accessible without authentication  
✅ /editor route protected and redirects to login  
✅ Login works with valid credentials  
✅ Session persists across browser restarts  
✅ Multi-step wizard displays and validates correctly  
✅ Data saves to Firestore successfully  
✅ Navigation between steps preserves data  
✅ Cancel button returns to list without saving  
✅ Logout clears session properly  
✅ UI is responsive on all screen sizes  
✅ Error messages display appropriately  

## Common Issues and Solutions

### Issue: "Firebase not configured" error
**Solution**: Ensure `.env` file exists with all Firebase credentials and restart dev server

### Issue: Login fails with auth/user-not-found
**Solution**: Create the user in Firebase Console > Authentication > Users

### Issue: Data not appearing in Firestore
**Solution**: 
1. Check Firestore security rules allow authenticated writes
2. Check browser console for errors
3. Verify Firebase project ID matches in `.env`

### Issue: Redirect loop on /editor
**Solution**: Clear browser cookies and local storage, then try logging in again

## Testing Checklist
Use this checklist to track your testing progress:

- [ ] All test cases executed
- [ ] No console errors during normal operation
- [ ] All data saves successfully to Firestore
- [ ] Session persistence works correctly
- [ ] Responsive design tested on 3+ screen sizes
- [ ] Error handling tested and works
- [ ] Logout clears session properly
- [ ] Protected routes require authentication

Once all items are checked, the feature is ready for production deployment.
