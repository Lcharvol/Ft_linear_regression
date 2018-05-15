import React from 'react';

import {
    Container,
    Title,
    TitleLine,
} from './styles';
import Content from '../Content';

const Graph = () => (
    <Container>
        <Title>
            ft_linear_regression
            <TitleLine></TitleLine>
        </Title>
        <Content/>
    </Container>
);

export default Graph;