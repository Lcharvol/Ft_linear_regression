import {
    equals,
    length,
} from 'ramda';

import { inputLengthExit } from '../exit';

export const checkArgs = args => {
    if(!equals(length(args), 3))
        inputLengthExit();
    const fileName = process.argv[2];
    return fileName;
};