# Production Deployment Checklist

## Environment Variables Required in Vercel

Make sure ALL of these are set in your Vercel project settings:

### Firebase Configuration
```
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_DATABASE_URL=https://your-project-default-rtdb.firebaseio.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### AWS S3 Configuration
```
VITE_AWS_ACCESS_KEY_ID=your_access_key_id
VITE_AWS_SECRET_ACCESS_KEY=your_secret_access_key
VITE_AWS_REGION=us-east-1
VITE_S3_BUCKET=your-bucket-name
```

## Steps to Deploy

1. **Add Environment Variables to Vercel**
   - Go to https://vercel.com/dashboard
   - Select your project
   - Go to Settings → Environment Variables
   - Add each variable above
   - Select Production, Preview, and Development for each

2. **Deploy Firestore Security Rules**
   ```bash
   firebase deploy --only firestore:rules
   ```

3. **Verify Firebase Authentication**
   - Ensure user accounts are created in Firebase Console
   - Test login at `/login` after deployment

4. **Test Uploads After Deployment**
   - Login to `/editor`
   - Test each upload type:
     - Banner (single image → banner.jpg)
     - Thumbnail (single image → {projectName}.webp)
     - Video (single video → video.mp4)
     - PDFs (upload separately: brochure.pdf, hoja.pdf, planos.pdf)
     - Gallery (multiple images → image (1).jpg, image (2).jpg, etc.)

5. **Check Browser Console**
   - Open DevTools Console
   - Look for "[S3 config]" log to verify credentials are loaded
   - Look for any Firebase errors

## Common Issues

### "Missing or insufficient permissions" (Firebase)
- **Cause**: Firestore rules not deployed
- **Fix**: Run `firebase deploy --only firestore:rules`

### "Missing App configuration value: projectId" (Firebase)
- **Cause**: Environment variables not set in Vercel
- **Fix**: Add all VITE_FIREBASE_* variables in Vercel settings

### "InvalidAccessKeyId" or "SignatureDoesNotMatch" (S3)
- **Cause**: AWS credentials not set or incorrect in Vercel
- **Fix**: Add all VITE_AWS_* variables in Vercel settings

### Uploads fail silently
- **Cause**: Missing AWS credentials
- **Fix**: Check browser console for "[S3 config] Missing AWS credentials" error

## File Upload Specifications

| Type | Input | Output | Location |
|------|-------|--------|----------|
| Banner | Any image | banner.jpg | assets2/desarrollos/{project}/ |
| Thumbnail | Any image | {project}.webp | assets2/areas/{area}/ |
| Video | Any video | video.mp4 | assets2/desarrollos/{project}/ |
| PDF | brochure.pdf | brochure.pdf | assets2/desarrollos/{project}/pdfs/ |
| PDF | hoja.pdf | hoja.pdf | assets2/desarrollos/{project}/pdfs/ |
| PDF | planos.pdf | planos.pdf | assets2/desarrollos/{project}/pdfs/ |
| Gallery | Any images | image (N).jpg | assets2/desarrollos/{project}/image-gallery/ |

## After Deployment

1. Clear browser cache
2. Test all functionality
3. Verify uploads appear in S3 bucket
4. Verify data saves to Firestore
5. Test on mobile devices
