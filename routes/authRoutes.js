import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.model.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// ✅ Registration endpoint
router.post('/register', async (req, res) => {
  console.log("📦 Incoming data:", req.body);
  try {
    const { name, email, password } = req.body;
    console.log("📥 Incoming req.body:", req.body);

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });

    try {
      await newUser.save();
      console.log("✅ User saved:", newUser);
    } catch (err) {
      console.error("❌ Error saving user to DB:", err);
      return res.status(500).json({ message: 'DB save error' });
    }

    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
console.log('✅ Logged-in user from DB:', newUser);
    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (err) {
  console.error('❌ Registration error:', err); // log the full error object
  res.status(500).json({ message: 'Server error during registration', error: err.message });
  }
});





// ✅ Login endpoint
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: 'Invalid email or password' });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(401).json({ message: 'Invalid email or password' });

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.error('❌ Login error:', err);
    res.status(500).json({ message: 'Server error during login' });
  }
});

// ✅ Account update endpoint
router.put('/update', authMiddleware, async (req, res) => {
  const { currentPassword, newEmail, newPassword } = req.body;

  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
    if (!isPasswordValid) return res.status(401).json({ message: 'Current password is incorrect' });

    if (newEmail) user.email = newEmail;
    if (newPassword) user.password = await bcrypt.hash(newPassword, 10);

    await user.save();
    res.json({ message: 'Account updated successfully' });
  } catch (err) {
    console.error('❌ Update error:', err);
    res.status(500).json({ message: 'Server error during update' });
  }
});

export default router;
