import jwt from 'jsonwebtoken';
import crypto from 'crypto'
import dotenv from "dotenv"

dotenv.config()

const SECRET_KEY = process.env.SECRET_KEY || 'default_secret_key'
const generateSecretKey = () => {
    return crypto.randomBytes(32).toString('hex');
  };
const generateToken = (userId:any) => {
    const secretKey = SECRET_KEY;
    return jwt.sign({ userId }, secretKey, { expiresIn: '1h' });
  };
  
  const verifyToken = (token:any) => {
    const secretKey = SECRET_KEY;
    return jwt.verify(token, secretKey);
  };
  
  export { generateToken, verifyToken };