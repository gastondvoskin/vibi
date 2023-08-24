import generateToken from '@/auth/generateToken';
import prisma from '@/config/prisma-client.config';
import bcrypt from 'bcrypt'
import { Request, Response } from 'express';

export class UserController {
  async getUsers(req: Request, res: Response) {
    try {
      const users = await prisma.user.findMany();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong.' });
    }
  }

  async getUserById(req: Request, res: Response) {
    const userId = req.params.id;
    try {
      const user = await prisma.user.findUnique({ where: { id: userId } });
      if (!user) {
        return res.status(404).json({ error: 'User not found.' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong.' });
    }
  }

  async registerUser(req: Request, res: Response) {
    const { name, last_name, email, password,  } = req.body;
    try {

      const existingUser = await prisma.user.findFirst({
				where: {
					OR: [{ email }]
				}
			})
      if (existingUser) {
				return res.status(400).json({ error: 'Email already exists' })
			}
      const pw_hash = await bcrypt.hash(password, 10)

      const userData = {
        name,
        email, 
        password: pw_hash,
        last_name
      }

      const newUser = await prisma.user.create({
				data: userData
			})
      const token = generateToken({ id:newUser.id, email})
      res.status(201).json({newUser,token});
    } catch (error) {
      res.status(500).json({ error: 'Failed to register user.' });
    }
  }

  async loginUser(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
      const user = await prisma.user.findUnique({ where: { email } });

      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials.' });
      }

			const passwordMatch = await bcrypt.compare(password, user.password)

			if (!passwordMatch) {
				return res.status(400).json({ error: 'Email or password are incorrect' })
			}

      const token = generateToken({ id: user.id, email: user.email });
      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong.' });
    }
  }

  async updateUser(req: Request, res: Response) {
    const userId = req.params.id;
    const { name, last_name, image, password, identification, description } = req.body;
    try {
      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: {
          name,
          last_name,
          image,
          password,
          identification,
          description,
        },
      });
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update user.' });
    }
  }

  async deleteUser(req: Request, res: Response) {
    const userId = req.params.id;
    try {
      await prisma.user.delete({ where: { id: userId } });
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete user.' });
    }
  }
}
