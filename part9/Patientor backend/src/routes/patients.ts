import express from 'express';
import { addEntry, getPatients, toNewPatientEntry } from '../services/patientsService';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(getPatients());
});

router.post('/', (req,res) => {
  const newPatientEntry = toNewPatientEntry(req.body);
  const newEntry = addEntry(newPatientEntry);
  res.send(newEntry);
});

export default router;