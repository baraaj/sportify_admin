import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter ,
  Routes,
  Route,
  Link
} from "react-router-dom";

import ClubsPage from './components/ClubsPage';
import Addclub from './components/Addclub';
import Modifclub from './components/Modifclub';
import SideNav from './components/Sidenav';
import UsersPage from './components/users';
import Dashboard from './components/Dashbord';
import AddSalle from './components/AddSalle';
import SallePage from './components/SallesPage';
import Modifsalle from './components/Modifsalles';
import Ajoutnews from './components/Ajoutnews';
import AjoutEvents from './components/AjoutEvents';

function App() {
  return (
    <BrowserRouter >
    
    <SideNav/>
    {/* Route components would be visible only at their route */}
    <Routes>
   
    <Route path="/clubs" element={<ClubsPage/>} exact />
    <Route path="/salles" element={<SallePage/>} exact />
    <Route path="/addclubs" element={<Addclub/>} exact />
    <Route path="/modifclubs" element={<Modifclub/>} exact />
    <Route path="/modifsalles" element={<Modifsalle/>} exact />
    <Route path="/addsalles" element={<AddSalle/>} exact />
    <Route path="/news" element={<Ajoutnews/>} exact />
    <Route path="/events" element={<AjoutEvents/>} exact />
    <Route path="/users" element={<UsersPage/>} exact />
    <Route path="/" element={<Dashboard/>} exact />
    </Routes>
   
 
    </BrowserRouter>
  );
}

export default App;