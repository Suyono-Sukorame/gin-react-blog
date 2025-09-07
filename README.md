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

Aplikasi blog full-stack yang dibangun dengan backend **Go (Gin)** dan frontend **React**, serta dihias dengan **Tailwind CSS**. Proyek ini menyediakan fungsionalitas CRUD (Create, Read, Update, Delete) lengkap untuk postingan blog.

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

Aplikasi ini mengikuti arsitektur client-server klasik:

```text
+------------------+           +-----------------+          +-----------------+
|                  |  HTTP/S   |                 |   SQL    |                 |
|  React Frontend  | <-------> |   Gin Backend   | <------> |  PostgreSQL DB  |
| (localhost:3000) |  (JSON)   | (localhost:8080)| (GORM)   |                 |
|                  |           |                 |          |                 |
+------------------+           +-----------------+          +-----------------+
```

1.  **Frontend (React)**: Pengguna berinteraksi dengan UI, yang mengirimkan request API ke backend.
2.  **Backend (Gin)**: Server menerima request, memproses logika bisnis, dan melakukan operasi CRUD ke database melalui GORM.
3.  **Database (PostgreSQL)**: Menyimpan dan mengambil data aplikasi secara persisten.

---

## 🛠️ Prasyarat

Sebelum memulai, pastikan Anda telah menginstal:

-   [Node.js](https://nodejs.org/en/) (v18.x atau lebih baru)
-   [Go](https://go.dev/doc/install) (v1.20 atau lebih baru)
-   [PostgreSQL](https://www.postgresql.org/download/) (atau database lain yang didukung)
-   [Git](https://git-scm.com/)

---

## 🚀 Memulai

Ikuti instruksi berikut untuk menjalankan proyek di mesin lokal Anda.

### 1. Backend (Server Gin)

```bash
# Masuk ke direktori server
cd server

# Buat file .env (dan perbarui dengan kredensial DB Anda)
# cp .env.example .env

# Instal dependensi
go mod tidy

# Jalankan server
go run main.go
```
Server akan berjalan di `http://localhost:8080`.

---

### 2. Frontend (Client React)

```bash
# Masuk ke direktori client
cd client

# Instal dependensi
npm install

# Jalankan client
npm start
```
Client akan tersedia di `http://localhost:3000`.

---

## 🌐 Endpoint API

Backend menyediakan endpoint RESTful API berikut:

| Method   | Endpoint      | Deskripsi                  |
| :------- | :------------ | :------------------------- |
| `GET`    | `/posts`      | Mendapatkan semua post     |
| `GET`    | `/posts/:id`  | Mendapatkan satu post      |
| `POST`   | `/posts`      | Membuat post baru          |
| `PUT`    | `/posts/:id`  | Memperbarui post yang ada  |
| `DELETE` | `/posts/:id`  | Menghapus sebuah post      |

---

## ✨ Fitur

-   **Fungsionalitas CRUD Penuh**: Buat, Baca, Perbarui, dan Hapus postingan blog.
-   **UI Modern**: Antarmuka yang responsif dan stylish dibangun dengan React dan Tailwind CSS.
-   **RESTful API**: API backend yang bersih dan terstruktur dibangun dengan Go dan Gin.
-   **Integrasi Database**: Menggunakan GORM untuk interaksi database yang mulus.
-   **Kode yang Bersih**: Pemisahan yang jelas antara frontend dan backend.

---

## ☁️ Deployment

Aplikasi ini dapat di-deploy menggunakan berbagai platform:

-   **Frontend (React)**: Vercel, Netlify, AWS S3/CloudFront
-   **Backend (Go)**: Render, Railway, Heroku, AWS EC2/ECS
-   **Database**: Layanan database terkelola seperti Neon, Supabase, atau AWS RDS.
-   **Full-Stack**: Gunakan Docker untuk men-deploy aplikasi di platform mana pun yang mendukung kontainer.

---

## 📜 Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT. Lihat file LICENSE untuk detailnya.
