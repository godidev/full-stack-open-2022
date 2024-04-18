import express from 'express';
import { getDiagnoses } from '../services/diagnosesService';

const router = express.Router();

router.get('/', (_, res) => res.send(getDiagnoses()));

export default router;
