# Portfolio Project

A full-stack portfolio application built with Ruby on Rails (API) and React (Vite).

## Tech Stack

### Backend
- **Ruby**: 3.3.0
- **Rails**: 8.1.1 (API mode)
- **Database**: PostgreSQL
- **CORS**: Configured for frontend communication

### Frontend
- **React**: 19.2.0
- **Vite**: 7.2.4
- **Build Tool**: Vite with React plugin

## Project Structure
I am just using one directory to manage the frontend and backend for simplicity. It's a portfolio, not some crazy wild in-house application.

```
portfolio/
├── backend/          # Rails API application
│   ├── app/
│   ├── config/
│   ├── db/
│   └── ...
├── frontend/         # React + Vite application
│   ├── src/
│   ├── public/
│   └── ...
└── README.md
```

## Getting Started

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Set up the database:
   ```bash
   rails db:create db:migrate
   ```

4. Start the Rails server:
   ```bash
   rails server
   ```

   The API will run on `http://localhost:3000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies (already done):
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The React app will run on `http://localhost:5173`

## Development

### Running Both Applications

You'll need two terminal windows:

**Terminal 1 - Backend:**
```bash
cd backend
rails server
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

### CORS Configuration

The Rails API is configured to accept requests from:
- `http://localhost:5173`
- `http://127.0.0.1:5173`

Configuration can be found in [backend/config/initializers/cors.rb](backend/config/initializers/cors.rb).

## Available Scripts

### Backend (Rails)
- `rails server` - Start the development server
- `rails console` - Open Rails console
- `rails db:migrate` - Run database migrations
- `rails routes` - View all API routes

### Frontend (React/Vite)
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## License

This is a personal portfolio project. That's all there is to it!
