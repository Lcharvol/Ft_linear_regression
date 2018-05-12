import {
    equals,
    length,
} from 'ramda';

import { getTheta0, getTheta1 } from './data/getters';
import {
    inputLengthExit,
    inputNaNExit,
} from './src/exit';

const checkArgs = args => {
    if(!equals(length(args), 3)) inputLengthExit();
    const mileAge = process.argv[2];
    if(!parseInt(mileAge)) inputNaNExit(mileAge);
    return mileAge;
}

const mileAge = checkArgs(process.argv);
const thetha0 = getTheta0();
const thetha1 = getTheta1();
console.log('thetha0: ', thetha0);
console.log('thetha1: ', thetha1);