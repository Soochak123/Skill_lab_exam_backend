import bcrypt from 'bcrypt';
import connectDB from '@/utils/db';
import User from '@/models/User';

connectDB(); // Connect to MongoDB

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    try {
      // Check if the user already exists
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ error: 'Username is already taken' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user
      const newUser = new User({
        username,
        password: hashedPassword,
      });

      // Save the user to the database
      await newUser.save();

      return res.status(201).json({ message: 'Signup successful' });
    } catch (error) {
      console.error('Error during signup:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}
