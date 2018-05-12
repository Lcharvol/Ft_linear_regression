import {
    filter,
    isEmpty,
    split,
    map,
    drop,
} from 'ramda';

export const removeEmptyLines = initialContent => filter(line => !isEmpty(line),initialContent);

export const formateDataStruct = initialContent => ({
    titles: [],
    initialContent,
});

export const getColumnsTiltes = dataStruct => ({
    ...dataStruct,
    titles: split(',', dataStruct.initialContent[0]),
    initialContent: drop(1, dataStruct.initialContent),
});

export const getData = dataStruct => {
    const { titles } = dataStruct;
    let data = [];
    map(elem => {
        let line = split(',', elem);
        let newDataElem = {};
        titles.map((title, i) => newDataElem = {...newDataElem, [title]: parseInt(line[i]) })
        data = [...data, newDataElem]; 
    }, dataStruct.initialContent)
    return {
        ...dataStruct,
        data,
    };
};

export const getCleannedDataStruct = dataStruct => dataStruct.data;