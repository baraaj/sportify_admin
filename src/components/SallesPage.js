import React from 'react'
import SideNav from './Sidenav'
import './Sidenav.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import 'bootstrap/dist/css/bootstrap.min.css';
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
export default function SallePage() {
  const [selected, setSelected] = React.useState("");
  
  /** Function that will set different values to state variable
   * based on which dropdown is selected
   */
  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
  };
  
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
  return (
    
    <div id="wrapper">

           

                <div id="content-wrapper" class="d-flex flex-column">
 
                    <div id="content">


                   
                        <div class="container-fluid">


                            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 class="h3 mb-0 title">Liste des salles</h1>

                            </div>
                           

                       

                            <div class="container-lg">
                            <form style={{marginLeft:'10%'}}>
        <div class="inner-form">
          <div class="basic-search">
            <div class="input-field">
              <input id="search" type="text" placeholder="Rechercher" />
              <div class="icon-wrap">
                <svg class="svg-inline--fa fa-search fa-w-16" fill="#ccc" aria-hidden="true" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div class="advance-search">
            <span class="desc">Filtre</span>
            <div class="row">
            
              <div class="input-field">
              <div class="input-select">
                  <select data-trigger=""   onChange={changeSelectOptionHandler} class="form-select"name="choices-single-defaul">
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
              <div class="input-field">
                <div class="input-select">
                  <select data-trigger=""  class="form-select"name="choices-single-defaul">
                    <option placeholder="" value="">Région</option>
                    {
              /** This is where we have used our options variable */
              options
            }
                  </select>
                </div>
              </div>
            </div>
           
            <div class="row third">
              <div class="input-field">
                <div class="result-count">
                  <span>108 </span>résultats</div>
                <div class="group-btn">
                  <button class="btn-delete" id="delete">RESET</button>
                  <button class="btn-search">Rechercher</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    <div class="table-responsive">
      
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-10"></div>
                    <div class="col-sm-2">
<a href="/addsalles"style={{ marginLeft:'100px',fontSize:'50px',color:'#85D236'}}><AddIcon style={{ fontSize:'50px'}}/></a>
                    </div>
                </div>
            </div>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nom</th>
                       
                        <th>Gouvernement</th>
                        <th>Adresse</th>
                        
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John Doe</td>
                        <td>Administration</td>
                        <td>(171) 555-2222</td>
                        <td>(171) 555-2222</td>
                        
                        <td>
                           
                            <a href="/modifsalles"class="edit" title="Edit" data-toggle="tooltip"><EditIcon/></a>
                            <a class="delete" title="Delete" data-toggle="tooltip"><DeleteIcon/></a>
                        </td>
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
