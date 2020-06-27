const router = require('express').Router();
const Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
  Exercise.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const { username, description, duration, date } = req.body;
  const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
  });

  newExercise
    .save()
    .then(() => res.json('Exercise added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
