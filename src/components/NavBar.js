import React, { useState } from 'react';
import { Button, Drawer, List, Divider, ListItem, ListItemIcon, ListItemText, AppBar, Toolbar, Typography } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import InfoIcon from '@material-ui/icons/Info';
import SchoolIcon from '@material-ui/icons/School';
import CodeIcon from '@material-ui/icons/Code';
import Moon from "../images/Moon.png";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import "../css/NavBar.css";
import clsx from 'clsx';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#457B9D',
      },
      secondary: {
        main: '#FFFFFF',
      },
      third: {
        main: '#1F3541',
      },
    },
  });

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
    const [page, setPage] = useState("About");
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
            <ListItem onClick={handleClick} data-my-value={"About"} button key={"ABOUT"}>
                <ListItemIcon>{<InfoIcon/>}</ListItemIcon>
                <ListItemText primary={"ABOUT"} />
            </ListItem>
            <Divider />
            <ListItem onClick={handleClick} data-my-value={"Education&Skills"} button key={"EDUCATION & SKILLS"}>
                <ListItemIcon>{<SchoolIcon/>}</ListItemIcon>
                <ListItemText primary={"EDUCATION & SKILLS"} />
            </ListItem>
            <Divider />
            <ListItem onClick={handleClick} data-my-value={"Projects"} button key={"PROJECTS"}>
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
            menuRedirect(e.currentTarget.dataset.myValue);
            if(e.currentTarget.dataset.myValue === "Education&Skills"){
              setPage("Education & Skills");
            } else {
              setPage(e.currentTarget.dataset.myValue);
            }
        }
    }

    return (
      <div class="w3-top">
        <div class="w3-row w3-large w3-light-grey">
        <div class="w3-col s3">
        <a href="#" class="w3-button w3-block">Home</a>
      </div>
        <div class="w3-col s3">
          <a href="#plans" class="w3-button w3-block">Plans</a>
        </div>
        <div class="w3-col s3">
          <a href="#about" class="w3-button w3-block">About</a>
        </div>
        <div class="w3-col s3">
          <a href="#contact" class="w3-button w3-block">Contact</a>
        </div>
        </div>
      </div>
        // <div className="navbarContainer">
        // <ThemeProvider theme={theme}>
        //     <AppBar color="primary" position="static">
        //         <Toolbar>
        //         <div className="navbarMenu">
        //             <React.Fragment key={'left'}>
        //             <Button style={{maxWidth: '100px', maxHeight: '60px', minWidth: '100px', minHeight: '60px'}} startIcon={<MenuIcon style={{transform: 'scale(2.5)'}}/>} onClick={toggleDrawer('left', true)}/>
        //             <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
        //                 {list('left')}
        //             </Drawer>
        //             </React.Fragment>
        //         </div>
        //         <div className="pageLocation">
        //           <Typography variant="h3">
        //             {page}
        //           </Typography>
        //         </div>
        //         <div onClick={handleClick} data-my-value={"About"} className="nameLogo">
        //             <img src={Moon} alt="moon" className="lunaLogo"/>
        //             <Typography variant="h3">
        //                 DevLuna
        //             </Typography>
        //         </div>
        //         </Toolbar>
        //     </AppBar>
        // </ThemeProvider>
        // </div>
    )
}

export default NavBar;