const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getActivities()
    .then(activities => {
      res.send({activities: activities})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getActivity(id)
    .then(activity => {
      res.json({activity: activity})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/create', (req, res) => {
  const newActivity = req.body
  db.addActivity(newActivity)
    .then(activity => {
      res.json({activity: activity})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/:id/update', (req, res) => {
  const id = Number(req.params.id)
  const activity = req.body
  db.updateActivity(id, activity)
    .then(activity => {
      res.json({activity: activity})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/:id/delete', (req, res) => {
  const id = Number(req.params.id)
  db.deleteActivity(id)
    .then(activity => {
      res.json({activity: activity})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
