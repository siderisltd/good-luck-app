import styled from "styled-components";

export const HeadingShape = styled.span`
    &:before {
        bottom: 0;
        right: 0;
        content: '';
        position: absolute;
        width: 0.5em;
        height: 0.5em;
        opacity: 1;
        border-bottom: 1px solid;
        border-right: 1px solid;
        border-color: #f98012;
    }

    &:after {
        top: 0;
        left: 0;
        content: '';
        position: absolute;
        width: 0.5em;
        height: 0.5em;
        opacity: 1;
        border-left: 1px solid;
        border-top: 1px solid;
        border-color: #f98012;
    }
`;