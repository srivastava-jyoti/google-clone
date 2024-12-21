import React from "react";
import Header from "./Header";
import styled from "styled-components";
import Main from "./Main";
import Footer from "./Footer";

const HomeContainer = styled.div`
    background: black;
    display: flex;
    flex-direction: column;
    height: 100vh;
`
const Home = () => {
    return(
        <HomeContainer>
            <Header/>
            <Main/>
            <Footer/>
        </HomeContainer>
    )
}

export default Home;