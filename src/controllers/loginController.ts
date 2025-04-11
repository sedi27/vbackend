/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { db } from '../services/databaseService';
import { users } from '../model';
import { eq } from 'drizzle-orm';

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password }: { email: string; password: string } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: 'Email and password are required' });
    return;
  }

  try {
    // Execute the query
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // const [rows]: [any[], any] = await db.query('SELECT * FROM users WHERE email = ?', [email]);

    const user = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

    // Check if a user with the given email exists
    if (user.length === 0) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    const founduser = user[0];

    // Compare the passwords (no hashing for this example)
    if (founduser.password !== password) {
      res.status(401).json({ message: 'Invalid credentials' });
      return;
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: founduser.id, role: founduser.role }, '1234456', { expiresIn: '3h' });

    // Send the response
    res.json({
      token,
      user: {
        id: founduser.id,
        name: founduser.username,
        email: founduser.email,
        role: founduser.role,
      },
    });
  } catch (error) {
    // console.error('Database query error:', error);
    res.status(500).json({ message : 'Internal server error' });
  }
};
