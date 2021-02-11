const router = require('express').Router();
let Audit = require('../models/audit.model');

router.route('/').get((req, res) => {
  Audit.find()
    .then(audits => res.json(audits))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const image = req.body.image;
  const notes = req.body.notes;
  const tags = req.body.tags;
  const date = Date.parse(req.body.date);

  const newAudit = new Audit({
    username,
    image,
    notes,
    tags,
    date,
  });

  newAudit.save()
  .then(() => res.json('Audit added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Audit.findById(req.params.id)
    .then(audit => res.json(audit))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Audit.findByIdAndDelete(req.params.id)
    .then(() => res.json('Audit deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Audit.findById(req.params.id)
    .then(audit => {
      audit.username = req.body.username;
      audit.image = req.body.image;
      audit.notes = req.body.notes;
      audit.tags = req.body.tags;
      audit.date = Date.parse(req.body.date);

      audit.save()
        .then(() => res.json('Audit updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;