import express from 'express';
import bodyParser from 'body-parser'; // To parse form data
import upload from './middlewares/multerConfig.js';

const router = express.Router();

// Middleware to parse JSON and form data
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


// POST route for handling contact form submissions
router.post('/contact', upload.none(), (req, res) => {
  const { name, email, phone, message } = req.body;

  console.log('Received contact form data:', { name, email, phone, message });


  // Basic validation: Check if all required fields are filled
  if (!name || !email || !phone || !message) {
    return res.status(400).send({
      message: "Please fill all the fields!",
    });
  }
  
  // Normally, you'd store form data in a database or perform other actions here
  console.log('Received contact form data:', { name, email, phone, message });

  // Send success response
  res.status(200).send({
    message: "Contact form submitted successfully!",
    data: { name, email, phone, message },
  });
});

// Existing form submission route (rename if needed to avoid confusion)
router.post('/submitForm', (req, res) => {
  const { name, email, phone, message } = req.body;

  // Basic validation: Check if all required fields are filled
  if (!name || !email || !phone || !message) {
    return res.status(400).send({
      message: "Please fill all the fields!",
    });
  }
  
  // Normally, you'd store form data in a database or perform other actions here
  console.log('Received form data:', { name, email, phone, message });

  // Send success response
  res.status(200).send({
    message: "Form submitted successfully!",
    data: { name, email, phone, message },
  });
});

// POST route for handling file uploads
router.post('/upload', upload.single('cv'), (req, res) => {
  try {
    if (req.file === undefined) {
      return res.status(400).send({
        message: "No file selected!",
      });
    }
    res.status(200).send({
      message: "File uploaded successfully!",
      file: req.file,
    });
  } catch (err) {
    res.status(500).send({
      message: "Error uploading file",
      error: err.message || "An unknown error occurred.",
    });
  }
  console.log(req.body); // Check if data is received
  console.log(req.file); // If using multer for file uploads
});

export default router;
