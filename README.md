# Scalable Backend Platform

A production-ready backend platform built using Node.js and Express, focused on scalability, security, background processing, and clean architecture.

---

## 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB
- Redis (BullMQ)
- Zod (Input validation)
- Winston (Logging)

---

## ✨ Features

- JWT Authentication
- Role-based APIs
- Background jobs using BullMQ (Redis)
- Input validation with Zod
- Security using Helmet, XSS protection & Mongo sanitize
- Centralized error handling
- Health check API for monitoring

---

## ⚙️ Setup Instructions

```bash
npm install
npm run dev

🧠 Architecture Overview

Client → Routes → Middleware → Controllers → Services → Database
Heavy tasks are handled asynchronously using Redis queues.
