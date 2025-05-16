const db = require('../config/db');

const userController = {
  getMe: async (req, res) => {
    try {
      const [users] = await db.query('SELECT id, username, role FROM users WHERE id = ?', [req.user.id]);
      
      if (users.length === 0) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.json(users[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  },

  updatePreferences: async (req, res) => {
    try {
      const { preferences } = req.body;
      
      await db.query(
        'UPDATE users SET preferences = ? WHERE id = ?',
        [JSON.stringify(preferences), req.user.id]
      );

      res.json({ message: 'Preferences updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }
};

module.exports = userController;