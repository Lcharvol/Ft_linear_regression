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
    checkData,
} from './src/parser';
import { readFile } from './src/utils';
import { startLinearRegression } from './src/linearRegression';


import { setTheta0 } from './data/setters';

const fileName = checkArgs(process.argv);
const fileContent = split('\n', readFile(fileName));

const formattedContent = compose(
    getCleannedDataStruct,
    checkData,
    getData,
    getColumnsTiltes,
    formateDataStruct,
    removeEmptyLines,
)(fileContent);
startLinearRegression(formattedContent);