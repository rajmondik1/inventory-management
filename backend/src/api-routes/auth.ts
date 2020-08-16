import { Router } from "express";
const authController = require('../controllers/authController');
const router: Router = Router();

router.post('/login', authController.login);
router.post('/register', authController.register);
router.get('/logout', authController.logout);

export default router;