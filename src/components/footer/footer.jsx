import React from "react";
// styles
import {
    FooterWrapper,
    FooterTop,
    FooterBottom,
    FooterNav,
    FooterList,
    FooterListItem,
    FooterLink,
    FooterLinks,
    FooterDateWrapper,
    FooterDate,
} from "./footer.styled";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <FooterWrapper>
            <FooterTop>
                <FooterNav>
                    <FooterList>
                        <FooterListItem>About</FooterListItem>
                        <FooterListItem>Press</FooterListItem>
                        <FooterListItem>News</FooterListItem>
                    </FooterList>
                </FooterNav>
                <FooterLinks>
                    <FooterLink>Facebook</FooterLink>
                    <FooterLink>Twitter</FooterLink>
                </FooterLinks>
            </FooterTop>
            <FooterBottom>
                <FooterNav>
                    <FooterList>
                        <FooterListItem>Legal</FooterListItem>
                        <FooterListItem>Cookies</FooterListItem>
                        <FooterListItem>AsChoices</FooterListItem>
                    </FooterList>
                </FooterNav>
                <FooterDateWrapper>
                    <FooterDate>&copy; {year} Movies plus</FooterDate>
                </FooterDateWrapper>
            </FooterBottom>
        </FooterWrapper>
    );
};

export default Footer;
