import React from "react";
import styled from "styled-components";
import Search from "./Search";

const Bodycontainer = styled.div`
    display: flex;
    flex: 1;
    padding-top: 10%;
    flex-direction: column;
    img {
        object-fit: contain;
        height: 100px;
    }
    background: #202124;
`
const Main = () => {
    return (
        <Bodycontainer>
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="google-logo"/>
            <div><Search/></div>
        </Bodycontainer>
    )
}

export default Main;