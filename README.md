# Vendors Online Server

NodeJS backend for "VendorsOnline: An E-commerce Website" for server-side computing and APIs.

[Project Frontend](https://github.com/kushalprasadjoshi-bachelor/vendors-online-client.git)

[Project Documentation](https://github.com/kushalprasadjoshi-bachelor/vendors-online.git)

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/kushalprasadjoshi-bachelor/vendors-online-server.git
cd vendors-online-server
```

Install dependencies:

```bash
npm install
```

---

## 🔐 Environment Variables

This project requires environment variables to run properly.

Create a `.env` file in the root directory:

```bash
touch .env
```

Then add the following variables:

```env
PORT=4000
DB_URL=your_database_connection_string
```

### 📌 Variables Explained

- `PORT` → Port where the server runs (default: 3000 or 4000)
- `DB_URL` → Database connection string (MongoDB)

---

## ▶️ Running the Project

### Development mode

```bash
npm run dev
```

### Production mode

```bash
npm start
```

---

_Happy Coding!_
