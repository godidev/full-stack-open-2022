export interface Diagnose {
  code: string
  name: string
  latin?: string
}

export interface Patient {
  id: string
  name: string
  dateOfBirth: string
  gender: gender
  occupation: string
  ssn: string
}

type gender = 'male' | 'female';

export type NonSensitivePatient = Omit<Patient,'ssn'>;

export type newPatientEntry = Omit<Patient, 'id'>;

export enum genderEnum {
  male = 'male',
  female = 'female'
}