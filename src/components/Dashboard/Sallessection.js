import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../Assets/Title';
export default function Sallessection() {
  return (
    <div>
        
    <Title >Salles </Title>
    <Table size="small">
      <TableHead>
        <TableRow>
       
          <TableCell style={{fontFamily:"fantasy",color:"#a3b18a"}}>Nom</TableCell>
          <TableCell style={{fontFamily:"fantasy",color:"#a3b18a"}}>Adresse</TableCell>
          <TableCell style={{fontFamily:"fantasy",color:"#a3b18a"}}>Région</TableCell>
          <TableCell style={{fontFamily:"fantasy",color:"#a3b18a"}}>Gouvernement</TableCell>
        
        </TableRow>
          
      </TableHead>
      <TableBody>
        
      
        <TableRow >
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            
            <TableCell>  </TableCell>
            </TableRow>
      
          
        
      </TableBody>
    </Table>
    <a class="linkplus">Plus</a>
    </div>
  )
}
