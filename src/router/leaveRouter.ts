import { Router } from 'express';
import { createleave } from '../controllers/leaveController';


const router = Router();

router.post('/add-leaves', createleave);

export default router;