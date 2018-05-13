import fs from 'fs';

import { readExit } from './exit';

export const readFile = inputFileName => {
    try {
        var data = fs.readFileSync(inputFileName, 'utf-8');
        return data;
    } catch(e) {
        readExit(inputFileName)
    };
};

export const writeFile = (path, newData) => fs.writeFileSync(path, newData);