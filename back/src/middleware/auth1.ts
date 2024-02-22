import jwt from 'jsonwebtoken';
import crypt from 'crypto'
const generateSecretKey = () => {
    return crypto.randomBytes(32).toString('hex');
  };
const generateToken = (userId) => {
    const secretKey = 'your_secret_key_here';
    return jwt.sign({ userId }, secretKey, { expiresIn: '1h' });
  };
  
  const verifyToken = (token) => {
    const secretKey = 'your_secret_key_here';
    return jwt.verify(token, secretKey);
  };
  
  export { generateToken, verifyToken };