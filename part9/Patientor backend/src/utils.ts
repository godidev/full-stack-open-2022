import { genderEnum } from "./types";

export const parseDateOfBirth = (dateOfBirth: unknown): string => {
    if (!isString(dateOfBirth) || isDate(dateOfBirth)) {
        throw new Error('Incorrect or missing date of birth');
    }

    return dateOfBirth;
};

const isDate = (param: string): boolean => {
    return Boolean(Date.parse(param));
};

const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
};

export const parseGender = (gender: unknown): genderEnum => {
    if (!isString(gender) || !isGender(gender)) {
        throw new Error('Incorrect or missing gender ' + gender);
    }
    return gender;
};

const isGender = (param: string): param is genderEnum => {
    return Object.values(genderEnum).map(gender => gender.toString()).includes(param);
};

export const parseName = (name: unknown): string => {
    if (!isString(name)) {
        throw new Error('missing or incorrect name');
    }
    return name;
};

export const parseOccupation = (occupation: unknown): string => {
    if (!isString(occupation)) {
        throw new Error('missing or incorrect occupation');
    }
    return occupation;
};

export const parseSSN = (ssn: unknown): string => {
    if (!isString(ssn)) {
        throw new Error('missing or incorrect ssn');
    }
    return ssn;
};