import { Router } from 'express';
import { createUserAndEmployee } from '../controllers/userEmployeeController';


const router = Router();

router.post('/employees',createUserAndEmployee );

export default router;