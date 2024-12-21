import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import styled from "styled-components";
import { Button } from "@mui/material";

const SearchInput = styled.div`
    display: flex;
    align-items: center;
    background-color: #4d5156;
    height: 48px;
    padding: 0 15px;
    width: 580px;
    margin: 0 auto;
    margin-top: 30px;
    border-radius: 24px;
    transition: box-shadow 0.3s ease;

    &:hover {
        box-shadow: 0 1px 6px rgba(255, 255, 255, 0.3);
        background: #5f6368;
        box-shadow: none;
    }

    input {
        flex: 1;
        background-color: transparent;
        padding: 10px;
        border: 0;
        outline: 0;
        color: #e8eaed;
        font-size: 16px;
        caret-color: #4285f4;
    }

    .searchicon {
        color: #9aa0a6;
    }

    .mic-icon {
        height: 24px;
        padding-right:16px;
        width: 24px;
    }
    .image-icon{
        height: 24px;
        width: 24px;
    }
`;

const SearchBuuton = styled.div`
    margin: 18px 0px;
    display: flex;
    justify-content: center;
    button {
        margin:11px 8px;
        background-color: #303134;
        border: 1px solid #303134;
        border-radius: 4px;
        font-size: 14px;
        color: white;
        text-transform: none;

    &:hover {
        box-shadow: 0 1px 3px rgba(23, 23, 23, 0.24);
        background-color: #303134;
        border: 1px solid #5f6368;
        color: #e8eaed;
        }
    }
`;
const Languages = styled.div`
    display: flex;
    justify-content: center;
    color: white;
    font-size: 14px;
    p {
        display: inline-block;
        margin: 0px;
        color: #99c3ff;
    }
    .language{
        margin-left: 10px;
    }

`;

const Search = () => {
    const [input, setInput] = useState("");

    return (
        <form>
            <SearchInput>
                <SearchIcon className="searchicon" />
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
                <img src ="https://upload.wikimedia.org/wikipedia/commons/e/e8/Google_mic.svg" className="mic-icon" alt="mic-icon"/>
                <img src ="https://upload.wikimedia.org/wikipedia/commons/d/d6/Google_Lens_Icon.svg" className="image-icon" alt="image-icon"/>
            </SearchInput>
            <SearchBuuton>
                <Button>Google Search</Button>
                <Button>I'm Feeling Lucky</Button>
            </SearchBuuton>
            <Languages>
                <div>Google offered in:{" "}
                <p>
                    <span class="language">हिन्दी</span>
                    <span class="language">বাংলা</span>
                    <span class="language">తెలుగు</span>
                    <span class="language">मराठी</span>
                    <span class="language">தமிழ்</span>
                    <span class="language">ગુજરાતી</span>
                    <span class="language">ಕನ್ನಡ</span>
                    <span class="language">മലയാളം</span>
                    <span class="language">ਪੰਜਾਬੀ</span>
                </p>
                </div>
            </Languages>
        </form>
    );
}

export default Search;
