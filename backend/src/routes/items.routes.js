import express from 'express';
const cors = require('cors');
import { itemsController } from '../controllers/itemsController';

const router = express.Router();

router.use(cors());
router.use(express.json());

router.get('/', itemsController.get);

export default router;
