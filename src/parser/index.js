import {
    filter,
    isEmpty,
    split,
    map,
    drop,
    contains,
    multiply,
    divide,
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
};

export const getNormedData = data => {
    let maxKm = 0;
    let maxPrice = 0;
    map(elem => {
        let { km, price } = elem;
        if(km > maxKm)
            maxKm = km;
        if(price > maxPrice)
            maxPrice = price;
    },data);
    const kmCoef = 100 / maxKm;
    const priceCoef = 100 / maxPrice;
    map(elem => {
        elem.km = divide(elem.km,maxKm);
        elem.price = divide(elem.price,maxPrice);
    },data)
    return {
       data,
       maxKm,
       maxPrice,
    };
};

export const getUnNormedRes = (data, type, value) => {
    let maxValue = 0;
    let coef = 0;
    if(type === 'km') {
        map(elem => {
            let { km, price } = elem;
            if(km > maxValue)
                maxValue = km;
        },data);
    } else if(type === 'price') {
        map(elem => {
            let { km, price } = elem;
            if(price > maxValue)
                maxValue = price;
        },data);
    };
    coef = 100 / maxValue;
    return value/coef;
};