import express from 'express';
const cors = require('cors');
import { loginController } from '../controllers/loginController';

const router = express.Router();

router.use(cors());
router.use(express.json());

router.post('/', loginController.post);

export default router;
