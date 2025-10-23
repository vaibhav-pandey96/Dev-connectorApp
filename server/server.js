import express from 'express';
import connectDB from './config/db.js';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/users.js'
import authRoutes from './routes/auth.js'
import profileRoutes from './routes/profile.js';
import postRoutes from './routes/post.js';

dotenv.config();
const app = express();

connectDB();

app.use(express.json());

app.use(cors({
  origin: 'https://dev-connector-app-eight.vercel.app',
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
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
