import styled from 'styled-components';

import { TITLE_COLOR } from '../../constants/colors';

export const Container = styled.div`
    position:relative;
    min-width: 100vw;
    min-height: 100vh;
    background-color:rgb(252,252,252);
    overflow:hidden;
`;

export const Title = styled.div`
    position:relative;
    font-family: 'Quicksand', sans-serif;
    font-size: 4em;
    margin-left: 50px;
    margin-top:40px;
    font-weight:0;
    color:#141414;
    opacity:0.9;
`;

export const TitleLine = styled.div`
    position:absolute;
    top:60%;
    width:200vw;
    margin-left:-100vw;
    height:2px;
    background-color:${TITLE_COLOR};
`;