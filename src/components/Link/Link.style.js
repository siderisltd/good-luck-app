import styled from "styled-components";

export const Link = styled.a`
    text-decoration: none;
    color: ${(props) => props.color || 'inherit'};
    transition: all 0.45s ease-in-out;

    &:hover, &:focus {
        color: #f98012;
    }
`;

export const LinkListItem = styled.li`
    text-decoration: none;
    color: ${(props) => props.color || 'inherit'};
    transition: all 0.45s ease-in-out;

    &:hover, &:focus{
        color: #f98012;
        & a:hover {
            color: #f98012;
        }
    }
    
    border: 1px solid;
    border-radius: 5px;
    margin: 0 10px 0 0;
    float: left;
    font-size: 18px;
    -fa-inverse: 1;
    width: 35px;
    height: 35px;
`;

export const BigIcon = styled.a`
    margin: 0 0.24em;
    padding: 0;
    font-size: 3rem;
    color: #500101;
    transition: all 0.45s ease-in-out;

    &:hover, &:focus {
        color: #f98012;
    }
`;

export const SmallIcon = styled.a`
    text-decoration: none;
    line-height: 1.2em;
    margin: 0 10px 5px 0;
    padding: 7px 7px 7px 13px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 20px;
    border: 1px solid white;
    border-radius: ${(props) => props.borderRadius || '0px'};

    transition: all 0.35s ease-in-out;

    &:hover, &:focus {
        border-color: #f98012;
        & * {
            transition: all 0.25s ease-in-out;
            color: #f98012;
        }
    }
`;