import styled from 'styled-components';

export const ThemeText = styled.h2`
    &:before {
        bottom: 0;
        left: 0;
        content: '';
        position: absolute;
        width: 0.5em;
        height: 0.5em;
        opacity: 1;
        border-bottom: 1px solid;
        border-left: 1px solid;
        border-color: #f98012;
    }

    &:after {
        top: 0;
        right: 0;
        content: '';
        position: absolute;
        width: 0.5em;
        height: 0.5em;
        opacity: 1;
        border-top: 1px solid;
        border-right: 1px solid;
        border-color: #f98012;
    }

    line-height: 1.2em;
    text-transform: uppercase;
    color: black;
    position: relative;
    display: inline-block;
    font-size: 20px;
    padding: 8px 15px 8px;
`;