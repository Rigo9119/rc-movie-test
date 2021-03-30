import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const FooterWrapper = styled.footer`
    align-items: center;
    background-color: ${colors.black};
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    padding: 20px 40px;
    height: 6vh;
    width: 100vw;
`; 

export const FooterTop = styled(FooterWrapper)`
    flex-flow: row nowrap;
`; 

export const FooterBottom = styled(FooterWrapper)`
    flex-flow: row nowrap;
`;

export const FooterNav = styled.nav`
    align-items: center;
    background-color: ${colors.black};
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    flex-flow: row nowrap;
    width: 30%;
`; 

export const FooterList = styled(FooterTop)`
    justify-content: space-between;
`;

export const FooterListItem = styled.li`
    color: ${colors.white};
    list-style: none;
    padding: 15px 30px;

    &:hover {
        background-color: ${colors.white};
        color: ${colors.black};
    }
`; 

export const FooterLinks = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 20%;
`;

export const FooterLink = styled.a`
    color: ${colors.crimson};
    padding: 15px 30px;

    &:hover {
        background-color: ${colors.crimson};
        color: ${colors.white};
    }
`;

export const FooterDateWrapper = styled.div``;

export const FooterDate = styled.p`
    color: ${colors.crimson};
`;
