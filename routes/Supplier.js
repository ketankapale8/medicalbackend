import express from 'express';
import {addSupplier , allSuppliers} from '../controllers/supplier.js';

const router = express.Router();

router.post('/createsupplier', addSupplier);
router.get('/allsuppliers' , allSuppliers);

export default router;