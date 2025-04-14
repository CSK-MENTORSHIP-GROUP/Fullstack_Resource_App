# CSK Resource Hub API

This is the backend API for the CSK Resource Hub project, which manages educational resources for the Computer Society of Kirinyaga.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [MongoDB Atlas Setup](#mongodb-atlas-setup)
- [Environment Variables](#environment-variables)
- [Running the API](#running-the-api)
- [API Documentation](#api-documentation)

## Prerequisites

- Node.js (v18 or higher)
- MongoDB Atlas account
- Git
- pnpm (recommended) or npm

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Resource_Hub/API
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Create a `.env` file in the API directory with the following variables:
```env
PORT=3000
MONGODB_URI=your_mongodb_uri
```

## Project Structure

```
API/
├── src/
│   ├── controllers/     # Request handlers
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   ├── validators/      # Request validation
│   ├── config.ts        # Configuration settings
│   └── server.ts        # Server entry point
├── .env                 # Environment variables
├── package.json         # Project dependencies
├── tsconfig.json        # TypeScript configuration
└── README.md           # Project documentation
```

## MongoDB Atlas Setup

1. Create a MongoDB Atlas account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster (free tier is sufficient for development)
3. Set up database access:
   - Go to Database Access
   - Click "Add New Database User"
   - Choose "Password" authentication
   - Create a username and password
   - Set appropriate privileges (at least readWrite)

4. Set up network access:
   - Go to Network Access
   - Click "Add IP Address"
   - For development, you can add your current IP or use "Allow Access from Anywhere" (0.0.0.0/0)

5. Get your connection string:
   - Go to Database
   - Click "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password
   - Replace `<dbname>` with your database name

## Environment Variables

Create a `.env` file in the API directory with the following variables:

```env
PORT=3000
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority
```

## Running the API

1. Start the development server:
```bash
pnpm dev
# or
npm run dev
```

The server will start on `http://localhost:3000`

## API Documentation

The API documentation will be available at `http://localhost:3000/docs` once implemented.

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

This project is licensed under the ISC License.
