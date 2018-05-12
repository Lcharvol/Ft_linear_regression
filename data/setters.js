import { getThetas } from './getters';
import { writeFile } from '../src/utils';
import { THETA_FILE_NAME } from '../src/constants/files';

export const setTheta0  = newTethas0 => {
    const thetas = getThetas();
    const newThetas = [newTethas0, thetas[1]];
    writeFile(`./data/${THETA_FILE_NAME}`, `${newThetas[0]} ${newThetas[1]}`);
};

export const setTheta1 = newTethas1 => {
    const thetas = getThetas();
    const newThetas = [thetas[0], newTethas1];
    writeFile(`./data/${THETA_FILE_NAME}`, `${newThetas[0]} ${newThetas[1]}`);
};