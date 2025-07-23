// models/User.model.js

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // ✅ must be required so it doesn't get missed
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: [6, 'Password must be at least 6 characters long'],
    select: false // Don't return password in queries
  },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);
export default User;
