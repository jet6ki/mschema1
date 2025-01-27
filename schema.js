const mongoose = require('mongoose');

// Define the profile schema
const profileSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: false },
});

// Define the user schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  roles: { type: [String], default: ['user'] },
  profile: { type: profileSchema, required: false },
  lastLogin: { type: Date, default: null },
});

// Export the schema as a model
const User = mongoose.model('User', userSchema);

module.exports = User;