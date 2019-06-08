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
            res.status(200).json(cohorts);
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
            res.status(200).json(cohort);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err);
        })
})

router.get('/:id/students', (req, res) => {
    db('students')
        .where({ cohort_id: req.params.id })
        .then(cohort => {
            res.status(200).json(cohort);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err);
        })
})

router.put('/:id', (req, res) => {
    db('cohorts')
        .where({ id: req.params.id })
        .update(req.body)
        .then(cohort => {
            if(!cohort) {
                res.status(404).json({
                    message: "Cohort does not exist."
                })
                return;
            } else {
                res.status(201).json(cohort);
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        })
})

router.delete('/:id', (req, res) => {
    db('cohorts')
        .where({ id: req.params.id })
        .del()
        .then(cohort => {
            if(!cohort) {
                res.status(404).json({
                    message: "Cohort does not exists."
                })
                return;
            } else {
                res.status(200).json({
                    message: "Cohort has been deleted."
                })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})



module.exports = router;