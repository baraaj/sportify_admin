import SideNav from '../Sidenav/Sidenav';
import '../Sidenav/Sidenav.css';
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
import {useState,useEffect} from 'react';
 import { useLocation, useParams } from "react-router-dom";  
export default function ClubsPage() {
  const [selected, setSelected] =useState("");
  const [clbs, setClubs] =useState([]);
  const [queryregion, setqueryregion] =useState(null);
  const [querygouv, setquerygouv] =useState(null);
  const { id } = useParams();
  let clb=[];
  
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
  { field: 'id', headerName: 'ID', width: 60 },
  {
    field: 'nom',
    headerName: 'Nom',
    width: 120,
    editable: true,
  },
  {
    field: 'activité',
    headerName: 'Activité',
    width: 120,
    editable: true,
  },
  {
    field: 'emplacement',
    headerName: 'Emplacement',
    width: 120,
    editable: true,
  },
  {
    field: 'région',
    headerName: 'Région',
    sortable: false,
    width: 120,
   
  },
  {
    field: 'gouvernement',
    headerName: 'Gouvernement',
    sortable: false,
    width: 120,
   
  },
  {
    field: 'logo',
    headerName: 'Logo',
    sortable: false,
    width: 120,
    renderCell:(params)=>{
      return(
        <>
       
     <img className='avatar'src={"http://localhost:3000/"+params.row.logo} />
        </>
      )
    }

   
  },
  {
    field: 'temps',
    headerName: 'Temps',
    sortable: false,
    width: 430,
     
    type: 'string',
  
   
  },
  {
    field: 'action',
    headerName: 'Action',
    
    width: 120,
    renderCell:(params)=>{
      return(
        <>
       <Link to={"/modifclubs/"+params.id} state={{club:params.row}}>
        <a className="edit"><EditIcon style={{Color:'#444'}}/></a>
        </Link>
        <a className="delete" onClick={(e)=>{deleteClub(params.id,e)}}><DeleteIcon style={{Color:"#555"}}/> </a>
        </>
      )
    }
  }
];

  
  const rows =clbs.map((c) => { 
 
  return {
    
    id:c._id,
    nom:c.nom_club,
    gouvernement: c.gouvernement,
    emplacement:c.emplacement,
    temps:c.temps.map(cc=>{
      return cc.jour.toString()+""+cc.horaire.toString()+"\r"
  }),
    région:c.region,
    logo:c.logo,
    activité:c.activite.map(a=>{return a.toString()+""})
   
  };});
   
    
  /** Different arrays for different dropdowns */
  const ariana = [
   "Ariana Ville",
   "Ettadhamen",
   "Kalâat el-Andalous",
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
    "Cité El Khadra",
    "Djebel Jelloud",
    "El Kabaria",
    "El Menzah",
    "El Omrane",
    "El Omrane supérieur",
    "El Ouardia",
    "Ettahrir",
    "Ezzouhour",
    "Hraïria",
    "La Goulette",
    "La Marsa",
    "Le Bardo",
    "Le Kram",
    "Médina",
    "Séjoumi",
    "Sidi El Béchir",
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
"Mégrine",
"Mornag",
"Radès"

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
"Béni Khalled",
"Béni Khiar",
"Bou Argoub	",
"Dar Chaâbane El Fehri",
"El Haouaria",
"El Mida",
"Grombalia",
"Hammam Ghezèze",
"Hammamet",
"Kélibia",
"Korba",
"Menzel Bouzelfa",
"Menzel Temime",
"Nabeul",
"Soliman",
"Takelsa"

];
const jendouba =  [
"Aïn Draham",
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
"Béja Nord",
"Béja Sud",
"Goubellat",
"Medjez el-Bab",
"Nefza",
"Téboursouk",
"Testour",
"Thibar"
];
const lekef =  [
"Dahmani",
"Jérissa","El Ksour",
"Sers",
"Kalâat Khasba",	
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
"Gaâfour",
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
"Kalâa Kebira",
" Kalâa Seghira"	,
"Kondar",
"Msaken",
"Sidi Bou Ali",
"Sidi El Hani",
"Sousse Jawhara",
"Sousse Médina",
"Sousse Riadh",
"Sousse Sidi Abdelhamid"


];
const monastir =  [

"Bekalta",
"Bembla",
"Beni Hassen"	,
"Jemmal",
"Ksar Hellal"	,
"Ksibet el-Médiouni",
"Moknine",
"Monastir",
"Ouerdanine",
"Sahline",
"Sayada-Lamta-Bou Hajar",
"Téboulba",
"Zéramdine"

];
const mahdia =  [
"Bou Merdes"	,
"Chebba"	,
"Chorbane"	,
"El Jem"	,
"Essouassi",
"Hebira",
"Ksour Essef",
"Melloulèche",
"Ouled Chamekh",
"Sidi Alouane",
"Rejiche"	,
"El Bradâa"	


];
const kairouan =  [
"Bou Hajla",
"Chebika",
"Echrarda",
"El Alâa",
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
"Fériana",
"Foussana",
"Haïdra",
"Hassi El Ferid",
"Jedelienne",
"Kasserine Nord",
"Kasserine Sud",
"Majel Bel Abbès",
"Sbeïtla",
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
"Graïba",
"Jebiniana",
"Kerkennah"	,
"Mahrès"	,
"Menzel Chaker",
"Sakiet Eddaïer",
"Sakiet Ezzit",
"Sfax Ouest",
"Sfax Sud",
"Sfax Ville",
"Skhira",
"Thyna"


];
const gabes =  [
"Gabès Médina",
"Gabès Ouest",
"Gabès Sud",
"Ghannouch",
"El Hamma",
"Matmata",
"Mareth",
"Menzel El Habib",
"Métouia",
"Nouvelle Matmata"


];
const medenine =  [
"Ben Gardane",
"Beni Khedache",
"Djerba - Ajim",
"Djerba - Houmt Souk",
"Djerba - Midoun",
"Médenine Nord",
"Médenine Sud",
"Sidi Makhlouf",
"Zarzis"


];
const tataouine =  [
"Bir Lahmar",
"Dehiba",
"Ghomrassen",
"Remada"	,
"Smâr"	,
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
"Métlaoui",
"Moularès",
"Redeyef",
"Sened",
"Sidi Aïch"	

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
"Kébili Nord"	,
"Kébili Sud",
"Souk Lahad"	

];

  /** Type variable to store different array for different dropdown */
  let type = null;
  
  /** This will be used to create set of options that user will see */
  let options = null;
  /**    <option value="2">Ariana</option>
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
            <option value="25">Zaghouan</option> */
  /** Setting Type variable according to dropdown */
  if (selected === "Ariana") {
    type = ariana;
  } else if (selected === "Béja") {
    type = beja;
  } else if (selected === "Ben Arous") {
    type = benarous;
  }
  else if (selected === "Bizerte") {
    type = bizerte;
  }
  else if (selected === "Gabès") {
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
  else if (selected === "Kébili") {
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
  else if (selected === "Médenine") {
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

 const getClubs=async ()=>{
  try {
    const res=await axios.get("/clubs"
    
    );
    const club=res.data.clubs;
   setClubs(club);
   
    
  } catch (err) {
    console.log(err);
  }
 };
 const find=()=>{
     
  axios.get("/clubs/findgouvernement/"+querygouv+"/"+queryregion)
  .then(response => {
    const clubs = response.data;
    
    setClubs(clubs);
   
  
   
  
  })};
  
  useEffect(()=>{
    
    getClubs();
   
 },[]);
  const deleteClub=async(id)=>{ 
    
   try {
     const res=await axios.delete("/clubs/"+id)
     .then(res=>{

       clbs = clbs.filter(item => item.id !== id);  
      this.setClubs( clbs);  
      alert("deleted")
     })
   } catch (err) {
     console.log(err);
   }
  };
 
 

 
  return (
    
    <div id="wrapper">

           

                <div id="content-wrapper" className="d-flex flex-column">
 
                    <div id="content">


                   
                        <div className="container-fluid">


                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 title">Liste des clubs</h1>

                            </div>
                           

                       

                            <div className="container-lg">
                            <form onSubmit={(e)=>{e.preventDefault();find()}} style={{marginLeft:'10%'}}>
        <div className="inner-form">
          <div className="basic-search">
            <div className="input-field">
              <input id="search" type="text" placeholder="Rechercher" />
              <div className="icon-wrap">
                <svg className="svg-inline--fa fa-search fa-w-16" fill="#ccc" aria-hidden="true" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="advance-search">
            <span className="desc">Filtre</span>
            <div className="row">
            
              <div className="input-field">
              <div className="input-select">
                  <select data-trigger=""   onChange={changeSelectOptionHandler} className="form-select"name="choices-single-defaul">
                  <option>Gouvernement</option>
                  <option>Ariana</option>
                <option>Béja</option>
                <option >Ben Arous</option>
                <option >Bizerte</option>
                <option >Gabès</option>
                <option >Gafsa</option>
                <option >Jendouba</option>
                <option >Kairouan</option>
                <option >Kasserine</option>
                <option >Kébili</option>
                <option >Le Kef</option>
                <option >Mahdia</option>
                <option >La Manouba</option>
                <option >Médenine</option>
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
              <div className="input-field">
                <div className="input-select">
                  <select data-trigger="" onChange={changeSelectOptionHandlerregion}  className="form-select"name="choices-single-defaul">
                    <option placeholder="" value="">Région</option>
                    {
              /** This is where we have used our options variable */
              options
            }
                  </select>
                </div>
              </div>
            </div>
           
            <div className="row third">
              <div className="input-field">
                <div className="result-count">
                  <span>{clbs.length}</span>résultats</div>
                <div className="group-btn">
                  <button className="btn-delete" id="delete">RESET</button>
                  <button type="submit" className="btn-search">Rechercher</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="row">
                   
                    <div className="col-sm-2">
                      <Link to="/addclub">
<AddIcon className='add' style={{ fontSize:'50px'}}/>
</Link>          
                </div>
                </div>
            
      <Box sx={{ width: '90%',height:'600px',paddingTop:'5rem',paddingRight:'5rem'}}>
      
     <DataGrid
       rows={rows}
       columns={columns}
       pageSize={5}
       rowsPerPageOptions={[5]}
       checkboxSelection
       disableSelectionOnClick
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
 