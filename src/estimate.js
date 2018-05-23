import {
    equals,
    length,
    add,
    multiply,
} from 'ramda';

import { getTheta0, getTheta1 } from '../data/getters';
import { FgGreen } from './constants/colors';
import { ESTIMATE_LOGS } from './constants/logs';
import {
    inputLengthExit,
    inputNaNExit,
    readExit,
} from './exit';
import print from './print';

const checkArgs = args => {
    const mileAge = process.argv[2];

    if(!equals(length(args), 3))
        inputLengthExit();
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
    const estimatePrice = add(thetha0,multiply(thetha1,mileAge));
    print(`${ESTIMATE_LOGS[0]}${mileAge}${ESTIMATE_LOGS[1]}${estimatePrice}${ESTIMATE_LOGS[2]}`, FgGreen);
};

estimate();