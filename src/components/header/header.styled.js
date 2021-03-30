import styled from 'styled-components';
import {colors} from '../../styles/colors';

export const HeaderWrapper = styled.header`
    align-items: center;
    background-color: ${colors.black};
    color: ${colors.white};
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    padding: 20px 40px;
`;

export const HeaderTop = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 100%;
    padding: 20px 0;
`;

export const HeaderCompanyName = styled.h3`
    font-style: italic;
    font-size: 24px;
`;

export const HeaderActions = styled(HeaderTop)`
    width: 20%;
`;

export const HeaderBottom = styled(HeaderTop)`
    flex-flow: column nowrap;
    justify-content: center;
`;

export const HeaderContent = styled(HeaderBottom)`
    padding-bottom: 20px;
`;

export const HeaderTitle = styled.h1`
    margin-bottom: 20px;
`;

export const HeaderSubtitle = styled.h2``;

export const Button = styled.button`
    background: none;
    border: none;
    color: ${colors.white};
    font-size: 18px;
    padding: 15px 30px;

    &:hover {
        background-color: ${colors.white};
        color: ${colors.black};
    }
`;
