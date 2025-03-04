import express from "express";

const router = express.Router();

let books = [
  {
    id: 1,
    title: "Harry Potter",
    author: "John Doe",
    year: 2020,
  },
];

router.get("/books", (req, res) => {
  res.send(books);
});

router.get("/books/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);

  res.json(books.find((book) => book.id == id));
});

router.post("/books", (req, res) => {
  const { title, author, year } = req.body;
  console.log(req.body);
  books.push({
    id: books.length + 1,
    title,
    author,
    year,
  });

  res.send(books);
});

router.put("/books/:id", (req, res) => {
  const { title, author, year } = req.body;
  const id = Number(req.params.id);
  const bookIndex = books.findIndex((book) => book.id == id);

  books[bookIndex] = { id, title, author, year };

  res.send(books[bookIndex]);
});

router.delete("/books/:id", (req, res) => {
  const id = req.params.id;

  books = books.filter((book) => book.id != id);

  res.send(books);
});

export default router;
