import React from "react";
import styled from "styled-components";
import Logo from "../assests/goole-logo.png"

const Bodycontainer = styled.div`
    display: flex;
    flex: 1;
    margin-top: 10%;
    flex-direction: column;
    img {
        object-fit: contain;
        height: 100px;
    }

`
const Main = () => {
    return (
        <Bodycontainer>
            <img src={Logo} alt="google-logo"/>
            <div>Hello</div>
        </Bodycontainer>
    )
}

export default Main;