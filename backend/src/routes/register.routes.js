import express from 'express';
const cors = require('cors');
import { registerController } from '../controllers/registerController';

const router = express.Router();

router.use(cors());
router.use(express.json());

router.post('/', registerController.post);

export default router;
