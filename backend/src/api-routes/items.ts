import { Router } from "express";
const itemController = require('../controllers/itemController');
const router: Router = Router();

router.get('/', itemController.list);
router.get('/:id', itemController.view);
router.post('/', itemController.save);
router.post('/:id', itemController.update);
router.delete('/:id', itemController.remove);

export default router;