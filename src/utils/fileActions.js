import fs from 'fs';

import { readExit } from '../exit';

export const readFile = inputFileName => {
    const FORMAT = 'utf-8';
    try {
        var data = fs.readFileSync(inputFileName, FORMAT);
        return data;
    } catch(e) {
        readExit(inputFileName)
    };
};

export const writeFile = (path, newData) => fs.writeFileSync(path, newData);