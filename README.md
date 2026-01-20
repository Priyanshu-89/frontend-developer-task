# Full Stack Application – Core Features & Deliverables

## Core Features to Implement

### ✅ Frontend (Primary Focus)
- Build using **React.js** or **Next.js**
- Fully **responsive UI** using one of the following:
  - TailwindCSS
  - Material UI
  - Bootstrap
- Forms with **client-side and server-side validation**
- **Protected routes** (authentication required for dashboard access)

---

### ✅ Basic Backend (Supportive)
- Implement a lightweight backend using one of the following:
  - **Node.js with Express**
  - **Python with FastAPI or Django**

#### Backend APIs
- **Authentication**
  - User signup
  - User login
  - JWT-based authentication
- **User Profile**
  - Fetch profile data
  - Update profile data
- **Sample Entity (CRUD)**
  - Example entities: tasks, notes, or posts
  - Create
  - Read
  - Update
  - Delete

#### Database
- Connect backend to one database:
  - MongoDB
  - PostgreSQL
  - MySQL

---

### ✅ Dashboard Features
- Display authenticated **user profile** (fetched from backend)
- Full **CRUD operations** for the sample entity
- **Search and filter** functionality in the UI
- **Logout flow** (invalidate token / clear session)

---

### ✅ Security & Scalability
- Password hashing using **bcrypt** (or equivalent)
- JWT authentication middleware
- Centralized error handling
- Input validation and sanitization
- Modular and clean code structure designed for scalability

---

## Deliverables
- **Frontend + Backend source code** hosted in a GitHub repository
- Functional authentication flow:
  - Register
  - Login
  - Logout
  - JWT handling
- Dashboard with CRUD-enabled sample entity
- **Postman collection** or **API documentation**
- A short note explaining how the frontend-backend integration would be **scaled for production**

---

## Evaluation Criteria
- ✅ UI/UX quality and responsiveness
- ✅ Proper integration between frontend and backend
- ✅ Secure authentication practices (hashed passwords, token validation)
- ✅ Code quality, readability, and documentation
- ✅ Scalability potential (project structure, modularity, best practices)
