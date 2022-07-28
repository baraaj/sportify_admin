import SideNav from "./Sidenav";

   
    import React from 'react'
    
    export default function Modifclub() {
      return (
        <div id="wrapper">

                
    
                    <div id="content-wrapper" class="d-flex flex-column">
     
                        <div id="content">
    
    
                       
                            <div class="container-fluid">
    
    
                                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h1 class="h3 mb-0 title">Modification du club</h1>
    
                                </div>
                               <div class="">
                               <form style={{marginLeft:'10%',alignItems:'left'}}>
  
  <div class="form-group ">
    <label for="club">Nom du club</label>
    <input type="text" class="form-control" id="club" aria-describedby="Help" placeholder="Entrer le nom"/>
 
  </div>
  <div class="form-group ">
    <label for="club">Adresse</label>
    <input type="text" class="form-control" id="club" aria-describedby="Help" placeholder="Entrer le nom"/>
 
  </div>
  <div class="form-group ">
    <label for="club">Nom de l'entraîneur</label>
    <input type="text" class="form-control" id="club" aria-describedby="Help" placeholder="Entrer le nom"/>
 
  </div>
  <div class="form-group ">
  <label for="club">Région</label>
  <div class="input-select">
                  <select data-trigger=""  class="form-select"name="choices-single-defaul">
                    <option placeholder="" value="">Région</option>
                    <option>Subject b</option>
                    <option>Subject c</option>
                  </select>
                </div>
  </div>
  <div class="form-group">
  <label for="club">Gouvernement</label>
  <div class="input-select">
                  <select data-trigger="" class="form-select"name="choices-single-defaul"
                 >
                    <option placeholder="" value="">Gouvernement</option>
                    <option value="2">Ariana</option>
                <option value="3">Béja</option>
                <option value="4">Ben Arous</option>
                <option value="5">Bizerte</option>
                <option value="6">Gabès</option>
                <option value="7">Gafsa</option>
                <option value="8">Jendouba</option>
                <option value="9">Kairouan</option>
                <option value="10">Kasserine</option>
                <option value="11">Kébili</option>
                <option value="12">Le Kef</option>
                <option value="13">Mahdia</option>
                <option value="14">La Manouba</option>
                <option value="15">Médenine</option>
                <option value="16">Monastir</option>
                <option value="17">Nabeul</option>
                <option value="18">Sfax</option>
                <option value="19">Sidi Bouzid</option>
                <option value="20">Siliana</option>
                <option value="21">Sousse</option>
                <option value="22">Tataouine</option>
                <option value="23">Tozeur</option>
                <option value="24">Tunis</option>
                <option value="25">Zaghouan</option>
                  </select>
                  
                </div>
  </div>
  <div class="form-group ">

    <label for="exampleFormControlFile1">Logo</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
  
  </div>
 
  <button type="submit" class="btn d-flex justify-content-center">Sauvegarder</button>
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
    
