import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from "./components/Nav/Navbar";
import Contact from './components/pages/Contacts';
import Home from "./components/pages/Home"
import Login from './components/pages/Login';
import Services from './components/pages/Services';

import styled from "styled-components";
import './Global.css'

const Div = styled.div`
  background: red;
`

function App() {
  return (
    
    <BrowserRouter>
    <div>
    <Navbar/>
      <Switch>
        <Route path="/home" component={Home} exact />
        <Route path="/services" component={Services} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/login" component={Login} exact />
      </Switch>
      </div>
    </BrowserRouter>
 
  );
}

export default App;
