import React from 'react'
import './Dashboard.css'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Clubssection from './Clubssection';
import {ImUsers} from 'react-icons/im';


import {MdRoom} from 'react-icons/md';
import {SiClubhouse} from 'react-icons/si';
import Sallessection from './Sallessection';
export default function Dashbord() {
  return (
    <div class="container">
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
    <Grid container spacing={3}>
      {/* Chart */}
      <Grid item xs={12} md={4} lg={4}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
            backgroundColor:'#85D236'
          }}
        >
         <h1 className='gridtitle'>Clubs</h1>
         <h1 className='inf'>500</h1>
         <i className='icon'><SiClubhouse /></i>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} lg={4}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
            backgroundColor:'#85D236'
          }}
        >
         <h1 className='gridtitle'>Utilisateurs</h1>  
         <h1 className='inf'>500</h1>
        <i className='icon'><ImUsers /></i> 
      
        </Paper>
      </Grid>
      {/* Recent Deposits */}
      <Grid item xs={12} md={4} lg={4}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
            backgroundColor:'#85D236'
          }}
        >
          <h1 className='gridtitle'>Salles</h1>
          <h1 className='inf'>500</h1>
          <i className='icon'><MdRoom /></i>
        </Paper>
      </Grid>
      {/* Recent Orders */}
      <Grid item xs={12}>
        <Paper style={{backgroundColor:'#e9f5db'}}sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
         <Clubssection/>
        </Paper>
      </Grid>
    
      <Grid item xs={12}>
        <Paper style={{backgroundColor:'#e9f5db'}}sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
         <Sallessection/>
        </Paper>
      </Grid>
    </Grid>
    
  </Container>
</div>
  )
}
