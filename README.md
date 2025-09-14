# 📚 Simple RESTful API - Books

This is a simple **RESTful API** built with **Node.js and Express** that allows you to perform **CRUD** *(Create, Read, Update, Delete)* operations on a collection of books.

---

## 📂 Project Structure

```
book-api/
│
├── package.json
├── server.js
└── README.md
```

---

## 🚀 Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/datturbomoon/book-api.git
   cd book-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the server:

   ```bash
   node server.js
   ```

The server will start at `http://localhost:3000`.

---

## 📌 API Endpoints

### 1️⃣ Create a Book

**POST** `/books`

**Request Body:**

```json
{
  "title": "New Book",
  "author": "Author Name"
}
```

**Response (201 Created):**

```json
{
  "id": 3,
  "title": "New Book",
  "author": "Author Name"
}
```

---

### 2️⃣ Get All Books

**GET** `/books`

**Response (200 OK):**

```json
[
  { "id": 1, "title": "Eleven Minutes", "author": "Paulo Coelho" },
  { "id": 2, "title": "The Alchemist", "author": "Paulo Coelho" }
]
```

---

### 3️⃣ Get Book by ID

**GET** `/books/1`

**Response (200 OK):**

```json
{ "id": 1, "title": "Eleven Minutes", "author": "Paulo Coelho" }
```

**If not found (404):**

```json
{ "error": "Book not found" }
```

---

### 4️⃣ Update a Book

**PUT** `/books/1`

**Request Body:**

```json
{ "title": "Eleven Minutes (Updated)" }
```

**Response (200 OK):**

```json
{ "id": 1, "title": "Eleven Minutes (Updated)", "author": "Paulo Coelho" }
```

---

### 5️⃣ Delete a Book

**DELETE** `/books/1`

**Response (200 OK):**

```json
{ "id": 1, "title": "Eleven Minutes", "author": "Paulo Coelho" }
```

**If not found (404):**

```json
{ "error": "Book not found" }
```

---

## ✅ Acceptance Criteria

* All CRUD endpoints are implemented.
* Returns proper HTTP status codes.
* JSON responses with error messages when needed.
* Code is simple, clean, and well-structured.

---