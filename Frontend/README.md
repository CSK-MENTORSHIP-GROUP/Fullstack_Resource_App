# CSK Resource Hub Frontend

This is the frontend application for the CSK Resource Hub project, built with React, TypeScript, and Tailwind CSS.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Development](#development)
- [Building for Production](#building-for-production)
- [Styling](#styling)
- [Contributing](#contributing)

## Prerequisites

- Node.js (v18 or higher)
- pnpm (recommended) or npm
- Git

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Resource_Hub/frontend
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

## Project Structure

```
frontend/
├── src/
│   ├── assets/         # Static assets (images, fonts, etc.)
│   ├── components/     # Reusable React components
│   ├── pages/          # Page components
│   ├── utils/          # Utility functions and helpers
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles
├── public/             # Public assets
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Project dependencies
```

## Available Scripts

In the project directory, you can run:

### `pnpm dev` or `npm run dev`

Runs the app in development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### `pnpm build` or `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `pnpm preview` or `npm run preview`

Previews the production build locally.

### `pnpm lint` or `npm run lint`

Runs ESLint to check for code quality issues.

## Development

The project uses:
- React 19 with TypeScript
- Vite as the build tool
- Tailwind CSS for styling
- DaisyUI for UI components
- React Router for navigation
- ESLint for code linting

### Key Features

- Modern React with TypeScript
- Responsive design with Tailwind CSS
- Component-based architecture
- Client-side routing
- Optimized production builds

## Building for Production

1. Build the application:
```bash
pnpm build
# or
npm run build
```

2. Preview the production build:
```bash
pnpm preview
# or
npm run preview
```

The build artifacts will be stored in the `dist/` directory.

## Styling

The project uses:
- Tailwind CSS for utility-first styling
- DaisyUI for pre-built components
- Custom CSS for specific styling needs

To add new styles:
1. Use Tailwind classes directly in your components
2. For custom styles, add them to the appropriate CSS file
3. For component-specific styles, use CSS modules

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Run the linter to ensure code quality:
```bash
pnpm lint
# or
npm run lint
```
4. Submit a pull request

## License

This project is licensed under the ISC License.
