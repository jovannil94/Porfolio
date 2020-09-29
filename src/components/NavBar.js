import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Button, Menu, MenuItem } from '@material-ui/core';

const NavBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const history = useHistory();
    const menuRedirect = (value) => history.push(`/${value}`);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    }

    const handleClose = (e) => {
        e.preventDefault();
        setAnchorEl(null);
        if(e.currentTarget.dataset.myValue !== undefined) {
            menuRedirect(e.currentTarget.dataset.myValue)
        }
    }

    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Menu
            </Button>
            <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
            <MenuItem onClick={handleClose} data-my-value={"about"}>About Me</MenuItem>
            <MenuItem onClick={handleClose} data-my-value={"projects"}>Projects</MenuItem>
            <MenuItem onClick={handleClose} data-my-value={"skills"}>Skills</MenuItem>
            </Menu>
        </div>
    )
}

export default NavBar;