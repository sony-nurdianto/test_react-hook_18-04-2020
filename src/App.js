import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Article from './components/pages/Article'
import Detail from './components/pages/Detail'
import Nav from './components/Nav'
import Home from './components/Home'

function App() {
  return (
    <Router>
        <Nav/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Article" component={Article}/>
        <Route exact path="/Article/:id" component={Detail}/>
      </Switch>
    </Router>
  );
}

export default App;
