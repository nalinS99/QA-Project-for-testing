const express = require('express');
const { addBook, getBooks, updateBook, deleteBook } = require('../controllers/bookController');
const router = express.Router();

router.post('/', addBook);
router.get('/', getBooks);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook); // Add this line for the delete route

module.exports = router;
