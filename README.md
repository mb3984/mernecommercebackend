# MERN Ecommerce Backend

This is a backend for a simple MERN stack ecommerce application with JWT authentication, admin-only product management, and order handling.

---

## Features

- **User Authentication**: Register and login with JWT tokens
- **Admin Role**: Only admin can add/update/delete products
- **Products**: CRUD operations for products
- **Orders**: Users can create orders and view their own orders
- **Admin Orders**: Admin can view all orders
- **Password Validation**: Minimum 8 chars, 1 uppercase, 1 lowercase, 1 digit
- **Seed Admin**: Create initial admin user with `npm run seed`

---

## Project Structure

backend/
├─ config/
│ └─ db.js
├─ middleware/
│ └─ authMiddleware.js
├─ models/
│ ├─ User.js
│ ├─ Product.js
│ └─ Order.js
├─ routes/
│ ├─ auth.js
│ ├─ products.js
│ └─ orders.js
├─ seedAdmin.js
├─ server.js
├─ package.json
└─ .env.example

yaml
Copy code

---

## Setup

1. **Clone the repository**

```bash
git clone <repo-url>
cd backend
Install dependencies

bash
Copy code
npm install
Create .env file
Copy .env.example to .env and fill values:

ini
Copy code
PORT=4000
MONGO_URI=<your-mongodb-atlas-connection-string>
JWT_SECRET=<your-jwt-secret>
SEED_ADMIN_EMAIL=admin@demo.com      # optional
SEED_ADMIN_PASSWORD=Admin1234        # optional
Seed admin user (optional but recommended)

bash
Copy code
npm run seed
Start the server

Development (with nodemon):

bash
Copy code
npm run dev
Production:

bash
Copy code
npm start
API Endpoints
Test
css
Copy code
GET /api/test
Response: { message: "Backend is running fine!" }
Auth
bash
Copy code
POST /api/auth/register
POST /api/auth/login
Products (admin only for POST/PUT/DELETE)
bash
Copy code
GET /api/products
GET /api/products/:id
POST /api/products
PUT /api/products/:id
DELETE /api/products/:id
Orders
bash
Copy code
POST /api/orders          # create order (user)
GET /api/orders/my        # user's orders
GET /api/orders           # all orders (admin)
Notes
Images are stored as direct URLs in imageUrl.

JWT tokens are sent in Authorization: Bearer <token> header.

Use app.http or Postman to test endpoints.

For production, set a strong JWT secret and secure MongoDB credentials.
```
