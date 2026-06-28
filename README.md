# Zerodha Clone (MERN Stack)

A full-stack stock trading platform inspired by Zerodha.

## Features

- User Authentication (JWT)
- User-wise Holdings
- User-wise Orders
- Buy Stocks
- Sell Stocks
- Dashboard UI
- Portfolio Tracking
- Protected Routes
- MongoDB Database

## Tech Stack

Frontend:
- React
- Vite
- CSS
- Axios

Dashboard:
- React
- Chart.js

Backend:
- Node.js
- Express.js
- MongoDB
- JWT

## Folder Structure

NewStockTrading
│
├── frontend
├── dashboard
├── Backend

## Installation

Clone repository:

```bash
git clone YOUR_REPO_URL
```

Install dependencies:

```bash
cd frontend
npm install

cd ../dashboard
npm install

cd ../Backend
npm install
```

Run project:

Backend:

```bash
npm start
```

Frontend:

```bash
npm run dev
```

Dashboard:

```bash
npm run dev
```

## Environment Variables

Create `.env`

```env
MONGO_URL=YOUR_MONGO_URL
JWT_SECRET=YOUR_SECRET
PORT=3002
```

## Future Improvements

- Live stock prices
- Order history
- Better portfolio analytics


## Author

Om Wani