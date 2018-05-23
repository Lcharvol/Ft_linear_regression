import {
    filter,
    isEmpty,
    split,
    map,
    drop,
    contains,
} from 'ramda';

import { columnTitleExit } from '../exit';
import {
    FIRST_COLUMN_NAME,
    SECOND_COLUMN_NAME,
} from '../constants/columns';
import { COMMA } from '../constants/symbols';

export const removeEmptyLines = initialContent =>
    filter(line => !isEmpty(line),initialContent);

export const formateDataStruct = initialContent => ({
    titles: [],
    initialContent,
});

export const getColumnsTiltes = dataStruct => ({
    ...dataStruct,
    titles: split(COMMA, dataStruct.initialContent[0]),
    initialContent: drop(1, dataStruct.initialContent),
});

export const getData = dataStruct => {
    const { titles } = dataStruct;
    let data = [];
    map(elem => {
        let line = split(COMMA, elem);
        let newDataElem;
        titles.map((title, i) =>
            newDataElem = {...newDataElem, [title]: parseInt(line[i]) })
        data = [...data, newDataElem]; 
    }, dataStruct.initialContent)
    return {
        ...dataStruct,
        data,
    };
};

export const getCleannedDataStruct = dataStruct => dataStruct.data;

export const checkData = dataStruct => {
    const { titles } = dataStruct;
    if(!contains(FIRST_COLUMN_NAME, titles) || !contains(SECOND_COLUMN_NAME, titles))
        columnTitleExit();
    return dataStruct;
}