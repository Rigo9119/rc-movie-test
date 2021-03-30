import styled from 'styled-components'
import { colors } from './styles/colors';

export const AppWrapper = styled.div``;

export const Main = styled.main`
    align-items: center;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    width: 100%;
`;

export const MainActions = styled(Main)`
    flex-flow: row nowrap;
    justify-content: space-between;
    padding: 40px;
    background-color: ${colors.crimson};

`;

export const Message = styled.p`
    margin: 120px;
`;

