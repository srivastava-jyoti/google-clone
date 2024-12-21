import React from "react";
import AppsIcon from '@mui/icons-material/Apps';
import AvatarIcon from '@mui/material/Avatar';
import styled from "styled-components";

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    color: white;
    background: #202124;
`
const TopSection =styled.div`
    display: flex;
    align-items: center;
    p{
        margin-right: 20px;
        font-size: 15px;
    }
    .left-margin{
        margin-left: 20px;
    }
`

const Header = () => {
    return (
        <HeaderContainer>
            <TopSection>
                <p>About</p>
                <p>Store</p>
            </TopSection>
            <TopSection>
                <p>Gmail</p>
                <p>Images</p>
                <AppsIcon/>
                <AvatarIcon className="left-margin"/>
            </TopSection>
        </HeaderContainer>
    )
}

export default Header;