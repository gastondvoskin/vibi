import env from '@/config/env.config';
import jwt from 'jsonwebtoken';

interface UserPayload {
  id: string;
  email: string;
}

const secretKey = env.secretKey

const generateToken = (user: UserPayload): string => {
  const token = jwt.sign(user, secretKey , {
    expiresIn: '7d', // Set the token expiration time as per your requirements
  });
  return token;
};

export default generateToken;
