import React from 'react'
import '../Sidenav/Sidenav.css';
export default function Ajoutnews() {
  const [news, setNews] =useState(null);
  const [titre, setTitre] =useState(null);
  const [description, setDescription] =useState(null);
  const [image, setImage] =useState(null);
  const Imagehandler=(e)=>{
   
    setImage(e.target.files[0]);}
  const additem=async()=>{
    
    var formdata = new FormData();
formdata.append("Titre",titre);
formdata.append("Description", description);
formdata.append("Image",image);
    


var requestOptions = {
method: 'POST',
body: formdata,
redirect: 'follow'
};

fetch("http://localhost:3000/api/news/newsevent", requestOptions)
.then(response => response.text())
.then(result => {console.log(result);
alert("News added !")})
.catch(error => console.log('error', error));
   }
  return (
    <div id="wrapper">

                 
    
    <div id="content-wrapper" class="d-flex flex-column">

        <div id="content">


       
            <div class="container-fluid">


                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 class="h3 mb-0 title">Ajout d'un article</h1>

                </div>
               <div class="">
             
               <form onSubmit={(e)=>{e.preventDefault();additem()}} style={{marginLeft:'10%',alignItems:'left'}}>
<div class="form-group ">
<label for="club">Titre</label>
<input type="text" class="form-control" id="club" aria-describedby="Help" placeholder="Entrer le nom" onChange={(e)=>setTitre(e.target.value)}/>

</div>
<div class="form-group ">
    <label for="club">Description</label>
    <textarea type="text" class="form-control" id="club" aria-describedby="Help" placeholder="Entrer la description"onChange={(e)=>setDescription(e.target.value)}/>
 
  </div>
  
<div class="form-group ">

<label for="exampleFormControlFile1">Image</label>
<input type="file" class="form-control-file" id="exampleFormControlFile1"onChange={Imagehandler}/>

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
