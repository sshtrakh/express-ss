const express = require('express');
const path = require("path");
const router = express.Router();
const members = require('../../Members');
const uuid = require('uuid');
const e = require("express");

// get all members
router.get('/', (req, res) => res.json(members));

// post new member
router.post('/', (req, res) => {

    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active',
    };

    if (!req.body.email || !req.body.email) {
        return res.status(400).json({msg: 'Please provide email and name'});
    } else {
        members.push(newMember);
        res.json(newMember);
    }
})

//get member by id
router.get('/:id', (req, res) => {
    const found = members.some(v => v.id === parseInt(req.params.id));
    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({msg: 'no member with such id found'});
    }
});


// update member by id
router.put('/:id', (req, res) => {
    const found = members.some(v => v.id === parseInt(req.params.id));

    if (found) {
        const updatedMember = req.body;
        members.forEach(member => {
            if (member.id === parseInt(req.params.id)) {

                member.email = updatedMember.email ? updatedMember.email : member.email;
                member.name = updatedMember.name ? updatedMember.name : member.name;

                res.json(member);
            }
        });

    } else {
        res.status(400).json({msg: `No member found with the id ${req.params.id}`});
    }

});

module.exports = router;
