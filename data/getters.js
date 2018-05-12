import fs from 'fs';
import { split } from 'ramda';
import { readExit } from '../src/exit';
import { readFile } from '../src/utils';

export const getThetas = () => {
    const file = readFile('./data/theta.txt');
    const data = split(' ', file)
    return data;
};

export const getTheta0 = () => parseInt(getThetas()[0]);

export const getTheta1 = () => parseInt(getThetas()[1]);