import styled from "styled-components";

export const Paragraph = styled.p`
    color: white;
    margin: ${(props) => props.margin || '0 0 0 0'};
    clear: both;
    font-family: 'Dosis', sans-serif;
    line-height: 22px;
    letter-spacing: 2px;
`;