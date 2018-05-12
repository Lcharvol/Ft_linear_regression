import print from '../print';
import {
    INPUT_LENGTH_EXIT,
    NAN_EXIT,
    READ_ERROR,
} from './constants';
import { FgRed } from '../constants/colors';

export const inputLengthExit = () => {
    print(`${INPUT_LENGTH_EXIT}`, FgRed);
    process.exit();
};

export const inputNaNExit = str => {
    print(`${NAN_EXIT}${str}"`, FgRed);
    process.exit();
};

export const readExit = inputFileName => {
    print(`${READ_ERROR[0]}${inputFileName}${READ_ERROR[1]}`, FgRed);
    process.exit();
};