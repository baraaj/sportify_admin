import React from 'react'
import './Sidenav.css'
export default function AjoutEvents() {
  return (
    <div id="wrapper">

                 
    
                    <div id="content-wrapper" class="d-flex flex-column">
     
                        <div id="content">
    
    
                       
                            <div class="container-fluid">
    
    
                                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h1 class="h3 mb-0 title">Ajout d'un evènement</h1>
    
                                </div>
                               <div class="">
                               <form style={{marginLeft:'10%',alignItems:'left'}}>
  
  <div class="form-group ">
    <label for="club">Titre</label>
    <input type="text" class="form-control" id="club" aria-describedby="Help" placeholder="Entrer le nom"/>
 
  </div>
  
 
  <div class="form-group ">

<label for="exampleFormControlFile1">Image</label>
<input type="file" class="form-control-file" id="exampleFormControlFile1"/>

</div>
 
 
  <button type="submit" class="btn-2 d-flex justify-content-center">Sauvegarder</button>
</form>
                               </div>
    
                     
          
    
    
    
                        </div>
    
                    </div>
                    <footer class="sticky-footer bg-white">
                    
                    </footer>
    
                </div> 
    
        </div >
  )
}
