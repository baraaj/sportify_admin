import React, { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../Assets/Title';
import axios from 'axios';
export default function Clubssection() {
  const [clubs, setClubs] = React.useState([]);
  const show=()=>{
    axios.get("/clubs/")
     .then(response => {
       const clubs = response.data.clubs;
       setClubs(clubs)
     })
}
useEffect(() => {
  show();
  console.log(clubs)

}, []);

  return (
    <div >
                                
    
    <Title >Clubs </Title>
    <Table size="small">
      <TableHead>
        <TableRow>
       
          <TableCell style={{fontFamily:"fantasy",color:"#a3b18a"}}>Nom</TableCell>
          <TableCell style={{fontFamily:"fantasy",color:"#a3b18a"}}>Adresse</TableCell>
          <TableCell style={{fontFamily:"fantasy",color:"#a3b18a"}}>Région</TableCell>
          <TableCell style={{fontFamily:"fantasy",color:"#a3b18a"}}>Gouvernement</TableCell>
          <TableCell style={{fontFamily:"fantasy",color:"#a3b18a"}}>Entraîneur</TableCell>
          <TableCell style={{fontFamily:"fantasy",color:"#a3b18a"}}>Catégorie</TableCell>
        </TableRow>
          
      </TableHead>
      <TableBody>
        
     {clubs.slice(0,4).map((c)=>{
      return(  
       <TableRow >
      <TableCell>{c.nom_club}</TableCell>
      <TableCell>{c.emplacement}</TableCell>
      <TableCell>{c.region}</TableCell>
      <TableCell>{c.gouvernement}</TableCell>
      <TableCell>{c.nom_entraineur}</TableCell>
      <TableCell>{c.activite}</TableCell>
      </TableRow>)
    
     })} 
        
      
          
        
      </TableBody>
    </Table>
    <a class="linkplus" href="/clubs">Plus</a>
    
   
   
  
  </div>
  )
}