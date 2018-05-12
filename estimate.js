import {
    equals,
    length,
} from 'ramda';

import { FgGreen } from './src/constants/colors';
import { getTheta0, getTheta1 } from './data/getters';
import {
    inputLengthExit,
    inputNaNExit,
} from './src/exit';
import print from './src/print';

const checkArgs = args => {
    if(!equals(length(args), 3)) inputLengthExit();
    const mileAge = process.argv[2];
    if(!parseInt(mileAge)) inputNaNExit(mileAge);
    return mileAge;
}

const mileAge = checkArgs(process.argv);
const thetha0 = getTheta0();
const thetha1 = getTheta1();
const estimatePrice = thetha0 + (thetha1 * mileAge);
print(`The estimate price of the car for ${mileAge} km is ${estimatePrice} €`, FgGreen);
