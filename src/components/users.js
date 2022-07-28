import React from 'react'
import SideNav from './Sidenav'
import './Sidenav.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import 'bootstrap/dist/css/bootstrap.min.css';
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
export default function UsersPage() {
  return (
    
    <div id="wrapper">

           

                <div id="content-wrapper" class="d-flex flex-column">
 
                    <div id="content">


                   
                        <div class="container-fluid">


                            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 class="h3 mb-0 title">Liste des utilisateurs</h1>

                            </div>
                           

                       

                            <div class="container-lg">
        
    <div class="table-responsive">
      
        <div class="table-wrapper">
           
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Pseudo</th>
                        <th>Email</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John Doe</td>
                        <td>Administration</td>
                        <td>(171) 555-2222</td>
                      
                       
                    </tr>
                      
                </tbody>
            </table>
        </div>
    </div>
</div>     



                    </div>

                </div>
                <footer class="sticky-footer bg-white">
                
                </footer>

            </div> 

    </div >
  )
}
