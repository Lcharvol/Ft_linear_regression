import { getTheta0, getTheta1 } from '../../data/getters';
import { setTheta0, setTheta1 } from '../../data/setters';

export const startLinearRegression = data => {
    const theta0 = getTheta0();
    const theta1 = getTheta1();
    const newTheta0 = 10;
    const newTheta1 = 10;
    setTheta0(newTheta0);
    setTheta1(newTheta1);
};