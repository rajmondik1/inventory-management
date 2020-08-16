import express from 'express';
import {list, remove, save, update, view} from '../controllers/itemGroupController.js';
const router = express.Router();

router.get('/', list);
router.get('/:id', view);
router.post('/', save);
router.post('/:id', update);
router.delete('/:id', remove);

export default router;