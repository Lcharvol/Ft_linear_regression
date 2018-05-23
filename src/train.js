import {
    equals,
    length,
    compose,
    split,
} from 'ramda';

import { readExit } from './exit';
import { checkArgs } from './parser/args';
import {
    removeEmptyLines,
    formateDataStruct,
    getColumnsTiltes,
    getData,
    getCleannedDataStruct,
    checkData,
    getNormedData,
} from './parser';
import { readFile } from './utils/fileActions';
import { startLinearRegression } from './linearRegression';
import { FINISH_LOGS } from './constants/logs';
import { FgGreen } from './constants/colors';
import { BACK_SLASH_N } from './constants/symbols';
import print from './print';

const getFormatedData = () => {
    // Get fileName from process global
    const fileName = checkArgs(process.argv);

    // Extract data from file
    const fileContent = compose(
        split(BACK_SLASH_N),
        readFile,
    )(fileName);
    
    // Format data into a proper dataStruct
    const formattedData = compose(
        getNormedData,
        getCleannedDataStruct,
        checkData,
        getData,
        getColumnsTiltes,
        formateDataStruct,
        removeEmptyLines,
    )(fileContent);

    return formattedData;
};

const data = getFormatedData();
console.log(data);
startLinearRegression(data);
print(FINISH_LOGS, FgGreen);