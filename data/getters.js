import fs from 'fs';
import { split } from 'ramda';

const readFile = inputFileName => {
    try {
        var data = fs.readFileSync(inputFileName, 'utf-8');
        return data;
    } catch(e) {
        readExit(inputFileName)
    };
}

export const getThetas = () => {
    const file = readFile('./data/theta.txt');
    const data = split(' ', file)
    return data;
};

export const getTheta0 = () => parseInt(getThetas()[0]);

export const getTheta1 = () => parseInt(getThetas()[1]);