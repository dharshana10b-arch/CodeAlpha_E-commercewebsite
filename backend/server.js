require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'shopkart_secret_2024';

app.use(cors());
app.use(express.json());

// ─── IN-MEMORY STORES (replace with MongoDB in production) ───
const products = require('./data/products');
let users = [];
let orders = [];
let orderIdCounter = 1000;

// ─── AUTH MIDDLEWARE ───
function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token provided' });
  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
}

// ─── PRODUCT ROUTES ───
// GET /api/products — all products, optional ?category= filter
app.get('/api/products', (req, res) => {
  const { category, search } = req.query;
  let result = [...products];
  if (category && category !== 'all') result = result.filter(p => p.category === category);
  if (search) result = result.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.description.toLowerCase().includes(search.toLowerCase())
  );
  res.json(result);
});

// GET /api/products/:id
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return res.status(404).json({ error: 'Product not found' });
  res.json(product);
});

// GET /api/categories
app.get('/api/categories', (req, res) => {
  const categories = [
    { id: 'electronics', label: 'Electronics', icon: '⚡', count: products.filter(p=>p.category==='electronics').length },
    { id: 'fashion',     label: 'Fashion',     icon: '👗', count: products.filter(p=>p.category==='fashion').length },
    { id: 'food',        label: 'Food & Grocery', icon: '🛒', count: products.filter(p=>p.category==='food').length },
    { id: 'books',       label: 'Books',       icon: '📚', count: products.filter(p=>p.category==='books').length },
    { id: 'home',        label: 'Home & Kitchen', icon: '🏠', count: products.filter(p=>p.category==='home').length },
  ];
  res.json(categories);
});

// ─── AUTH ROUTES ───
// POST /api/auth/register
app.post('/api/auth/register', async (req, res) => {
  const { name, email, password, phone } = req.body;
  if (!name || !email || !password) return res.status(400).json({ error: 'All fields required' });
  if (users.find(u => u.email === email)) return res.status(400).json({ error: 'Email already registered' });
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = { id: `u${Date.now()}`, name, email, phone: phone || '', password: hashedPassword, createdAt: new Date() };
  users.push(user);
  const token = jwt.sign({ id: user.id, email: user.email, name: user.name }, JWT_SECRET, { expiresIn: '7d' });
  res.status(201).json({ token, user: { id: user.id, name: user.name, email: user.email, phone: user.phone } });
});

// POST /api/auth/login
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  if (!user) return res.status(400).json({ error: 'Invalid credentials' });
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).json({ error: 'Invalid credentials' });
  const token = jwt.sign({ id: user.id, email: user.email, name: user.name }, JWT_SECRET, { expiresIn: '7d' });
  res.json({ token, user: { id: user.id, name: user.name, email: user.email, phone: user.phone } });
});

// GET /api/auth/me
app.get('/api/auth/me', authMiddleware, (req, res) => {
  const user = users.find(u => u.id === req.user.id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json({ id: user.id, name: user.name, email: user.email, phone: user.phone });
});

// ─── ORDER ROUTES ───
// POST /api/orders — place order
app.post('/api/orders', authMiddleware, (req, res) => {
  const { items, address, paymentMethod } = req.body;
  if (!items || items.length === 0) return res.status(400).json({ error: 'No items in order' });
  if (!address) return res.status(400).json({ error: 'Delivery address required' });

  const enrichedItems = items.map(item => {
    const product = products.find(p => p.id === item.productId);
    return { ...item, name: product?.name, price: product?.price, image: product?.image };
  });
  const total = enrichedItems.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const order = {
    id: `ORD${orderIdCounter++}`,
    userId: req.user.id,
    items: enrichedItems,
    total,
    address,
    paymentMethod: paymentMethod || 'COD',
    status: 'Confirmed',
    placedAt: new Date(),
    estimatedDelivery: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)
  };
  orders.push(order);
  res.status(201).json(order);
});

// GET /api/orders — user's orders
app.get('/api/orders', authMiddleware, (req, res) => {
  const userOrders = orders.filter(o => o.userId === req.user.id);
  res.json(userOrders.reverse());
});

// GET /api/orders/:id
app.get('/api/orders/:id', authMiddleware, (req, res) => {
  const order = orders.find(o => o.id === req.params.id && o.userId === req.user.id);
  if (!order) return res.status(404).json({ error: 'Order not found' });
  res.json(order);
});

app.listen(PORT, () => console.log(`ShopKart API running on http://localhost:${PORT}`));