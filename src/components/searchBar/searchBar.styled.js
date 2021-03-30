import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const SearchBarWrapper = styled.div`
    width: 40%;
`;

export const SearchBarLabel = styled.label`
    color: ${colors.white};
    margin-right: 12px;
`; 

export const SearchBarInput = styled.input`
    border: none;
    border-radius: 10px;
    padding: 10px;
    width: 60%;
`;
