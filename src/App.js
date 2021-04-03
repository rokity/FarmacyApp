import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import HomePaziente from './pages/Paziente/HomePaziente';
import ListaMedicine from './pages/Paziente/ListaMedicine';
import LoginPaziente from './pages/Paziente/LoginPaziente';
import Medicina from './pages/Medicina';
import MessaggiPaziente from './pages/Paziente/MessaggiPaziente';
import ModificaProfilo from './pages/Paziente/ModificaProfiloPaziente';
import PromozioniFarmacia from './pages/Paziente/PromozioniFarmacia';
import LoginDottore from './pages/Dottore/LoginDottore'
import HomeDottore from './pages/Dottore/HomeDottore'
import RicetteSospese from './pages/Dottore/RicetteSospese'
import NuovoPazienteDottore from './pages/Dottore/NuovoPazienteDottore'
import NuovoDottore from './pages/Dottore/NuovoDottore'
import NuovoPaziente from './pages/Paziente/NuovoPaziente'
import ListaPazienti from './pages/Dottore/ListaPazienti'

export default function App() {
  return (
    <Router>
      <Switch>
       <Route path="/ModificaProfilo" component={ModificaProfilo}/>
        <Route path="/ListaMedicine" component={ListaMedicine}/>
        <Route path="/PromozioniFarmacia" component={PromozioniFarmacia}/>
        <Route path="/MessaggiPaziente" component={MessaggiPaziente}/>
        <Route path="/HomePaziente" component={HomePaziente} />
        <Route path="/Medicina" component={Medicina} />
        <Route path="/LoginPaziente" component={LoginPaziente} />
        <Route path="/LoginDottore" component={LoginDottore} />
        <Route path="/HomeDottore" component={HomeDottore} />
        <Route path="/RicetteSospese" component={RicetteSospese} />
        <Route path="/NuovoPazienteDottore" component={NuovoPazienteDottore} />
        <Route path="/NuovoPaziente" component={NuovoPaziente} />
        <Route path="/NuovoDottore" component={NuovoDottore} />
        <Route path="/ListaPazienti" component={ListaPazienti} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
