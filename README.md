# TravelGo - Team Workflow Guide

## Repository Rules

Branch yang digunakan:

- `main` → Final/Production
- `dev` → Development
- `frontend-1` → Faishal (User Experience)
- `frontend-2` → Hamzah (Dashboard & Admin)
- `backend-1` → Haikal (Auth & User Module)
- `backend-2` → Haris (Booking & Transaction Module)

---

# Clone Repository

Lakukan sekali saja saat pertama kali mengambil project.

```bash
git https://github.com/Harisnoresst/TravelGo.git
cd TarvelGo
```

---

# Update Project Terbaru

Sebelum mulai kerja, selalu ambil update terbaru dari branch dev.

```bash
git checkout dev
git pull origin dev
```

---

# FRONTEND 1 (Faishal)

Tugas:
- HomePage
- LoginPage
- RegisterPage
- HotelSearchPage
- HotelDetailPage
- FlightSearchPage
- DestinationSearchPage
- DestinationDetailPage

Masuk ke branch:

```bash
git checkout frontend-1
```

Jika branch belum ada:

```bash
git checkout -b frontend-1
git push -u origin frontend-1
```

---

# FRONTEND 2 (Hamzah)

Tugas:
- ProfilePage
- WishlistPage
- BookingHistoryPage
- AdminDashboard
- AdminUserPage
- AdminHotelPage
- AdminDestinationPage
- AdminPromoPage

Masuk ke branch:

```bash
git checkout frontend-2
```

Jika branch belum ada:

```bash
git checkout -b frontend-2
git push -u origin frontend-2
```

---

# BACKEND 1 (Haikal)

Tugas:
- AuthController
- UserController
- WishlistController
- ReviewController
- AuthService
- UserService
- WishlistService
- ReviewService

Masuk ke branch:

```bash
git checkout backend-1
```

Jika branch belum ada:

```bash
git checkout -b backend-1
git push -u origin backend-1
```

---

# BACKEND 2 (Haris)

Tugas:
- HotelController
- FlightController
- DestinationController
- BookingController
- PaymentController
- PromoController
- InvoiceController

Masuk ke branch:

```bash
git checkout backend-2
```

Jika branch belum ada:

```bash
git checkout -b backend-2
git push -u origin backend-2
```

---

# Menyimpan Perubahan

```bash
git add .
git commit -m "feat: nama fitur"
git push
```

Contoh:

```bash
git add .
git commit -m "feat: add hotel search page"
git push
```

---

# Pull Request

Setelah selesai mengerjakan fitur:

1. Push ke branch masing-masing.
2. Buka GitHub.
3. Klik **Pull Request**.
4. Pilih:

```
frontend-1 → dev
frontend-2 → dev
backend-1 → dev
backend-2 → dev
```

5. Setelah direview, merge ke `dev`.

---

# Rules

- Jangan commit langsung ke `main`
- Jangan commit langsung ke `dev`
- Kerjakan hanya di branch masing-masing
- Selalu lakukan `git pull origin dev` sebelum mulai bekerja
- Gunakan commit message yang jelas

Contoh:

```bash
feat: add login page
fix: fix booking validation
docs: update api documentation
```

---

#  System Architecture

```text
React Frontend
      ↓
Axios Service
      ↓
Spring Boot API
      ↓
MySQL Database
```

---

#  Team

| Nama | Divisi |
|--------|--------|
| Faishal | Frontend 1 |
| Hamzah | Frontend 2 |
| Haikal | Backend 1 |
| Haris | Backend 2 |

---

Status: Development