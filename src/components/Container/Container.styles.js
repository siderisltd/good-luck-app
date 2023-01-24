import styled from "styled-components";

export const Container = styled.div`
    display: ${(props) => props.display || 'block'}; 
    flex-direction: ${(props) => props.flexDirection || 'row'};
    vertical-align: ${(props) => props.verticalAlign || 'center'};
    justify-content: ${(props) => props.justifyContent || 'center'};
    width: ${(props) => props.width || '100%'};
    height: ${(props) => props.height || '100%'};
    gap: ${(props) => props.gap || '0em'};
    row-gap: ${(props) => props.rowGap || '1em'};
    column-gap: ${(props) => props.columnGap || '0em'};
    min-height: ${(props) => props.minHeight || 0};
    margin: ${(props) => props.margin || '0 0 0 0'};
    padding: ${(props) => props.padding || '0 0 0 0'};
    background-color: ${(props) => props.backgroundColor || 'inherit'};
    border: ${(props) => props.border || '0'};
    color: ${(props) => props.color || 'inherit'};
    align-self: ${(props) => props.alignSelf || 'center'};
`;

export const Body = styled(Container)`
    font-family: Dosis, sans-serif;
    font-size: 16px;
    color: #626161;
    line-height: 24px;
    background: #ffffff;
    -webkit-font-smoothing: antialiased;
    max-width: 100%;
    overflow-x: hidden;
    letter-spacing: 2px;
    margin: 0;
`;

export const FooterBox = styled(Container)`
    width: 100%;
    padding: 100px 0 100px 0;
    float: left;
    background-color: rgb(34, 34, 36);
`;