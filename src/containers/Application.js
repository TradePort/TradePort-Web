import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SocialLinks from '../components/SocialLink';
import Header from '../components/Header';
import Home from './Home';
import About from './About';


const Application = () => (
  <BrowserRouter>
    <div>
      <div className="wrapper">
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </div>
      <div className="fixed-plugin">
        <SocialLinks />
      </div>
    </div>
  </BrowserRouter>
);

export default Application;
