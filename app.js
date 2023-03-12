const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/user-form', (req, res) => {
  res.render('user-form');
});

app.post('/user-form', (req, res) => {
  const { name, dob, email, phone } = req.body;
  res.send(`Name: ${name}, Date of Birth: ${dob}, Email: ${email}, Phone: ${phone}`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
// Regular expression for validating phone numbers
const phoneRegex = /^\+?\d{1,3}\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

// POST route for handling user form submissions
app.post('/user-form', (req, res) => {
  const { name, dob, email, phone } = req.body;

  // Validate name, DoB, and email (using the front-end validation from the previous example)
  // ...

  // Validate phone number
  if (!phoneRegex.test(phone)) {
    res.status(400).send('Invalid phone number.');
    return;
  }

  // If all validation passes, save the user data to a database or file, send a success response, etc.
  // ...
});
