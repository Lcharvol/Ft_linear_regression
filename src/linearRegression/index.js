import { length, times } from 'ramda';

import { getTheta0, getTheta1 } from '../../data/getters';
import { setTheta0, setTheta1 } from '../../data/setters';
import { ITERATIONS_NUMBER } from './constants';

const getEstimatePrice = (mileAge, theta0, theta1) => theta0 + (theta1 * mileAge);

const somTheta0 = (m, data, theta0, theta1) => {
    let res = 0; 
    times(i => {
        res += (getEstimatePrice(data[i].km, theta0, theta1) - data[i].price);
    },m);
    return res;
};

const somTheta1 = (m, data, theta0, theta1) => {
    let res = 0; 
    times(i => {
        res += (getEstimatePrice(data[i].km, theta0, theta1) - data[i].price) * data[i].km;
    },m);
    return res;
};

export const startLinearRegression = dataStruct => {

    // WIP
    const { data, maxKm, maxPrice } = dataStruct;
    let theta0 = 0;
    let theta1 = 0;
    let tmpTheta0 = theta0;
    let tmpTheta1 = theta1;
    const learningRate = 0.0001
    const m = length(data);
    times(i => {
        tmpTheta0 = learningRate * (1/m) * somTheta0(m, data, theta0, theta1);
        tmpTheta1 = learningRate * (1/m) * somTheta1(m, data, theta0, theta1);
        theta0 = theta0 - tmpTheta0;
        theta1 = tmpTheta1 - tmpTheta1;
    },ITERATIONS_NUMBER);
    setTheta0(theta0 * maxPrice);
    setTheta1(tmpTheta1 * maxPrice / maxKm);
};