const express = require('express');
const path = require("path");
const router = express.Router();
const members = require('../../Members');

//get all members
router.get('/', (req, res) => res.json(members));

//post new member
router.post('/', (req, res) => {
    res.send(req.body);
})

//get member by id
router.get('/:id', (req, res) => {
    const found = members.some(v => v.id === parseInt(req.params.id));
    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: 'no member with such id found'});
    }
});

module.exports = router;
