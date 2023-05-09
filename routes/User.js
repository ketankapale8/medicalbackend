import express from 'express';
import {addUsers , allUsers} from '../controllers/user.js';

const router = express.Router();

router.post('/createcustomer', addUsers);
router.get('/allcustomers' , allUsers);

export default router;