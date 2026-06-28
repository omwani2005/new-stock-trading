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
git clone https://github.com/omwani2005/new-stock-trading
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
MONGO_URL=mongodb+srv://omwani0123_db_user:Omwani123@zerodhaclonecluster.ulrk7xo.mongodb.net/zerodha?appName=ZerodhaCloneCluster
JWT_SECRET=ZERODHA_JWT_SECRET
PORT=3002
```

## Future Improvements

- Live stock prices
- Order history
- Better portfolio analytics

## Author

Om Wani