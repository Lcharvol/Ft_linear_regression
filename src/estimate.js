import {
    equals,
    length,
} from 'ramda';

import { getTheta0, getTheta1 } from '../data/getters';
import { FgGreen } from './constants/colors';
import {
    inputLengthExit,
    inputNaNExit,
    readExit,
} from './exit';
import print from './print';

const checkArgs = args => {
    if(!equals(length(args), 3))
        inputLengthExit();
    const mileAge = process.argv[2];
    if(!parseInt(mileAge))
        inputNaNExit(mileAge);
    return mileAge;
}

const estimate = () => {
    // Get mileAge and thethas
    const mileAge = checkArgs(process.argv);
    const thetha0 = getTheta0();
    const thetha1 = getTheta1();

    // Print the estimate price
    const estimatePrice = thetha0 + (thetha1 * mileAge);
    print(`The estimate price of the car for ${mileAge} km is ${estimatePrice} €`, FgGreen);
};

estimate();