const Joi = require('joi');

const commentSchema = Joi.object().keys({
  author: Joi.string().min(1),
  text: Joi.string().required(),
  rate: Joi.number(),
  date: [Joi.string(), Joi.date()],
  replies: Joi.array()
});

module.exports = commentSchema