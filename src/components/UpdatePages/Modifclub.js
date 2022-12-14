import React from 'react'
import {useState } from "react";
  import { useLocation, useParams } from "react-router-dom";  
    export default function Modifclub() {
      
 const location = useLocation();
      const clb = location.state;
      const ch=clb.club;
      const { id } = useParams();
      const [selected, setSelected] =useState("");
      const [temp, setTemps] =useState([{jour:"",horaire:""}]);
      const [nom_club, setNom] =useState(null);
      const [emplacement, setEmplacement] =useState(null);
      const [region, setRegion] =useState(null);
      const [gouvernement, setGouvernement] =useState(null);
      const [activites, setActivite] =useState([{activite:''}]);
      const [nom_entraineur, setNomE] =useState(null);
      const [logo,setLogo]=useState(null);
       
    
      const changeSelectOptionHandler = (e) => {
        setSelected(e.target.value);
       
        setGouvernement(e.target.value)
         
      };
       
      const changeSelectOptionHandlerregion = (e) => {
        setRegion(e.target.value)
         
      
      };
      const EntraineurHandler = (e) => {
        setSelected(e.target.value);
     
        setNomE(e.target.value)
       
        
       
      };
      
       
    
     const Logohandler=(e)=>{
    
      setLogo(e.target.files[0]);
       
      
    }
    const handleChangea = (e) => {
      setEmplacement(e.target.value)
      
     
    };
    const handleChangenc =(e)=>{
      setNom(e.target.value)
    }
    const handleActivitesAdd=()=>
     {
       setActivite([...activites,{activite:""}])
     }
     const handleActiviteschange=(e,index)=>
     {
      let Newactivites=[...activites];
      Newactivites[index][e.target.name]=e.target.value;
       //if(e.target.value!==undefined)
       setActivite(Newactivites);
     }
     const handleActivitesRemove=(index)=>
     {
      let List=[...activites];
      List.splice(index,1);
      setActivite(List)
     
     }
     let handleChangeTemps=(i, e)=> {
      let Newtemps = [...temp];
      Newtemps[i][e.target.name] = e.target.value;
      setTemps(Newtemps);
    }
  
    let addTemps=()=> {
      
        setTemps([...temp, { jour: "", horaire: "" }]);
     
    }
  
    let removeTemps=(i)=>{
      let Newtemps = [...temp];
      Newtemps.splice(i, 1);
      setTemps(Newtemps);
      
      
    }

      const updateClub=async()=>{
        var formdata = new FormData();
        formdata.append("nom_club",nom_club);
        formdata.append("logo", logo);
        formdata.append("emplacement",emplacement);
        for (let i = 0; i < activites.length; i++) {   
          formdata.append("activite[]",(activites[i].activite));}
        formdata.append("nom_entraineur",nom_entraineur);
        formdata.append("gouvernement", gouvernement);
        formdata.append("region", region);
        formdata.append("temps",JSON.stringify(temp));  
        var requestOptions = {
          method: 'PUT',
          body: formdata,
          redirect: 'follow'
        };
        
        fetch("http://localhost:3000/api/clubs/"+id, requestOptions)
          .then(response => response.text())
          .then(result => {console.log(result)
          alert("Club modifi?? !")})
          .catch(error => console.log('error', error));
        };
       
       
     
     /** Different arrays for different dropdowns */
     const ariana = [
      "Ariana Ville",
      "Ettadhamen",
      "Kal??at el-Andalous",
      "La Soukra",
      "Mnihla",
      "Raoued",
      "Sidi Thabet"
     ];
     const bizerte = [
       "Bizerte Nord",
       "Bizerte Sud",
       "El Alia",
       "Ghar El Melh",
       "Ghezala",
       "Joumine",
       "Mateur",
       "Menzel Bourguiba",
       "Menzel Jemil",
       "Ras Jebel",
       "Sejnane",
       "Tinja",
       "Utique",
       "Zarzouna"
   ];
     const tunis =  [
       "Bab El Bhar",
       "Bab Souika",
       "Carthage",
       "Cit?? El Khadra",
       "Djebel Jelloud",
       "El Kabaria",
       "El Menzah",
       "El Omrane",
       "El Omrane sup??rieur",
       "El Ouardia",
       "Ettahrir",
       "Ezzouhour",
       "Hra??ria",
       "La Goulette",
       "La Marsa",
       "Le Bardo",
       "Le Kram",
       "M??dina",
       "S??joumi",
       "Sidi El B??chir",
       "Sidi Hassine"
      
   ];
   const lamanouba =  [
     "Borj El Amri",
     "Djedeida",
     "Douar Hicher",
     "El Batan",
     "La Manouba",
     "Mornaguia",
     "Oued Ellil",
     "Tebourba"
    
 ];
 const benarous =  [
   "Ben Arous",
   "Bou Mhel el-Bassatine",
   "El Mourouj",
   "Ezzahra",
   "Fouchana",
   "Hammam Chott",
   "Hammam Lif",
   "Mohamedia",
   "Medina Jedida",
   "M??grine",
   "Mornag",
   "Rad??s"
  
];
const zaghouan =  [
 "Bir Mcherga",
 "El Fahs",
 "Nadhour",
 "Saouaf",
 "Zaghouan",
 "Zriba"

];
const nabeul =  [
 "B??ni Khalled",
 "B??ni Khiar",
 "Bou Argoub	",
 "Dar Cha??bane El Fehri",
 "El Haouaria",
 "El Mida",
 "Grombalia",
 "Hammam Ghez??ze",
 "Hammamet",
 "K??libia",
 "Korba",
 "Menzel Bouzelfa",
 "Menzel Temime",
 "Nabeul",
 "Soliman",
 "Takelsa"

];
const jendouba =  [
 "A??n Draham",
 "Balta-Bou Aouane",
 "Bou Salem",
 "Fernana",
 "Ghardimaou",
 "Jendouba Sud",
 "Jendouba Nord",
 "Oued Meliz",
 "Tabarka"

];
const beja =  [
 "Amdoun",
 "B??ja Nord",
 "B??ja Sud",
 "Goubellat",
 "Medjez el-Bab",
 "Nefza",
 "T??boursouk",
 "Testour",
 "Thibar"
];
const lekef =  [
 "Dahmani",
 "J??rissa","El Ksour",
 "Sers",
 "Kal??at Khasba",	
 "Kalaat Senan",	
"Kef Est", 
 "Kef Ouest",
 "Nebeur",
 "Sakiet Sidi Youssef",
 "Tajerouine"
 

];
const siliana =  [
 "Bargou"	,
"Bou Arada" 	,
 "El Aroussa"	,
 "El Krib"	,
 "Ga??four",
 "Kesra"	,
 "Makthar",	
 "Rouhia"	,
 "Sidi Bou Rouis"	,
 "Siliana Nord"	,
 "Siliana Sud"	
 

];
const sousse =  [
 "Akouda",
 "Bouficha",
 "Enfida",
"Hammam Sousse",
"Hergla",
 "Kal??a Kebira",
" Kal??a Seghira"	,
 "Kondar",
 "Msaken",
 "Sidi Bou Ali",
 "Sidi El Hani",
 "Sousse Jawhara",
 "Sousse M??dina",
 "Sousse Riadh",
 "Sousse Sidi Abdelhamid"
 

];
const monastir =  [

 "Bekalta",
"Bembla",
"Beni Hassen"	,
"Jemmal",
"Ksar Hellal"	,
"Ksibet el-M??diouni",
"Moknine",
"Monastir",
"Ouerdanine",
"Sahline",
"Sayada-Lamta-Bou Hajar",
"T??boulba",
"Z??ramdine"

];
const mahdia =  [
 "Bou Merdes"	,
 "Chebba"	,
"Chorbane"	,
 "El Jem"	,
 "Essouassi",
 "Hebira",
 "Ksour Essef",
 "Melloul??che",
 "Ouled Chamekh",
 "Sidi Alouane",
 "Rejiche"	,
"El Brad??a"	
 

];
const kairouan =  [
 "Bou Hajla",
 "Chebika",
"Echrarda",
 "El Al??a",
 "Haffouz",
 "Hajeb El Ayoun"	,
 "Kairouan Nord"	,
 "Kairouan Sud",
 "Nasrallah",
 "Oueslatia",
 "Sbikha"
 

];
const kasserine =  [
 "El Ayoun",
 "Ezzouhour",
 "F??riana",
 "Foussana",
 "Ha??dra",
 "Hassi El Ferid",
 "Jedelienne",
 "Kasserine Nord",
 "Kasserine Sud",
"Majel Bel Abb??s",
 "Sbe??tla",
 "Sbiba",
"Thala"	
 

];
const sidibouzid =  [
 "Bir El Hafey",
 "Cebbala Ouled Asker",
 "Jilma",
 "Meknassy",
 "Menzel Bouzaiane",
 "Mezzouna"	,
 "Ouled Haffouz"	,
 "Regueb",
 "Sidi Ali Ben Aoun",
 "Sidi Bouzid Est"	,
 "Sidi Bouzid Ouest",
 "Souk Jedid"
 

];
const sfax =  [
 "Agareb",
 "Bir Ali Ben Khalifa",
 "El Amra",
 "El Hencha",
"Gra??ba",
 "Jebiniana",
 "Kerkennah"	,
 "Mahr??s"	,
 "Menzel Chaker",
"Sakiet Edda??er",
 "Sakiet Ezzit",
 "Sfax Ouest",
 "Sfax Sud",
 "Sfax Ville",
 "Skhira",
 "Thyna"
 

];
const gabes =  [
 "Gab??s M??dina",
 "Gab??s Ouest",
 "Gab??s Sud",
 "Ghannouch",
 "El Hamma",
 "Matmata",
 "Mareth",
 "Menzel El Habib",
 "M??touia",
 "Nouvelle Matmata"
 

];
const medenine =  [
 "Ben Gardane",
 "Beni Khedache",
 "Djerba - Ajim",
 "Djerba - Houmt Souk",
 "Djerba - Midoun",
 "M??denine Nord",
 "M??denine Sud",
 "Sidi Makhlouf",
 "Zarzis"
 

];
const tataouine =  [
 "Bir Lahmar",
"Dehiba",
"Ghomrassen",
"Remada"	,
"Sm??r"	,
"Tataouine Nord"	,
"Tataouine Sud"	,
 

];
const gafsa =  [
 
 "Belkhir",
"El Guettar",
"El Ksar",
"Gafsa Nord",
"Gafsa Sud",
"Mdhilla",
"M??tlaoui",
"Moular??s",
"Redeyef",
"Sened",
"Sidi A??ch"	

];
const tozeur =  [
 "Degache",
"Hazoua",
"Nefta",
"Tameghza",
"Tozeur"	
 

];
const kebili =  [
 
 "Douz Nord"	,
"Douz Sud"	,
"Faouar"	,
"K??bili Nord"	,
"K??bili Sud",
"Souk Lahad"	

];

     /** Type variable to store different array for different dropdown */
     let type = null;
     
     /** This will be used to create set of options that user will see */
     let options = null;
   
     if (selected === "Ariana") {
       type = ariana;
     } else if (selected === "B??ja") {
       type = beja;
     } else if (selected === "Ben Arous") {
       type = benarous;
     }
     else if (selected === "Bizerte") {
       type = bizerte;
     }
     else if (selected === "Gab??s") {
       type = gabes;
     }
     else if (selected === "Gafsa") {
       type = gafsa;
     }
     else if (selected === "Jendouba") {
       type = jendouba;
     }
     else if (selected === "Kairouan") {
       type = kairouan;
     }
     else if (selected === "Kasserine") {
       type = kasserine;
     }
     else if (selected === "Ben Arous") {
       type = benarous;
     }
     else if (selected === "K??bili") {
       type = kebili;
     }
     else if (selected === "Le Kef") {
       type = lekef;
     }
     else if (selected === "Mahdia") {
       type = mahdia;
     }
     else if (selected === "La Manouba") {
       type = lamanouba;
     }
     else if (selected === "M??denine") {
       type = medenine;
     }
     else if (selected === "Monastir") {
       type = monastir;
     }
     else if (selected === "Nabeul") {
       type = nabeul;
     }
     else if (selected === "Sfax") {
       type = sfax;
     }
     else if (selected === "Sidi Bouzid") {
       type = sidibouzid;
     }
     else if (selected === "Siliana") {
       type = siliana;
     }
     else if (selected === "Sousse") {
       type = sousse;
     }
     else if (selected === "Tataouine") {
       type = tataouine;
     }
     else if (selected === "Tozeur") {
       type = tozeur;
     }
     else if (selected === "Tunis") {
       type = tunis;
     }
     else if (selected === "Zaghouan") {
       type = zaghouan;
     }
     
     /** If "Type" is null or undefined then options will be null,
      * otherwise it will create a options iterable based on our array
      */
     if (type) {
       options = type.map((el) => <option key={el}>{el}</option>);
     }
      return (
        <div id="wrapper">

                
    
                    <div id="content-wrapper" className="d-flex flex-column">
     
                        <div id="content">
    
    
                       
                            <div className="container-fluid">
    
    
                                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h1 className="h3 mb-0 title">Modification du club</h1>
    
                                </div>
                               <div className="">
                               <form onSubmit={(e)=>{e.preventDefault();updateClub(ch.id)}}style={{marginLeft:'10%',alignItems:'left'}}>
  
  <div className="form-group ">
    <label for="club">Nom du club</label>
    <input type="text" className="form-control" id="club" aria-describedby="Help" placeholder={ch.nom} name="nom_club" onChange={handleChangenc}/>

  </div>
  <div className="form-group ">
    <label for="club">Adresse</label>
    <input type="text" className="form-control" id="club" aria-describedby="Help" placeholder={ch.emplacement} name="emplacement"onChange={handleChangea}/>
 
  </div>
  <div className="form-group ">
    <label for="club">Nom de l'entra??neur</label>
    <input type="text" className="form-control" id="club" aria-describedby="Help" placeholder="nom entraineur"name="nom_entraineur"onChange={EntraineurHandler}/>
 
  </div>
  <div class="form-group">

<label for="activites">Activit??(s)</label>
{activites.map((element, index) => (
            <div className="form-inline" key={index}>
                <div className="input-group" style={
    {
      
      marginBottom:'20px'
    }
  }>
              <input type="text" style={{height:'40px'}} className="input-control form-control" id="activites" name="activite" value={element.activite || ""} onChange={e => handleActiviteschange(e,index)} />
               
              {
                index ? 
                 <span> <button type="button"style={{border:'none',backgroundColor:'lightgray',height:'40px'}} className="deletebutton input-group-append form-control" onClick={() => handleActivitesRemove(index)}>Remove</button> </span>
                : null
              }
            </div>
            </div>
          ))}</div>
          
          <div className="col-sm-2">
          <div className="button-section">
              <button className="button add" type="button" style={{border:'none',fontSize:'20px',backgroundColor:'lightgreen',height:'40px'}} onClick={() => handleActivitesAdd()}>Add</button>
           
              </div>
          </div>
          <div class="form-group">

<label for="Horaires">Horaires</label>
{temp.map((element, index) => (
            <div className="form-inline" key={index}>
                <div className="input-group" style={
    {
      
      marginBottom:'20px'
    }
  }> 
              <label style={{marginTop:'-25px'}}>Jour(s)</label>  
              <input type="text" style={{height:'40px'}} className="input-control form-control" name="jour" value={element.jour || ""} onChange={e=>handleChangeTemps(index,e)} />
              <label style={{marginTop:'-25px',marginLeft:'20px'}}>Horaire(s)</label> 
              <input type="text" style={{height:'40px'}} className="input-control form-control" name="horaire" value={element.horaire || ""} onChange={e => handleChangeTemps(index,e)} />
              {
                index ? 
                 <span> <button style={{border:'none',backgroundColor:'lightgray',height:'40px'}} type="button"   className="deletebutton input-group-append form-control" onClick={() => removeTemps(index)}>Remove</button> </span>
                : null
              }
            </div>
            </div>
          ))}</div>
          
          <div className="col-sm-2">
          <div className="button-section">
              <button className="button add" type="button" style={{border:'none',fontSize:'20px',backgroundColor:'lightgreen',height:'40px'}} onClick={() =>addTemps()}>Add</button>
           
              </div>
          </div>

  <div className="form-group ">
  <label for="club">Gouvernement</label>
  <div className="input-select">
                  <select data-trigger="" onChange={changeSelectOptionHandler} className="form-select" name="gouvernement">
                  <option></option>
                  <option>Ariana</option>
                <option>B??ja</option>
                <option >Ben Arous</option>
                <option >Bizerte</option>
                <option >Gab??s</option>
                <option >Gafsa</option>
                <option >Jendouba</option>
                <option >Kairouan</option>
                <option >Kasserine</option>
                <option >K??bili</option>
                <option >Le Kef</option>
                <option >Mahdia</option>
                <option >La Manouba</option>
                <option >M??denine</option>
                <option >Monastir</option>
                <option >Nabeul</option>
                <option >Sfax</option>
                <option >Sidi Bouzid</option>
                <option >Siliana</option>
                <option>Sousse</option>
                <option >Tataouine</option>
                <option >Tozeur</option>
                <option >Tunis</option>
                <option>Zaghouan</option>
                  </select>
                </div>
  </div>
  <div className="form-group">
  <label for="club">R??gion</label>
  <div className="input-select">
                  <select data-trigger="" className="form-select"name="region"onChange={changeSelectOptionHandlerregion}
                 >
                        {
              /** This is where we have used our options variable */
              options
            }
                  </select>
                  
                </div>
  </div>
  <div className="form-group ">

    <label for="exampleFormControlFile1">Logo</label>
    <input type="file" className="form-control-file" id="exampleFormControlFile1" name="logo" onChange={Logohandler} />
  
  </div>
 
  <button type="submit" className="btn d-flex justify-content-center" >Sauvegarder</button>
</form>
                               </div>
    
                     
          
    
    
    
                        </div>
    
                    </div>
                    <footer className="sticky-footer bg-white">
                    
                    </footer>
    
                </div> 
    
        </div >
      )
    }
    
