const express = require('express');
const router = express.Router();
const SectionA = require('../models/sectionA').default;
const SectionB = require('../models/sectionB').default;

router.get('/', async (req, res) => {
    try {
        const { type } = req.query;

        if (!type) {
            return res.status(400).json({ message: 'Section type is required' });
        }

        let data;
        switch (type.toLowerCase()) {
            case 'sectiona':
                data = await SectionA.find();
                break;
            case 'sectionb':
                data = await SectionB.find();
                break;
            default:
                return res.status(400).json({ message: 'Invalid section type' });
        }

        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
