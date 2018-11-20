const Joi = require('joi');
const commentSchema = require('../schemas/comment');
const Comment = require('../models/comment');

exports.get_comment = async req => {
  const { commentId } = req.params;

  const comment = await Comment.findOne({ _id: commentId });

  return { comment };
};

exports.get_comments = async req => {
  const { objectId } = req.params;

  const comments = await Comment.find({ objectId, options: { limit: 50 } });

  return { items: comments.length, comments };
};

exports.post_comment = async req => {
  const { objectId } = req.params;
  const { comment } = req.body;
  const { id: userId } = req.userData;

  await Joi.validate(comment, commentSchema);
  const newComment = {
    text: comment.text,
    author: userId,
    objectId
  } 
  const { _id: id } = await new Comment(newComment).save();

  return {
    status: 201,
    msg: `Comment has been successfully created with id ${id} on object at id ${objectId}`,
    id
  };
};

exports.patch_comment = async req => {
  const { commentId } = req.params;
  const { comment } = req.body;
  const { id } = req.userData;

  await Joi.validate(comment, commentSchema);
  await Comment.where({ _id: commentId, author: id }).updateOne(comment);

  return {
    msg: `Comment with id ${commentId} has been successfully updated`
  };
};

exports.delete_comment = async req => {
  const { commentId } = req.params;
  const { id } = req.userData;

  await Comment.deleteOne({ _id: commentId, author: id });

  return {
    msg: `Comment with id ${commentId} has been successfully deleted`
  };
};

exports.post_comment_reply = async req => {
  const { commentId, objectId } = req.params;
  const { comment } = req.body;
  const { id: userId } = req.userData;

  await Joi.validate(comment, commentSchema);

  const newComment = {
    text: comment.text,
    author: userId,
    objectId
  }
  
  const { _id } = await new Comment(newComment).save();
  await Comment.findOneAndUpdate({ _id }, { $push: { replies: _id } });

  return {
    msg: `Comment reply has been successfully created with id ${_id} to comment ${commentId} at object with id ${ObjectId}`,
    id: _id,
    status: 201
  };
};