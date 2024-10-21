const express = require('express');
const path = require('path'); // Import path module
const app = express();
const port = 5001;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public'))); 

let books = [
  { id: 1, title: 'The Alchemist', author: 'Paulo Coelho' },
  { id: 2, title: '1984', author: 'George Orwell' }
];

// GET request to fetch all books
app.get('/api/books', (req, res) => {
  res.status(200).json(books);
});

// POST request to add a new book
app.post('/api/books', (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
