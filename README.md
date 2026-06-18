# prisma-sandbox 🧪

A backend REST API built with **Node.js**, **Express**, and **Prisma ORM** — created for learning and practicing Prisma with a real-world project structure.

---

## 📁 Project Structure

```
prisma-sandbox/
├── prisma/
│   └── schema.prisma         # Prisma schema & database models
├── src/
│   ├── controllers/
│   │   ├── user.controller.js   # User auth logic
│   │   └── post.controller.js   # Post CRUD logic
│   ├── routes/
│   │   ├── user.route.js        # Auth routes
│   │   └── post.route.js        # Post routes
│   ├── middlewares/
│   │   └── isloggedin.js        # JWT auth middleware
│   ├── helper/
│   │   └── getjwttoken.js       # JWT token helper
│   ├── lib/
│   │   └── prisma.js            # Prisma client instance
│   └── utils/
│       └── cookieToken.js       # Cookie utility
├── .env
├── index.js
└── package.json
```

---

## 🚀 Features

- User **Signup / Login / Logout**
- JWT-based authentication via cookies
- Protected routes using `isLoggedIn` middleware
- Post **Create / Read / Update / Delete** (CRUD)
- Prisma ORM for database interactions

---

## 🛣️ API Routes

### Auth Routes (`/api/user`)

| Method | Endpoint   | Description       | Auth Required |
|--------|------------|-------------------|---------------|
| POST   | `/signup`  | Register new user | ❌            |
| POST   | `/login`   | Login user        | ❌            |
| GET    | `/logout`  | Logout user       | ✅            |

### Post Routes (`/api/post`)

| Method | Endpoint          | Description      | Auth Required |
|--------|-------------------|------------------|---------------|
| POST   | `/create`         | Create a post    | ✅            |
| PUT    | `/update/:PostId` | Update a post    | ✅            |
| DELETE | `/delete/:postId` | Delete a post    | ✅            |
| GET    | `/allposts`       | Get all posts    | ✅            |

---

## ⚙️ Setup & Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/prisma-sandbox.git
   cd prisma-sandbox
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root:
   ```env
   DATABASE_URL="your-database-url"
   JWT_SECRET="your-jwt-secret"
   ```

4. **Run Prisma migrations**
   ```bash
   npx prisma migrate dev
   ```

5. **Start the server**
   ```bash
   node index.js
   ```

---

## 🛠️ Tech Stack

- **Runtime** — Node.js
- **Framework** — Express.js
- **ORM** — Prisma
- **Auth** — JWT (JSON Web Tokens)

---

## 📚 Purpose

This project was built to practice and explore **Prisma ORM** — including schema design, CRUD operations, and integrating Prisma into a real Express API.
