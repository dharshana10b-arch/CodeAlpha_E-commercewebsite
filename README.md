# 🛍️ ShopKart — E-Commerce Website

A full-stack e-commerce web application built as part of the CodeAlpha internship program.

## 🖥️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Backend | Node.js, Express.js |
| Auth | JWT + bcryptjs |
| Database | In-memory (MongoDB-ready) |

## ✨ Features

- 🛒 Shopping cart with quantity controls
- 🔐 User registration and login (JWT)
- 📦 Order placement and order history
- 🔍 Live product search
- 📂 5 categories — Electronics, Fashion, Food & Grocery, Books, Home & Kitchen
- 🏷️ 25 products with prices, ratings, discounts, and stock info
- 🥫 Manufacturing and expiry dates for food items
- ❤️ Wishlist functionality
- 📱 Responsive design

## 📁 Project Structure
## 🚀 How to Run

**1. Start the backend:**

```bash
cd backend
npm install
node server.js
```

**2. Open the frontend:**

Open `frontend/index.html` in your browser directly or use Live Server in VS Code.

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get single product |
| GET | `/api/categories` | Get all categories |
| POST | `/api/auth/register` | Register user |
| POST | `/api/auth/login` | Login user |
| POST | `/api/orders` | Place order |
| GET | `/api/orders` | Get user orders |

## 📌 Note

The frontend works even without the backend running — all product data is embedded as fallback.

---

Made by Dharshana | CodeAlpha Internship