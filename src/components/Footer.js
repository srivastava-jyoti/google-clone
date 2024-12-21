import React from "react";
import styled from "styled-components";

const FooterComponent = styled.div`
    color: white;
    .top-footer {
        padding: 15px 30px;
    }
    hr {
        margin: 0;
    }
    .bottom-section {
        padding: 15px 20px;
        display: flex;
        justify-content: space-between;
    }
    .right-margin {
        margin-right: 30px;
    }
`
const Footer = () => {
    return(
        <FooterComponent>
            <div className="top-footer">India</div>
            <hr/>
            <div className="bottom-section">
                <div>
                    <span className="right-margin">Advertising</span>
                    <span className="right-margin">Business</span>
                    <span className="right-margin">How Search Works</span>
                </div>
                <div>
                    <span className="right-margin">Privacy</span>
                    <span className="right-margin">Terms</span>
                    <span>Security</span>
                </div>
            </div>
        </FooterComponent>
    )

}

export default Footer;