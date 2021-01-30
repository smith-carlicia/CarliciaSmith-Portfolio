import Nav from './components/Nav/Nav'
import Home from './pages/Home/Home';
import About from './pages/About/About'
import Portfolio from './pages/Portfolio/portfolio'
import Contact from './pages/Contact/contact'
import React from "react";
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "shards-ui/dist/css/shards.min.css";
import './App.css';

function App() {
  return (
    <>
      <Home />
      <BrowserRouter>
      <>
        <Nav/>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        </Switch>
      </>
    </BrowserRouter>
    </>
  );
}

export default App;
