# 🎓 Course Selling Application (Backend)

A **Node.js backend API** for a course selling platform where **admins can create courses and users can purchase them**.

This project demonstrates **authentication, authorization, REST APIs, and MongoDB integration**.

---

# 🚀 Features

* Admin authentication using **JWT**
* User authentication using **JWT**
* Admin can **create and update courses**
* Users can **browse and purchase courses**
* Middleware-based **route protection**
* MongoDB database integration using **Mongoose**

---

# 🛠 Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **JWT (JSON Web Tokens)**
* **dotenv**

---

# 📂 Project Structure

```
.
├── index.js
├── db.js
├── .env
├── package.json
│
├── routes
│   ├── admin.js
│   ├── user.js
│   └── course.js
│
├── middlewares
│   ├── admin.js
│   └── user.js
```

---

# ⚙️ Environment Variables

Create a `.env` file in the root directory.

```
MONGO_URL=your_mongodb_connection_string
JWT_ADMIN_PASSWORD=your_admin_secret
JWT_USER_PASSWORD=your_user_secret
```

---

# 📦 Installation

Clone the repository

```
git clone https://github.com/yourusername/course-selling-backend.git
```

Navigate to the project directory

```
cd course-selling-backend
```

Install dependencies

```
npm install
```

Start the server

```
node index.js
```

Server will run on:

```
http://localhost:3000
```

---

# 🔐 Authentication

Protected routes require a **JWT token**.

Example header:

```
token: your_jwt_token
```

---

# 📡 API Endpoints

## 👤 User Routes

### Signup

```
POST /api/v1/user/signup
```

### Signin

```
POST /api/v1/user/signin
```

### Get Purchased Courses

```
GET /api/v1/user/purchase
```

---

## 👨‍💼 Admin Routes

### Admin Signup

```
POST /api/v1/admin/signup
```

### Admin Signin

```
POST /api/v1/admin/signin
```

### Create Course

```
POST /api/v1/admin/course
```

### Update Course

```
PUT /api/v1/admin/course
```

### Get All Courses Created by Admin

```
GET /api/v1/admin/course/bulk
```

---

## 📚 Course Routes

### Purchase Course

```
POST /api/v1/course/purchase
```

### Preview Courses

```
GET /api/v1/course/preview
```

---

# 🗄 Database Models

## User

* email
* password
* firstName
* lastName

## Admin

* email
* password
* firstName
* lastName

## Course

* title
* description
* imageUrl
* price
* creatorId

## Purchase

* userId
* courseId

---

# 🔒 Security Improvements (Future Work)

* Password hashing using **bcrypt**
* Request validation using **Zod**
* Rate limiting
* Refresh token authentication
* Payment integration

---

# 👨‍💻 Author

**Samarth**

GitHub: https://github.com/Samarth-2409X

