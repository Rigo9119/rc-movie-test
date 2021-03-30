import styled from 'styled-components';
import { colors } from '../../styles/colors';


export const MovieCardFront = styled.div`
    align-items: center;
    background-color: ${colors.black};
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    padding-top: 20px;
    margin: 20px;
    width: 17%;
`;

export const MovieCardPoster = styled.img`
    width: 80%;
`; 

export const MovieCardData = styled(MovieCardFront)`
    margin: 0;
    background-color: ${colors.black};
    padding: 20px;
    width: 100%;
`;

export const MovieCardTitle = styled.h3`
    color: ${colors.white};
    text-align: center;
    word-break: break-word;
`;

export const MovieToggle = styled.button`
    background: none;
    border: none;
    outline: none;
    color: ${colors.white};
    font-size: 18px;
    padding: 20px;
    width: 100%;

    &:hover {
        color: ${colors.crimson};
    }
`;

export const MovieCardBack = styled(MovieCardFront)`
`;

export const MovieDate = styled.p`
    color: ${colors.white};
    padding: 20px 0;
`;

export const MovieOverview = styled(MovieDate)`
    text-align: center;
    line-height: 1.5em;
    padding: 20px 10px;
`;

