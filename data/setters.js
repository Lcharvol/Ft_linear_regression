import { getThetas } from './getters';
import { writeFile } from '../src/utils/fileActions';
import {
    THETA_FILE_NAME,
    DATA_PATH,
} from '../src/constants/files';

export const setTheta0  = newTethas0 => {
    const thetas = getThetas();
    const newThetas = [newTethas0, thetas[1]];
    writeFile(`${DATA_PATH}${THETA_FILE_NAME}`, `${newThetas[0]} ${newThetas[1]}`);
};

export const setTheta1 = newTethas1 => {
    const thetas = getThetas();
    const newThetas = [thetas[0], newTethas1];
    writeFile(`${DATA_PATH}${THETA_FILE_NAME}`, `${newThetas[0]} ${newThetas[1]}`);
};

export const setThetas = (newTethas0, newTethas1) => {
    writeFile(`${DATA_PATH}${THETA_FILE_NAME}`, `${newTethas0} ${newTethas1}`);
}