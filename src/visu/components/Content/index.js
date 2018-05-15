import React from 'react';

import {
    Container,
    LeftBar,
    BottomBar,
} from './styles';
import Point from '../Point';

const Content = () => (
    <Container>
        <LeftBar/>
        <BottomBar/>
        <Point x={10} y = {20}/>
        <Point x={20} y = {20}/>
        <Point x={30} y = {10}/>
        <Point x={50} y = {20}/>
        <Point x={10} y = {10}/>
    </Container>
);

export default Content;