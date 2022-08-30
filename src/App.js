import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter ,
  Routes,
  Route,
  Link
} from "react-router-dom";

import ClubsPage from './components/Lists/ClubsPage';
import Addclub from './components/AddPages/Addclub';
import Modifclub from './components/UpdatePages/Modifclub';
import SideNav from './components/Sidenav/Sidenav';
import UsersPage from './components/Users/users';
import Dashboard from './components/Dashboard/Dashbord';
import AddSalle from './components/AddPages/AddSalle';
import SallePage from './components/Lists/SallesPage';
import Modifsalle from './components/UpdatePages/Modifsalles';
import Ajoutnews from './components/AddPages/Ajoutnews';
import AjoutEvents from './components/AddPages/AjoutEvents';
import EventsPage from './components/Lists/EventsPage';
import NewsPage from './components/Lists/NewsPage';
import ModifEvents from './components/UpdatePages/ModifEvents';
import ModifNews from './components/UpdatePages/ModifNews';

function App() {
  return (
    <BrowserRouter >
    
    <SideNav/>
    {/* Route components would be visible only at their route */}
    <Routes>
   
    <Route path="/clubs" element={<ClubsPage/>} exact />
    <Route path="/salles" element={<SallePage/>} exact />
    <Route path="/addclub" element={<Addclub/>} exact />
    <Route path="/modifclubs/:id" element={<Modifclub/>} exact />
    <Route path="/modifsalles" element={<Modifsalle/>} exact />
    <Route path="/addsalles" element={<AddSalle/>} exact />
    <Route path="/news" element={<NewsPage/>} exact />
    <Route path="/events" element={<EventsPage/>} exact />
    <Route path="/users" element={<UsersPage/>} exact />
    <Route path="/" element={<Dashboard/>} exact />
    <Route path="/addnews" element={<Ajoutnews/>} exact />
    <Route path="/addevents" element={<AjoutEvents/>} exact />
    <Route path="/modifevent/:id" element={<ModifEvents/>} exact />
    <Route path="/modifnews/:id" element={<ModifNews/>} exact />
    </Routes>
   
 
    </BrowserRouter>
  );
}

export default App;