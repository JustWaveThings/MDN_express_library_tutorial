const Author = require('../models/author');
const asyncHandler = require('express-async-handler');
const Book = require("../models/book");

// Display list of all Authors.
exports.author_list = asyncHandler(async (req, res, next) => {
  const authorList = await Author.find().sort({ family_name: 1 }).exec();
  res.render("layout", {
    title: "Author List",
    author_list: authorList,
    partial: "author_list",
  });
});

// Display detail page for a specific Author.
exports.author_detail = asyncHandler(async (req, res, next) => {
 const [author, authorBooks] = await Promise.all([
    Author.findById(req.params.id).exec(),
    Book.find({ author: req.params.id }, "title summary").exec(),
  ]);
  if (author == null) {
    const err = new Error("Author not found");
    err.status = 404;
    return next(err);
  }
  res.render("layout", {
    title: "Author Detail",
    author,
    author_books: authorBooks,
    partial: "author_detail",
  })
});

// Display Author create form on GET.
exports.author_create_get = (req, res, next) => {
  res.send('NOT IMPLEMENTED: Author create GET');
};

// Handle Author create on POST.
exports.author_create_post = (req, res, next) => {
  res.send('NOT IMPLEMENTED: Author create POST');
};

// Display Author delete form on GET.
exports.author_delete_get = (req, res, next) => {
  res.send('NOT IMPLEMENTED: Author delete GET');
};

// Handle Author delete on POST.
exports.author_delete_post = (req, res, next) => {
  res.send('NOT IMPLEMENTED: Author delete POST');
};

// Display Author update form on GET.
exports.author_update_get = (req, res, next) => {
  res.send('NOT IMPLEMENTED: Author update GET');
};

// Handle Author update on POST.
exports.author_update_post = (req, res, next) => {
  res.send('NOT IMPLEMENTED: Author update POST');
};
