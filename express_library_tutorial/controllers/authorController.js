const Author = require('../models/author');
const asyncHandler = require('express-async-handler');

// Display list of all Authors.
exports.author_list = asyncHandler(async (req, res, next) => {
  const authorList = await Author.find().sort([['family_name', 'ascending']]);
  res.render('author_list', { title: 'Author List', authorList });
});

// Display detail page for a specific Author.
exports.author_detail = asyncHandler(async (req, res, next) => {
  const author = await Author.findById(req.params.id);
  res.render('author_detail', { title: 'Author Detail', author });
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
