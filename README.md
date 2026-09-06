# Fenvo – Stock Trading Platform

A full-stack stock trading web application inspired by modern brokerage platforms such as Zerodha. Fenvo provides a responsive landing page, user authentication, and a trading dashboard for managing orders, holdings, positions, and funds through a React frontend and Node.js/Express backend.

## 🚀 Live Demo

**Fenvo Stock Trading Platform:** https://fenvo-stock-trading-platform.onrender.com

> This project is built for learning and portfolio purposes. It does not execute real stock-market trades.

## ✨ Features

### 🔐 Authentication

- User signup and login
- JWT-based authentication
- HTTP cookie-based token handling
- Protected dashboard routes
- Logout flow

### 📊 Trading Dashboard

- Portfolio summary
- Holdings management
- Positions view
- Order history
- Funds section
- Buy and sell order actions
- Interactive dashboard charts
- Responsive dashboard interface

### 🌐 Landing Website

- Home page
- About section
- Products
- Pricing
- Support
- Login and signup pages
- Responsive navigation and footer

### 🔌 Backend APIs

- Authentication
- Fetch holdings
- Fetch positions
- Fetch orders
- Create new orders
- Backend health/status check

### 🗄️ Database

- MongoDB database
- Mongoose ODM
- Models for users, orders, holdings, and positions

## 🛠️ Tech Stack

### Frontend

- React.js
- React Router
- Axios
- Material UI
- Chart.js
- React Chart.js 2
- React Toastify
- Bootstrap/CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- Cookie Parser
- CORS
- dotenv

### Deployment

- Render
- MongoDB Atlas

## 🏗️ Project Structure

```text
Fenvo-Stock-Trading-platform/
│
├── backend/
│   ├── Controllers/
│   ├── Middlewares/
│   ├── Routes/
│   ├── Schemas/
│   ├── model/
│   ├── util/
│   ├── index.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── dashboard/
│   │   │   ├── component/
│   │   │   └── data/
│   │   ├── landing_page/
│   │   ├── index.css
│   │   └── index.js
│   ├── package.json
│   └── .env
│
└── README.md
```

## 🔄 Application Flow

```text
User
  │
  ▼
React Landing Page
  │
  ├── Signup ──────► Express API ──────► MongoDB
  │
  ├── Login ───────► Express API
  │                      │
  │                      ▼
  │                 JWT Cookie
  │                      │
  ▼                      ▼
Trading Dashboard ◄── Protected Routes
  │
  ├── Orders
  ├── Holdings
  ├── Positions
  └── Funds
          │
          ▼
     Express REST APIs
          │
          ▼
       MongoDB
```

## 📁 Main Dashboard Routes

| Route                  | Purpose           |
| ---------------------- | ----------------- |
| `/dashboard`           | Portfolio summary |
| `/dashboard/allOrders` | Order history     |
| `/dashboard/holdings`  | Holdings          |
| `/dashboard/positions` | Positions         |
| `/dashboard/funds`     | Funds             |
| `/dashboard/apps`      | Applications      |

## 🔗 Backend API Endpoints

| Method | Endpoint              | Description                |
| ------ | --------------------- | -------------------------- |
| `GET`  | `/`                   | Backend health/status      |
| `GET`  | `/allHoldings`        | Fetch all holdings         |
| `GET`  | `/allPositions`       | Fetch all positions        |
| `GET`  | `/allOrders`          | Fetch all orders           |
| `POST` | `/newOrder`           | Create a new order         |
| `POST` | Authentication routes | Signup/login functionality |

## ⚙️ Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/YashpalBhati68/Fenvo-Stock-Trading-platform.git
cd Fenvo-Stock-Trading-platform
```

### 2. Backend setup

```bash
cd backend
npm install
```

Create `backend/.env`:

```env
MONGO_URL=your_mongodb_connection_string
TOKEN_KEY=your_jwt_secret
FrontEnd_URL=http://localhost:3000
PORT=3002
```

Start the backend:

```bash
npm start
```

Backend:

```text
http://localhost:3002
```

### 3. Frontend setup

Open another terminal:

```bash
cd frontend
npm install
```

Create/update `frontend/.env`:

```env
REACT_APP_BACKEND_URL=http://localhost:3002
```

Start React:

```bash
npm start
```

Frontend:

```text
http://localhost:3000
```

## 🌍 Production Configuration

Frontend:

```env
REACT_APP_BACKEND_URL=https://fenvo-stock-trading-backend.onrender.com
```

Backend:

```env
MONGO_URL=your_mongodb_connection_string
TOKEN_KEY=your_jwt_secret
FrontEnd_URL=https://fenvo-stock-trading-platform.onrender.com
```

> Never commit real MongoDB credentials, JWT secrets, API keys, or other private environment variables to GitHub.

## 🔒 Security

The application uses:

- JWT authentication
- Password hashing with bcrypt/bcryptjs
- HTTP cookies for authentication tokens
- CORS configuration
- Environment variables for deployment configuration
- Protected frontend dashboard routes

If credentials have ever been committed to a public repository, rotate them immediately and replace them with new secrets.

## 🧪 Build

Create a production build:

```bash
cd frontend
npm run build
```

Start the backend:

```bash
cd backend
npm start
```

## 🚀 Deployment

The project is deployed using Render:

```text
                    ┌──────────────────────┐
                    │       Render         │
                    │                      │
User ─────────────► │   React Static Site  │
                    │         │            │
                    │         ▼            │
                    │   Node/Express API   │
                    │         │            │
                    └─────────┼────────────┘
                              ▼
                        MongoDB Atlas
```

The React frontend and Node.js backend are deployed as separate Render services.

For React Router on a Render Static Site, configure this SPA rewrite:

```text
Source:      /*
Destination: /index.html
Action:      Rewrite
```

## 📌 Future Improvements

- Real-time market price integration
- Watchlist functionality
- Advanced order validation
- Improved portfolio analytics
- Detailed transaction history
- Automated testing
- Improved mobile responsiveness
- Role-based access control
- Better loading and error states

## 👨‍💻 Author

**Yashpal Bhati**

GitHub: https://github.com/YashpalBhati68

## 📄 License

This project is intended for educational and portfolio purposes.
