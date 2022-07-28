import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import  { Component } from 'react'
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import './Sidenav.css';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CarRepairIcon from '@mui/icons-material/CarRepair';
import {GiTennisBall} from 'react-icons/gi'
import { mainListItems, secondaryListItems } from './listitems';






function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        My Parc
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#097425',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});
const drawerWidth = 300;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();









export default class SideNav extends Component {
  constructor(props){
    super(props);
    this.state = {
        user: null,
        open:true
    }
  }
 
toggleDrawer = () => {
   this.setState({open:!this.state.open})
  };
  render() {
   

  return (
    
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" style={{marginLeft:'90px',zIndex:'1',height:"64px",backgroundColor: '#fff' }} open={this.state.open}>
      <Toolbar
      sx={{
      pr: '24px', // keep right padding when drawer closed
    }}
      >
<IconButton style={{backgroundColor:"#1A1f14"}}
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={this.toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(this.state.open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
      
      <Typography
      component="h1"
      variant="h6"
      color="inherit"
      noWrap
      sx={{ flexGrow: 1 }}
      
      >
       <a id="titre" href="/home" ><i><GiTennisBall style={{color:'#85D236'}}/></i>Sportif</a>
      </Typography>
      

      <span style={{color:'#fff',width:'100px',fontWeight:'900'}}></span>
      </Toolbar>
      </AppBar>

      <div className='body'><Drawer style={{position:'fixed'}}variant="permanent" open={this.state.open}>
      <Toolbar
      sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      backgroundColor: "#1A1F14",
      px: [1],
    }}
      >
      <IconButton onClick={this.toggleDrawer}>
      <ChevronLeftIcon style={{color:'#fff'}}/>
      </IconButton>
      </Toolbar>
      <Divider />
      <List style={{backgroundColor:"#1A1F14",height:'100%'}}>{mainListItems}</List>
      <List style={{backgroundColor:"#1A1F14",height:'200px'}}>{secondaryListItems}</List>
      </Drawer>
      </div>
      <Toolbar />
      
      </Box>
      
    </ThemeProvider>

  );
}

}
