import fs from 'fs';
import { split } from 'ramda';

import { readExit } from '../src/exit';
import { readFile } from '../src/utils/fileActions';
import {
    DATA_PATH,
    THETA_FILE_NAME,
} from '../src/constants/files';
import { SPACE } from '../src/constants/symbols';

export const getThetas = () => {
    const file = readFile(`${DATA_PATH}${THETA_FILE_NAME}`);
    const data = split(SPACE, file)
    return data;
};

export const getTheta0 = () => parseInt(getThetas()[0]);

export const getTheta1 = () => parseInt(getThetas()[1]);