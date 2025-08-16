// middleware/auth.js
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const auth = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Extract token from "Bearer <token>"
  
  if (!token) {
    return res.status(401).json({ msg: 'No token, Authorization denied !!' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded Token:', decoded);
    req.user = decoded.user; // Attach the user to request object
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid', err });
  }
};

export default auth;