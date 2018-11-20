const router = require('express').Router();
const handler = require('../middleware/handler');

const commentsController = require('../controllers/comments');

router.get('/:commentId', handler(commentsController.get_comment));

router.get('/comments/:objectId', handler(commentsController.get_comments));

// router.get('/project/:projectId', handler(commentsController.get_comments_project));

router.post('/:objectId', handler(commentsController.post_comment));

router.post('/:objectId/:commentId', handler(commentsController.post_comment_reply));

router.patch('/:commentId', handler(commentsController.patch_comment));

router.delete('/:commentId', handler(commentsController.delete_comment));

module.exports = router;
