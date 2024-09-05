import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useAuth } from '../context/AuthContext'; 
import Profile from './Profile';
import '../styles/Header.css';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact', 'Login'];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth(); 

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleProfileOpen = () => {
    setProfileOpen(true);
  };

  const handleProfileClose = () => {
    setProfileOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
    setProfileOpen(false);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        backgroundColor: 'blue',
        color: 'blue',
      }}
    >
      <Divider />
      <List>
        {navItems.slice(0, 3).map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              component={Link}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              sx={{
                textAlign: 'center',
                backgroundColor: 'blue',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#EC0D00',
                  color: 'white',
                },
              }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        {!user && (
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/login"
              sx={{
                textAlign: 'center',
                backgroundColor: 'blue',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#EC0D00',
                  color: 'white',
                },
              }}
            >
              <ListItemText primary="Login" />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center' }}>
            <img src="/public/logo2.png" alt="Logo" style={{ height: 40, marginRight: 16 }} />
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexGrow: 1 }}>
              {navItems.slice(0, 3).map((item) => (
                <Button
                  key={item}
                  component={Link}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  sx={{ color: '#fff', mx: 1 }}
                >
                  {item}
                </Button>
              ))}
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mx: 2 }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
            </Box>
            <Box sx={{ display: { xs: 'block', sm: 'block' } }}>
              {!user ? (
                <Button component={Link} to="/login" sx={{ color: '#fff' }}>
                  {navItems[3]}
                </Button>
              ) : (
                <>
                  <IconButton
                    edge="end"
                    color="inherit"
                    onClick={handleProfileOpen}
                  >
                    <AccountCircleIcon />
                  </IconButton>
                  <Profile
                    open={profileOpen}
                    onClose={handleProfileClose}
                    onLogout={handleLogout}
                    user={user}
                  />
                </>
              )}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth , backgroundColor:'blue'}
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Header;
