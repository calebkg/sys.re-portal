require('dotenv').config({ path: '../.env' });
const bcrypt = require('bcryptjs');
const db = require('../config/db');

async function createAdminUser() {
  try {
    const username = 'admin';
    const password = 'admin123';
    const role = 'admin';

    // Check if admin already exists
    const [existingUsers] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
    if (existingUsers.length > 0) {
      console.log('Admin user already exists');
      process.exit(0);
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert admin user
    await db.query(
      'INSERT INTO users (username, password, role) VALUES (?, ?, ?)',
      [username, hashedPassword, role]
    );

    console.log('Admin user created successfully');
    console.log('Username:', username);
    console.log('Password:', password);
  } catch (error) {
    console.error('Error creating admin user:', error);
  } finally {
    process.exit();
  }
}

createAdminUser(); 