# gin-react-blog

<p align="center">
  <a href="https://react.dev/" target="_blank">
    <img src="https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react" alt="React">
  </a>
  <a href="https://go.dev/" target="_blank">
    <img src="https://img.shields.io/badge/Go-1.20+-00ADD8?style=for-the-badge&logo=go" alt="Go">
  </a>
  <a href="https://www.postgresql.org" target="_blank">
    <img src="https://img.shields.io/badge/Database-PostgreSQL-4169E1?style=for-the-badge&logo=postgresql" alt="PostgreSQL">
  </a>
  <a href="/LICENSE" target="_blank">
    <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" alt="License">
  </a>
</p>

A full-stack blog application built with a **Go (Gin)** backend and a **React** frontend, styled with **Tailwind CSS**. This project provides complete CRUD (Create, Read, Update, Delete) functionality for blog posts.

---

## 📂 Struktur Proyek

```text
gin-react-blog/
├── client/             # React Frontend
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── tailwind.config.js
├── server/             # Go (Gin) Backend
│   ├── controllers/
│   ├── database/
│   ├── models/
│   ├── main.go
│   ├── go.mod
│   └── .env
└── README.md
```

---

## 🏗️ Alur Arsitektur

This application follows a classic client-server architecture:

```text
+------------------+           +-----------------+          +-----------------+
|                  |  HTTP/S   |                 |   SQL    |                 |
|  React Frontend  | <-------> |   Gin Backend   | <------> |  PostgreSQL DB  |
| (localhost:3000) |  (JSON)   | (localhost:8080)|  (GORM)  |                 |
|                  |           |                 |          |                 |
+------------------+           +-----------------+          +-----------------+
```

1.  **Frontend (React)**: Users interact with the UI, which sends API requests to the backend.
2.  **Backend (Gin)**: The server receives requests, processes business logic, and performs CRUD operations on the database via GORM.
3.  **Database (PostgreSQL)**: Database (PostgreSQL): Stores and retrieves application data persistently.

---

## 🛠️ Prasyarat

Before getting started, make sure you have installed:

-   [Node.js](https://nodejs.org/en/) (v18.x or newer)
-   [Go](https://go.dev/doc/install) (v1.20 or newer)
-   [PostgreSQL](https://www.postgresql.org/download/) (or any supported database)
-   [Git](https://git-scm.com/)

---

## 🚀 Getting Started

Follow these instructions to run the project on your local machine.

### 1. Backend (Gin Server)

```bash
# Navigate to the server directory
cd server

# Create a .env file (and update with your DB credentials)
# cp .env.example .env

# Instal dependensi
go mod tidy

# Run the server
go run main.go
```
The server will run at `http://localhost:8080`.

---

### 2. Frontend (Client React)

```bash
# Navigate to the client directory
cd client

# Instal dependensi
npm install

# Run the client
npm start
```
The client will be available at `http://localhost:3000`.

---

## 🌐 Endpoint API

| Method   | Endpoint     | Description             |
| :------- | :----------- | :---------------------- |
| `GET`    | `/posts`     | Get all posts           |
| `GET`    | `/posts/:id` | Get a single post       |
| `POST`   | `/posts`     | Create a new post       |
| `PUT`    | `/posts/:id` | Update an existing post |
| `DELETE` | `/posts/:id` | Delete a post           |

---

## ✨ Fitur

-   **Full CRUD Functionality**: Create, Read, Update, and Delete blog posts.
-   **Modern UI**: Responsive and stylish interface built with React and Tailwind CSS.
-   **RESTful API**: Clean and structured backend API built with Go and Gin.
-   **Database Integration**: Uses GORM for smooth database interactions.
-   **Clean Code**: Clear separation between frontend and backend.

---

## ☁️ Deployment

This application can be deployed using various platforms:

-   **Frontend (React)**: Vercel, Netlify, AWS S3/CloudFront
-   **Backend (Go)**: Render, Railway, Heroku, AWS EC2/ECS
-   **Database**: Managed database services such as Neon, Supabase, or AWS RDS
-   **Full-Stack**: Use Docker to deploy the app on any container-supported platform

---

## 📜 Lisensi

This project is licensed under the MIT License. See the LICENSE file for details.
