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
} from './parser';
import { readFile } from './utils/fileActions';
import { startLinearRegression } from './linearRegression';

const getFormatedData = () => {
    // Get fileName from process global
    const fileName = checkArgs(process.argv);

    // Extract data from file
    const fileContent = compose(
        split('\n'),
        readFile,
    )(fileName);
    
    // Format data into a proper dataStruct
    const formattedData = compose(
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
console.log('formattedData : ', data);
startLinearRegression(data);