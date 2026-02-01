const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Contact = require('../models/Contact');

// Submit contact form
router.post('/',
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('message').trim().notEmpty().withMessage('Message is required')
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { name, email, message } = req.body;

      const contact = new Contact({
        name,
        email,
        message
      });

      await contact.save();

      res.status(201).json({
        message: 'Thank you for reaching out! We will get back to you soon.',
        success: true
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to send message. Please try again.' });
    }
  }
);

// Get all contacts (admin)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
