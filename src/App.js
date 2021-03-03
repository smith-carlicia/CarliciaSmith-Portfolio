import Navigation from './components/Nav/Nav';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/portfolio';
import Contact from './pages/Contact/contact';
import Footer from './components/Footer/Footer';
import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <>
        <Navigation/>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        </Switch>
      </>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
