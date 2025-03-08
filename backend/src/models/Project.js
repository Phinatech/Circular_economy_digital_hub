const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  status: { type: String, enum: ['active', 'completed', 'archived'] },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  milestones: [{
    title: String,
    deadline: Date,
    completed: Boolean
  }]
});

module.exports = mongoose.model('Project', projectSchema);
