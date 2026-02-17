# Scattolini Group Website

Real estate website for Scattolini Group featuring property developments and areas in Miami and surrounding regions.

## Features

- 🏢 **Property Listings**: Comprehensive desarrollos (developments) catalog
- 📍 **Area Information**: Detailed area guides for Miami neighborhoods
- 🔒 **Content Management**: Authenticated editor for managing content
- 🌐 **Bilingual Support**: Spanish and English content
- 📱 **Responsive Design**: Mobile-friendly interface
- 💬 **WhatsApp Integration**: Direct contact capability

## New: Authentication & Editor System

This project now includes a secure content management system for authorized users to edit property and area information through a user-friendly interface.

### Quick Links

- **[Setup Guide](./SETUP_GUIDE.md)** - Complete setup instructions for development
- **[Testing Guide](./TESTING_GUIDE.md)** - Manual testing procedures
- **[Deployment Guide](./DEPLOYMENT_GUIDE.md)** - Production deployment instructions

## Technology Stack

- **Frontend**: React 19.2 + TypeScript
- **Build Tool**: Vite 7
- **Routing**: React Router
- **UI Framework**: MDB React UI Kit, Bootstrap
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **Forms**: React Hook Form
- **Styling**: SCSS, Bootstrap

## Getting Started

### Prerequisites

- Node.js 16 or higher
- npm or yarn package manager
- Firebase account (for editor functionality)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/donatomanzionescattolini/scattolini-group.git
cd scattolini-group
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

3. (Optional) For editor functionality, set up Firebase:
   - Follow the [Setup Guide](./SETUP_GUIDE.md)
   - Create `.env` file with Firebase credentials

4. Start development server:
```bash
npm run dev
```

5. Open http://localhost:5173 in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Project Structure

```
scattolini-group/
├── src/
│   ├── components/        # React components
│   │   ├── auth/         # Authentication components
│   │   ├── editor/       # Content editor components
│   │   ├── areas/        # Area display components
│   │   └── desarrollos/  # Development display components
│   ├── objects/          # Data objects
│   │   ├── areas/        # Area definitions
│   │   └── desarrollos/  # Development definitions
│   ├── models/           # TypeScript models
│   ├── contexts/         # React contexts
│   ├── services/         # API and database services
│   ├── config/           # Configuration files
│   ├── routes/           # Route definitions
│   └── types/            # TypeScript type definitions
├── public/               # Static assets
└── dist/                 # Build output
```

## Editor Access

The content editor is available at `/editor` and requires authentication:

1. Navigate to `/login`
2. Enter credentials (configured in Firebase)
3. Access the editor to manage:
   - Desarrollo objects (property developments)
   - Area objects (neighborhood information)

For detailed instructions, see the [Testing Guide](./TESTING_GUIDE.md).

## Environment Variables

Required environment variables (see `.env.example`):

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## Deployment

For production deployment instructions, see the [Deployment Guide](./DEPLOYMENT_GUIDE.md).

The application can be deployed to:
- Vercel (recommended for Vite apps)
- Firebase Hosting
- Any static hosting service

## Security

- Authentication handled by Firebase Auth
- Protected routes require login
- Environment variables for sensitive data
- Firestore security rules for data protection

See [Deployment Guide](./DEPLOYMENT_GUIDE.md) for security best practices.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Private - All rights reserved

## Contact

For questions or support, contact Scattolini Group through the website contact form or WhatsApp.

## Acknowledgments

- Built with React and Vite
- UI components from MDB React UI Kit
- Icons from Font Awesome
- Hosted on Vercel
