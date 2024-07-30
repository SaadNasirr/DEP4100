const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/blog', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Import routes
const blogRoutes = require('./routes/blogs');
app.use('/blogs', blogRoutes);

// Root route
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

// Start server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
