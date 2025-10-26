import express from 'express';
import connectDB from '../server/config/db.js';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from '../server/routes/users.js'
import authRoutes from '../server/routes/auth.js'
import profileRoutes from '../server/routes/profile.js';
import postRoutes from '../server/routes/post.js';

dotenv.config();
const app = express();

connectDB();

app.use(express.json());

const allowedOrigins = [
  "http://localhost:5173",
  "https://dev-connector-ipqr6uxhi-vaibhav-pandeys-projects-78e503d4.vercel.app"
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
