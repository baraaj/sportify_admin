import React, { useEffect } from 'react'
import SideNav from '../Sidenav/Sidenav'
import '../Sidenav/Sidenav.css'
import {
  
  Link
} from "react-router-dom";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import 'bootstrap/dist/css/bootstrap.min.css';
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import axios from 'axios';
import { getRowIdFromRowModel } from '@mui/x-data-grid/hooks/features/rows/gridRowsUtils';
import { Avatar } from '@mui/material';
export default function EventsPage() {
  const [selected, setSelected] = React.useState("");
  const [events, setEvents] = React.useState([]);
  const [queryregion, setqueryregion] = React.useState("");
  const [querygouv, setquerygouv] = React.useState("");
  /** Function that will set different values to state variable
   * based on which dropdown is selected
   */
 
   const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
    setquerygouv(event.target.value);
  };
  const changeSelectOptionHandlerregion = (event) => {
       
    console.log(event.target.value)
    setqueryregion(event.target.value)
   };
   const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 160 },
    {
      field: 'titre',
      headerName: 'Titre',
      width: 190,
      editable: true,
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 250,
      editable: true,
    },
    {
      field: 'image',
      headerName: 'Image',
      width: 150,
      editable: true,
      renderCell:(params)=>{
        return(
          
         
          <Avatar src={"http://localhost:3000/uploadsevent/"+params.value}/>
          
        )
      }
    },
    {
      field: 'action',
      headerName: 'Action',
      
      width: 190,
      renderCell:(params)=>{
        return(
          <>
         
          <a href={"/modifevent/"+`${params.row.id}`} className="edit"><EditIcon style={{Color:'#444'}}/></a>
         
          <a className="delete" onClick={(e)=>{deleteEvent(params.id,e)}}><DeleteIcon style={{Color:"#555"}}/> </a>
          </>
        )
      }
    }
  ];
const rows = events.map((e) => {
  
  return {
   
    id:e._id,
    titre:e.Titre,
    description: e.Description,
    image:e.Image
  };});
  
  const show=()=>{
    axios.get("/events/")
    .then(response => {
      const events = response.data;
      setEvents(events)
  })};
  const deleteEvent=async(id)=>{ 
    
    try {
      const res=await axios.delete(`/events/deleteevent/${id}`)
      .then(res=>{
 
        events = events.filter(item => item.id !== id);  
     setEvents( events);  
     alert("Event deleted successfully !")
      })
    } catch (err) {
      console.log(err);
    }
    show()
   };
  
 
 useEffect(() => {
  show();
 

}, []);
  return (
    
    <div id="wrapper">

           

                <div id="content-wrapper" className="d-flex flex-column">
 
                    <div id="content">


                   
                        <div className="container-fluid">


                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 title">Liste des évènements</h1>

                            </div>
                           

                       

                            <div className="container-lg">
                            <form style={{marginLeft:'10%'}}>
        
      </form>
     
                   
                    <div className="col-sm-2">
<a className="add" href="/addevents"><AddIcon style={{ fontSize:'50px'}}/></a>
                    
                
                </div>
            
      <Box sx={{ width: '90%',height:'600px',paddingTop:'5rem',paddingRight:'5rem'}}>
      
     <DataGrid
     getRowHeight={() => 'auto'}
       rows={rows}
       columns={columns}
       pageSize={10}
       rowsPerPageOptions={[5]}
       checkboxSelection
       disableSelectionOnClick
       getRowId={(row) => row.id}
       experimentalFeatures={{ newEditingApi: true }}
     />
     </Box>
</div>     



                    </div>

                </div>
                <footer className="sticky-footer bg-white">
                
                </footer>

            </div> 

    </div >
  )
}