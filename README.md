# Sanjai MS - Portfolio Website

A modern, responsive portfolio website showcasing Sanjai MS's skills, projects, and experience.

## Features

- Responsive design for all devices
- Light/dark mode toggle
- Interactive project cards
- Skills visualization
- Timeline for experience and education
- Contact form
- Downloadable resume

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Lucide React for icons

## Running Locally

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

## Docker Deployment

To deploy using Docker:

```bash
# Build and run with Docker Compose
docker-compose up -d

# Stop the container
docker-compose down
```

The application will be available at http://localhost:8080

## Building for Production

```bash
npm run build
```

This will create an optimized production build in the `dist` directory.