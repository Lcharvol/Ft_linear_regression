import {
    equals,
    length,
    compose,
    split,
} from 'ramda';

import { readExit } from './src/exit';
import { checkArgs } from './src/parser/args';
import {
    removeEmptyLines,
    formateDataStruct,
    getColumnsTiltes,
    getData,
    getCleannedDataStruct,
} from './src/parser';
import { readFile } from './src/utils';


import { setTheta0 } from './data/setters';

const fileName = checkArgs(process.argv);
const fileContent = split('\n', readFile(fileName));

const formattedContent = compose(
    getCleannedDataStruct,
    getData,
    getColumnsTiltes,
    formateDataStruct,
    removeEmptyLines,
)(fileContent);
console.log('formattedContent:', formattedContent);
setTheta0(56)