# Deployment Guide

This guide covers deploying the application with authentication and editor to production.

## Prerequisites

- Firebase project configured (see SETUP_GUIDE.md)
- Firebase CLI installed: `npm install -g firebase-tools`
- Vercel account (or your preferred hosting platform)

## Environment Variables for Production

### Required Variables

All hosting platforms need these environment variables configured:

```
VITE_FIREBASE_API_KEY=<your-production-key>
VITE_FIREBASE_AUTH_DOMAIN=<your-project>.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=<your-project-id>
VITE_FIREBASE_STORAGE_BUCKET=<your-project>.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=<your-sender-id>
VITE_FIREBASE_APP_ID=<your-app-id>
```

## Firestore Security Rules

**IMPORTANT**: Before deploying to production, update your Firestore security rules:

1. Go to Firebase Console > Firestore Database > Rules
2. Replace with these production-ready rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Helper function to check if user is authenticated
    function isAuthenticated() {
      return request.auth != null;
    }
    
    // Public read access for areas and desarrollos
    // Only authenticated users can write
    match /areas/{areaId} {
      allow read: if true;  // Public read
      allow write: if isAuthenticated();
    }
    
    match /desarrollos/{desarrolloId} {
      allow read: if true;  // Public read
      allow write: if isAuthenticated();
    }
  }
}
```

3. Click "Publish"

## Deployment to Vercel

### 1. Install Vercel CLI
```bash
npm install -g vercel
```

### 2. Login to Vercel
```bash
vercel login
```

### 3. Configure Environment Variables
```bash
vercel env add VITE_FIREBASE_API_KEY
vercel env add VITE_FIREBASE_AUTH_DOMAIN
vercel env add VITE_FIREBASE_PROJECT_ID
vercel env add VITE_FIREBASE_STORAGE_BUCKET
vercel env add VITE_FIREBASE_MESSAGING_SENDER_ID
vercel env add VITE_FIREBASE_APP_ID
```

When prompted, enter the values for:
- Production environment
- Preview environment (optional)
- Development environment (optional)

### 4. Deploy
```bash
vercel --prod
```

## Deployment to Firebase Hosting

### 1. Initialize Firebase Hosting
```bash
firebase login
firebase init hosting
```

When prompted:
- Select your Firebase project
- Set public directory: `dist`
- Configure as single-page app: Yes
- Set up automatic builds: No

### 2. Create firebase.json
```json
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "**/*.@(js|css|woff2)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=31536000"
          }
        ]
      }
    ]
  }
}
```

### 3. Build and Deploy
```bash
# Build the project with environment variables
npm run build

# Deploy to Firebase Hosting
firebase deploy --only hosting
```

**Note**: For Firebase Hosting, environment variables must be set during build time. You can use a `.env.production` file:

```bash
# .env.production (DO NOT COMMIT)
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
# etc.
```

## Post-Deployment Checklist

### 1. Verify Firebase Configuration
- [ ] Firestore security rules are published
- [ ] Authentication Email/Password provider is enabled
- [ ] Admin users are created in Firebase Console

### 2. Test Production Site
- [ ] Public pages load correctly (/, /desarrollos, /areas)
- [ ] /login page loads
- [ ] /editor redirects to /login when not authenticated
- [ ] Login works with correct credentials
- [ ] Editor loads and displays desarrollos and areas
- [ ] Can save changes to Firestore
- [ ] Changes persist after page reload
- [ ] Logout works correctly

### 3. Security Checks
- [ ] No sensitive credentials in client-side code
- [ ] Firebase credentials in environment variables only
- [ ] Firestore rules allow public read, authenticated write
- [ ] Only intended users have access to Firebase Authentication

### 4. Performance Checks
- [ ] Page load time < 3 seconds
- [ ] Images load efficiently
- [ ] No console errors in browser
- [ ] Mobile experience is smooth

## Managing Users

### Add a New Editor User
1. Go to Firebase Console > Authentication > Users
2. Click "Add user"
3. Enter email and password
4. Click "Add user"
5. Share credentials securely with the new user

### Remove User Access
1. Go to Firebase Console > Authentication > Users
2. Find the user
3. Click the three dots menu
4. Select "Delete user"

## Monitoring and Maintenance

### View Authentication Activity
- Firebase Console > Authentication > Users
- Shows recent sign-ins and user activity

### View Firestore Data
- Firebase Console > Firestore Database
- Browse collections: `desarrollos` and `areas`
- Can manually edit or delete documents if needed

### Monitor Errors
- Firebase Console > Crashlytics (if configured)
- Check browser console for client-side errors

### Backup Firestore Data
```bash
# Install gcloud CLI
# https://cloud.google.com/sdk/docs/install

# Export Firestore data
gcloud firestore export gs://[BUCKET_NAME]/[EXPORT_FOLDER]
```

## Rollback Procedure

If you need to rollback a deployment:

### Vercel
```bash
# List deployments
vercel list

# Promote a previous deployment
vercel promote [deployment-url]
```

### Firebase Hosting
```bash
# View previous releases
firebase hosting:channel:list

# Rollback to previous version
firebase hosting:rollback
```

## Troubleshooting

### Issue: Users can't save data
**Check**:
1. Firestore security rules allow authenticated writes
2. User is actually authenticated (check Firebase Console > Authentication)
3. Browser console for specific error messages

### Issue: Environment variables not working
**Solution**: 
- Ensure all VITE_ prefixed variables are set in hosting platform
- Rebuild the application after setting env vars
- For Vite, env vars must be set at build time

### Issue: Login works locally but not in production
**Check**:
1. Firebase API key is correct for production
2. Authorized domains include your production domain (Firebase Console > Authentication > Settings > Authorized domains)
3. Browser console for specific auth errors

## Security Best Practices

1. **Never commit `.env` files** - They're in .gitignore
2. **Rotate Firebase credentials** periodically
3. **Use different Firebase projects** for dev and production
4. **Limit user access** to only those who need it
5. **Monitor authentication logs** regularly
6. **Keep dependencies updated** for security patches

## Support Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev)
- [React Router Documentation](https://reactrouter.com)
