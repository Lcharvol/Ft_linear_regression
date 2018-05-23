import { getTheta0, getTheta1 } from '../../data/getters';
import { setTheta0, setTheta1 } from '../../data/setters';
import { ITERATIONS_NUMBERR } from './constants';

export const startLinearRegression = data => {
    // WIP
    const theta0 = getTheta0();
    const theta1 = getTheta1();
    const tmpTheta0 = 10;
    const tmpTheta1 = 10;
    const newTheta0 = theta0 - tmpTheta0;
    const newTheta1 = theta1 - tmpTheta1;
    setTheta0(newTheta0);
    setTheta1(newTheta1);
};