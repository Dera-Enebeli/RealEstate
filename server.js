import { fileURLToPath } from 'url';
import { dirname } from 'path';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import formRoutes from './routes/formRoutes.js';
import path from 'path';


// Create __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, '../dist')));


// Catch-all route to serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
});


// Middleware
// app.use(cors({
//   origin: 'http://localhost:5000' // Replace with your frontend's actual URL if different
// }));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static folder to serve uploaded files
app.use(express.static('public'));  // Serve all files in the 'public' folder
app.use('/upload', express.static('upload'));

// Routesnode
app.use('/api/forms', formRoutes);  // All form-related routes

// Home route (optional)
app.get('/', (req, res) => {
  res.send("Welcome to the backend server!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
