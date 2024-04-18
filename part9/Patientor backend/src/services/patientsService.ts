import data from '../../data/patients';
import { NonSensitivePatient, Patient, newPatientEntry } from "../types";
import { v1 as uuid } from 'uuid';
import { parseDateOfBirth, parseGender, parseName, parseOccupation, parseSSN } from '../utils';

const patients = data as Patient[];

export const getPatients = (): NonSensitivePatient[] => {
    return patients.map(({ id, name, gender, dateOfBirth, occupation }) => ({
        id,
        name,
        gender,
        dateOfBirth,
        occupation
    }));
};

export const addEntry = (obj: newPatientEntry): Patient => {
    if(!obj) throw new Error('missing object to add to DB');
    const newPatientEntry: Patient = {
        id: uuid(),
        ...obj
    };

    data.push(newPatientEntry);
    return newPatientEntry;
};

export const toNewPatientEntry = (obj: unknown): newPatientEntry => {
    if (!obj || typeof obj !== 'object') {
        throw new Error('Incorrect or missing data');
    }

    if ('dateOfBirth' in obj && 'gender' in obj && 'name' in obj && 'occupation' in obj && 'ssn' in obj) {
        const newEntry: newPatientEntry = {
            dateOfBirth: parseDateOfBirth(obj.dateOfBirth),
            gender: parseGender(obj.gender),
            name: parseName(obj.name),
            occupation: parseOccupation(obj.occupation),
            ssn: parseSSN(obj.ssn)
        };
        return newEntry;
    }
    throw new Error('Data is not valid');
};


