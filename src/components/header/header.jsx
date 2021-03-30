import React from "react";
// styles
import {
    HeaderWrapper,
    HeaderTop,
    HeaderCompanyName,
    HeaderActions,
    HeaderBottom,
    HeaderContent,
    HeaderTitle,
    HeaderSubtitle,
    Button
} from "./header.styled";


const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderTop>
                <HeaderCompanyName>
                    Movies plus
                </HeaderCompanyName>
                <HeaderActions>
                    <Button>Login</Button>
                    <Button>Sign Up</Button>
                </HeaderActions>
            </HeaderTop>
            <HeaderBottom>
                <HeaderContent>
                    <HeaderTitle>
                        Your favourite movies. Explained.
                    </HeaderTitle>
                    <HeaderSubtitle>
                        Figure out what happened. Then find out why.
                    </HeaderSubtitle>
                </HeaderContent>
            </HeaderBottom>
        </HeaderWrapper>
    );
};

export default Header;
