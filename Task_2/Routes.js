const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');

// INDEX - Show all blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.render('index', { blogs: blogs });
  } catch (err) {
    console.log(err);
  }
});

// NEW - Show form to create new blog
router.get('/new', (req, res) => {
  res.render('new');
});

// CREATE - Add new blog to database
router.post('/', async (req, res) => {
  try {
    await Blog.create(req.body.blog);
    res.redirect('/blogs');
  } catch (err) {
    console.log(err);
  }
});

// SHOW - Show more info about one blog
router.get('/:id', async (req, res) => {
  try {
    const foundBlog = await Blog.findById(req.params.id);
    res.render('show', { blog: foundBlog });
  } catch (err) {
    console.log(err);
  }
});

// EDIT - Show edit form for one blog
router.get('/:id/edit', async (req, res) => {
  try {
    const foundBlog = await Blog.findById(req.params.id);
    res.render('edit', { blog: foundBlog });
  } catch (err) {
    console.log(err);
  }
});

// UPDATE - Update a particular blog
router.put('/:id', async (req, res) => {
  try {
    await Blog.findByIdAndUpdate(req.params.id, req.body.blog);
    res.redirect('/blogs/' + req.params.id);
  } catch (err) {
    console.log(err);
  }
});

// DELETE - Delete a particular blog
router.delete('/:id', async (req, res) => {
  try {
    await Blog.findByIdAndRemove(req.params.id);
    res.redirect('/blogs');
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
