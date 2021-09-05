import React from 'react';
import '../App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withRouter } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { RiUserSearchLine } from 'react-icons/ri';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const useStyles = makeStyles((theme) => ({
  appBarStyle: {
    backgroundColor: '#1a1f71',
    borderBottomColor: '#f7b600',
    borderBottom: 'solid 4px',
    zIndex: 2
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: "auto",
    marginRight: theme.spacing(2),
  },
  box: {
    margin: "20px 0 20px 0",
    padding: "10px",
    border: "solid 2px",
  },
  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "space-evenly"
  },
  button: {
    backgroundColor: "#ffffff",
    color: "1a1f71"
  }
}));

const Header = (props) => {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);

    setAnchorEl(null);
  };
  
  return (
    <React.Fragment>
        <CssBaseline />
        <HideOnScroll {...props}>
        <AppBar className={classes.appBarStyle}>
      <Container>
          <Toolbar>
            <Box edge="start" className={classes.box}>
              <IconContext.Provider value={{ size: "3.5em"}}>
                <RiUserSearchLine />
              </IconContext.Provider>
            </Box>
                {isMobile ? (
                <>
                <IconButton
                  className={classes.menuButton}
                  aria-label="menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                >
                  <MenuItem onClick={() => handleMenuClick("/")}>Home</MenuItem>
                  <MenuItem onClick={() => handleMenuClick("/new")}>New Contact</MenuItem>
                </Menu>
                </>) : (
                  <div className={classes.headerOptions}>
                    <Button className={classes.button} variant="contained" onClick={() => handleMenuClick("/")}> Home </Button>
                    <Button className={classes.button} variant="contained" onClick={() => handleMenuClick("/new")}> New Contact </Button>
                  </div>
                )}
          </Toolbar>
      </Container>
        </AppBar>
        </HideOnScroll>
    </React.Fragment>
  );
}

export default withRouter(Header);





