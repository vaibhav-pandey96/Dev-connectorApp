import express from 'express';
import connectDB from '../config/db.js';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from '../routes/users.js'
import authRoutes from '../routes/auth.js'
import profileRoutes from '../routes/profile.js';
import postRoutes from '../routes/post.js';

dotenv.config();
const app = express();

connectDB();

const allowedOrigins = [
  "http://localhost:5173",
  "https://dev-connector-app-eight.vercel.app",
  /\.vercel\.app$/ 
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like Postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
}));

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/post', postRoutes);

app.get('/', (req, res) => {
    res.send('API is running'); 
});

app.use((req, res) => {
  res.status(404).json({ msg: 'Route not found' });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server is running on port ${port}`));
