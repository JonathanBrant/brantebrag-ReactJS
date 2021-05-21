import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from "./components/Nav/Navbar";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Navbar} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
