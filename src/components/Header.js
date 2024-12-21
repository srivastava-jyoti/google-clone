import React from "react";
import AppsIcon from '@mui/icons-material/Apps';
import AvatarIcon from '@mui/material/Avatar';

const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                <p>About</p>
                <p>Store</p>
            </div>
            <div className="header-right">
                <p>Gmail</p>
                <p>Images</p>
                <AppsIcon/>
                <AvatarIcon/>
            </div>
        </div>
    )
}

export default Header;