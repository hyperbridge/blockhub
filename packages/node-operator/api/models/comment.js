const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = Schema({
  objectId: { type: Schema.Types.ObjectId, required: true },
  author: { type: String, required: true },
  text: { type: String, required: true },
  rate: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  replies: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
});

module.exports = mongoose.model('Comment', commentSchema);
