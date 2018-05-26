import { length, times } from 'ramda';

import { getTheta0, getTheta1 } from '../../data/getters';
import { setTheta0, setTheta1 } from '../../data/setters';
import {
    ITERATIONS_NUMBER,
    LEARNING_RATE,
} from './constants';

const getEstimatePrice = (mileAge, theta0, theta1, maxKm) => theta0 + (theta1 * mileAge);

const somTheta0 = (m, data, theta0, theta1, maxKm) => {

    let res = 0;

    times(i => {
        res += (getEstimatePrice(data[i].km, theta0, theta1, maxKm) - data[i].price);
    },m);
    return res;
};

const somTheta1 = (m, data, theta0, theta1, maxKm) => {

    let res = 0;
    times(i => {
        console.log('res: ', (getEstimatePrice(data[i].km, theta0, theta1, maxKm) - data[i].price) * data[i].km);
        res += (getEstimatePrice(data[i].km, theta0, theta1, maxKm) - data[i].price) * data[i].km;
    },m);
    return res;
};

export const startLinearRegression = dataStruct => {

    const { data, maxKm, maxPrice } = dataStruct;
    let theta0 = 0;
    let theta1 = 0;
    let tmpTheta0 = 0;
    let tmpTheta1 = 0;
    const learningRate = LEARNING_RATE;
    const m = length(data);
    times(i => {
        tmpTheta0 = learningRate * (1/m) * somTheta0(m, data, theta0, theta1, maxKm);
        tmpTheta1 = learningRate * (1/m) * somTheta1(m, data, theta0, theta1, maxKm);
        theta0 = tmpTheta0;
        theta1 = tmpTheta1;
    },ITERATIONS_NUMBER);
    setTheta0(theta0 * maxPrice);
    setTheta1(theta1 * maxKm / maxPrice);
};