// Simple RESTful API for managing books using Node.js and Express
const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// In-memory "database"
let books = [
  { id: 1, title: "Eleven Minutes", author: "Paulo Coelho" },
  { id: 2, title: "The Alchemist", author: "Paulo Coelho" },
];
let nextId = 3;

// CREATE - POST /books
app.post("/books", (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ error: "Title and author are required" });
  }

  const newBook = { id: nextId++, title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});

// READ - GET /books
app.get("/books", (req, res) => {
  res.status(200).json(books);
});

// READ - GET /books/:id
app.get("/books/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ error: "Book not found" });
  res.status(200).json(book);
});

// UPDATE - PUT /books/:id
app.put("/books/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ error: "Book not found" });

  const { title, author } = req.body;
  if (title) book.title = title;
  if (author) book.author = author;

  res.status(200).json(book);
});

// DELETE - DELETE /books/:id
app.delete("/books/:id", (req, res) => {
  const index = books.findIndex((b) => b.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: "Book not found" });

  const deletedBook = books.splice(index, 1);
  res.status(200).json(deletedBook[0]);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// i did this earlier, same code, lets try

// sorry about that, i forgot to add /book itself, lol

// lets try runnung powershell command lines

// tried creating, now, let's try deleting

// anyway, lets deploy to github, oh its working now

// lets delete the second book

// now lets add a README file