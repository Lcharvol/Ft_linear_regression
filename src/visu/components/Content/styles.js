import styled from 'styled-components';

import { TITLE_COLOR } from '../../constants/colors';

export const Container = styled.div`
    position:relative;
    border-radius:3px;
    width:70%;
    min-height:650px;
    margin-top:100px;
    margin-left:110px;
    max-width:1100px;
`;

export const LeftBar = styled.div`
    position:absolute;
    top:0;
    height:200vh;
    margin-top:-100vh
    width:2px;
    background-color:${TITLE_COLOR};
    opacity:0.8;
`;

export const BottomBar = styled.div`
    position:absolute;
    bottom:0;
    height:2px;
    width:200vw;
    margin-left:-100vw;
    background-color:${TITLE_COLOR};
    opacity:0.8;
`;