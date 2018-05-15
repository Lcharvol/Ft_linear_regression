import styled from 'styled-components';

import { POINT_SIZE } from '../../constants/point';

export const Container = styled.div`
    position:absolute;
    width:${POINT_SIZE}px;
    height:${POINT_SIZE}px;
    border-radius:100%;
    left:${({ x }) => x * 15}px;
    bottom:${({ y }) => y * 15}px;
    background-color:#141414;
    opacity:0.8;
`;