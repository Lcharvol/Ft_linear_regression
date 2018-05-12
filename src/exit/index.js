import print from '../print';
import {
    INPUT_LENGTH_EXIT,
    NAN_EXIT,
} from './constants';
import { FgRed } from '../constants/colors';

export const inputLengthExit = () => {
    print(`${INPUT_LENGTH_EXIT}`, FgRed);
    process.exit();
};

export const inputNaNExit = str => {
    print(`${NAN_EXIT}${str}"`, FgRed);
    process.exit();
}