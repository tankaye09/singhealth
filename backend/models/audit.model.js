const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const auditSchema = new Schema({
  username: { type: String, required: true },
  image: { type: String, required: true},
  notes: { type: String, required: false },
  tags: { type: String, required: false },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Audit = mongoose.model('Audit', auditSchema);

module.exports = Audit;