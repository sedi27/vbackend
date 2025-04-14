import { Router } from 'express';
import { createAttendence } from '../controllers/attendenceController';


const router = Router();

router.post('/add-attendance', createAttendence);

export default router;