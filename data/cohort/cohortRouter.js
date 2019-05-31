const express = require('express');
const router = express.Router();
const knex = require('knex');

const knexConfig = require('../../knexfile.js');
const db = knex(knexConfig.development);

router.post('/', (req, res) => {
    const { name } = req.body;

    if(!name) {
        res.status(400).json({
            message: "Please provide a name for the cohort."
        })
        return;
    }

    db.insert(req.body, ['id'])
        .into('cohorts')
        .then(id => {
            res.status(201).json(id)
        })
        .catch(err => {
            res.status(500).json(err)
        })
});

router.get('/', (req, res) => {
    db('cohorts')
        .then(cohorts => {
            res.status(200).json(cohorts)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})

router.get('/:id', (req, res) => {
    db('cohorts')
        .where({ id: req.params.id })
        .then(cohort => {
            res.status(200).json(cohort)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err);
        })
})

module.exports = router;