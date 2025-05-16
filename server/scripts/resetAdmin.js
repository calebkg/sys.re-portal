require('dotenv').config({ path: '../.env' });
const bcrypt = require('bcryptjs');
const db = require('../config/db');

async function resetAdminUser() {
  try {
    // Delete existing admin users
    await db.query('DELETE FROM users WHERE role = ?', ['admin']);
    console.log('Deleted existing admin users');

    const username = 'admin';
    const password = 'admin123';
    const role = 'admin';

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert new admin user
    await db.query(
      'INSERT INTO users (username, password, role) VALUES (?, ?, ?)',
      [username, hashedPassword, role]
    );

    console.log('=================================');
    console.log('New admin user created successfully');
    console.log('=================================');
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Role:', role);
    console.log('=================================');
    console.log('Please use these credentials exactly');
    console.log('=================================');
  } catch (error) {
    console.error('Error resetting admin user:', error);
  } finally {
    process.exit();
  }
}

resetAdminUser(); 