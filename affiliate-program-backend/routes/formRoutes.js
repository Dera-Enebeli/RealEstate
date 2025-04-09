import express from 'express';
import bodyParser from 'body-parser';
import upload from './middlewares/multerConfig.js';
import nodemailer from 'nodemailer';

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// 📩 Setup Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'onyidorisluxuryapartments@gmail.com', // replace with your Gmail
    pass: 'hfne fexl uulp agxe'      // generate this from https://myaccount.google.com/apppasswords
  }
});

// 📬 Route to handle form + file upload and send email
router.post('/upload', upload.single('cv'), async (req, res) => {
  try {
    const { name, email, phone, address, dob, qualification, experience, message } = req.body;
    const cv = req.file;

    if (!name || !email || !phone || !address || !dob || !qualification || !experience || !message) {
      return res.status(400).send({ message: "Please fill all the fields!" });
    }

    if (!cv) {
      return res.status(400).send({ message: "No file selected!" });
    }

    // Compose email
    const mailOptions = {
      from: `"Affiliate Form" <${email}>`,
      to: 'onyidorisluxuryapartments@gmail.com',
      subject: `New Affiliate Submission - ${name}`,
      html: `
        <h3>New Affiliate Application Received</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Qualification:</strong> ${qualification}</p>
        <p><strong>Experience:</strong> ${experience}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
      attachments: [
        {
          filename: cv.originalname,
          content: cv.buffer
        }
      ]
    };

    await transporter.sendMail(mailOptions);

    res.status(200).send({
      message: "Form submitted and email sent successfully!",
    });

  } catch (error) {
    console.error("Email error:", error);
    res.status(500).send({
      message: "Error processing request",
      error: error.message || "Something went wrong."
    });
  }
});

export default router;
