const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true },
  role: { type: String, enum: ['student', 'faculty', 'partner'] },
  firebaseUID: { type: String, required: true }, // Linked to Firebase Auth
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
