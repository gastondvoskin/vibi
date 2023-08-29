import bcrypt from 'bcrypt'
import env from '../config/env.config'

export interface PasswordHash {
    hashedPassword: string;
    salt: string;
  }

export async function hashGenerator ( password : string) {
    if(!env.saltKey)throw new Error("invalid")
    const saltkey = parseInt(env.saltKey)
    const salt = await bcrypt.genSalt(saltkey);
    const saltedPassword = `${password}${salt}`;
    const hashedPassword = await bcrypt.hash(saltedPassword, saltkey);
    
    return {hashedPassword,salt}
}