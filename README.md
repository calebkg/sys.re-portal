# Sys.re Portal

A web portal application with customizable UI elements and user authentication.

## Features

- User Authentication (Login/Register)
- Admin Dashboard
- Customizable UI Elements
  - Top Bar
  - Side Panel
  - Main Content Area
  - Service Cards
- Profile Management
- Service Categories
- Role-based Access Control

## Setup

1. Clone the repository:
```bash
git clone https://github.com/calebkg/sys.re-portal.git
cd sys.re-portal
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example` and configure your environment variables.

4. Set up the database:
- Create a MySQL database
- Run the SQL scripts in `server/config/schema.sql`

5. Start the server:
```bash
# Development mode
npm run dev

# Production mode
npm start
```

## Environment Variables

Create a `.env` file with the following variables:
```
DB_HOST=localhost
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
JWT_SECRET=your_jwt_secret
PORT=5000
```

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register a new user
- POST `/api/auth/login` - Login user
- POST `/api/auth/logout` - Logout user

### Users
- GET `/api/users/me` - Get current user
- PUT `/api/users/me` - Update current user
- GET `/api/users` - List all users (admin only)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License. 