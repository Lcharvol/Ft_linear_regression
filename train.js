import {
    equals,
    length,
    compose,
    split,
} from 'ramda';

import { readExit } from './src/exit';
import { checkArgs } from './src/parser/args';
import { readFile } from './src/utils';

const fileName = checkArgs(process.argv);

const fileContent = split('\n', readFile(fileName));
console.log('fileContent:', fileContent);

// const formattedContent = compose(

// )(fileContent);
// console.log('formattedContent:', formattedContent);