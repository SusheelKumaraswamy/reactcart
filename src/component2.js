import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart,faCaretDown} from '@fortawesome/free-solid-svg-icons';
import { styled } from '@mui/material/styles';


const BootstrapButton = styled(Button)({
  padding: '6px 12px',
  border: '1px solid gray',
  lineHeight: 1.5,
  backgroundColor: "white",
  color:"black",
  '&:hover': {
    backgroundColor: 'black',
    borderColor: '#0062cc',
    boxShadow: 'none',
    color:"white",
  },
});

const pages = ['Home', 'About', 'Shop'];

const ResponsiveAppBar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

 
  
  function displaydrpdown() {
    if (document.querySelector(".drpdown").style.display === "none") {
        document.querySelector(".drpdown").style.display = "block";
    }
    else {
        document.querySelector(".drpdown").style.display = "none";
    }
  }
 
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

 

  return (
    <AppBar position="static" style={{background:"white",color:"black",boxShadow: "white"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Start Bootstrap
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={
                { 
                  flexGrow: 1, display: { xs: 'flex', md: 'flex' } 
                }
              }
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" component="div">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            Start Bootstrap
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
                page==="Shop"?<Button key={page} className={"headerbutton"} onClick={displaydrpdown} sx={{ my: 2, color: 'black', display: 'block' }}>{page} &nbsp; <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon></Button>:<Button key={page} className={"headerbutton"} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'black', display: 'block' }}>{page}</Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Cart Count">
              <IconButton sx={{ p: 0 }}>
                    <BootstrapButton variant="contained" disableRipple>
                            Cart<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> &nbsp;
                            <span style={{color:'white',background:'black',width:"20px",borderRadius:"50%"}}>{props.a}</span>
                    </BootstrapButton>
              </IconButton>
            </Tooltip>

          </Box>
        </Toolbar>
        <div className="drpdown" style={{border:"1px solid grey", width:"10%", borderRadius:"9px",color:"black",display:"none",position:"absolute",backgroundColor:"white",top:"50px",left:"21%"}}>
            <div style={{borderBottom:"1px solid black",padding:"5px",color:"black"}}><Button variant="text">All Products</Button></div>
            <div style={{padding:"5px",color:"black"}}><Button variant="text">Popular Items</Button></div>
            <div style={{padding:"5px",color:"black"}}><Button variant="text">New Arrivals</Button></div>
        </div>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
