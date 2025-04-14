import { Router } from 'express';
import { createAttendence, getAttendancesByMonth } from '../controllers/attendenceController';


const router = Router();

router.post('/add-attendance', createAttendence);
router.get('/attendances-by-month', getAttendancesByMonth);

export default router;