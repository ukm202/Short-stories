const express = require('express');
const router = express.Router();

const storyController = require('../controllers/storyControllers');

router.get('/', storyController.story_index);
router.post('/', storyController.story_create_post);
router.get('/create', storyController.story_create_get);
router.get('/:id', storyController.story_details);
router.delete('/:id',storyController.story_delete);

module.exports = router;

