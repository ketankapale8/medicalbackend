import express from 'express';
import {addMR , allMRs} from '../controllers/mr.js';

const router = express.Router();

router.post('/createmr', addMR);
router.get('/allmr' , allMRs);

export default router;