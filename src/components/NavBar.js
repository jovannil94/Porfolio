import React from 'react';
import { Button, Drawer, List, Divider, ListItem, ListItemIcon, ListItemText, AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import InfoIcon from '@material-ui/icons/Info';
import SchoolIcon from '@material-ui/icons/School';
import CodeIcon from '@material-ui/icons/Code';
import Moon from "../images/Moon.png";
import "../css/NavBar.css";
import clsx from 'clsx';

const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });

  const NavBar = () => {
    const classes = useStyles();
    const history = useHistory();
    const menuRedirect = (value) => history.push(`/${value}`);
    const [state, setState] = React.useState({
        left: false
      });
      

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <div
          className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
          })}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            <ListItem onClick={handleClick} data-my-value={"about"} button key={"ABOUT"}>
                <ListItemIcon>{<InfoIcon/>}</ListItemIcon>
                <ListItemText primary={"ABOUT"} />
            </ListItem>
            <Divider />
            <ListItem onClick={handleClick} data-my-value={"education&skills"} button key={"EDUCATION & SKILLS"}>
                <ListItemIcon>{<SchoolIcon/>}</ListItemIcon>
                <ListItemText primary={"EDUCATION & SKILLS"} />
            </ListItem>
            <Divider />
            <ListItem onClick={handleClick} data-my-value={"projects"} button key={"PROJECTS"}>
                <ListItemIcon>{<CodeIcon/>}</ListItemIcon>
                <ListItemText primary={"PROJECTS"} />
            </ListItem>
            <Divider />
          </List>
        </div>
      );

    const handleClick = (e) => {
        e.preventDefault();
        if(e.currentTarget.dataset.myValue !== undefined) {
            menuRedirect(e.currentTarget.dataset.myValue)
        }
    }

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                <div>
                    <React.Fragment key={'left'}>
                    <Button startIcon={<MenuIcon/>} onClick={toggleDrawer('left', true)}/>
                    <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
                        {list('left')}
                    </Drawer>
                    </React.Fragment>
                </div>
                <img src={Moon} className="lunaLogo"/>
                <Typography variant="h3">
                    DevLuna
                </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;