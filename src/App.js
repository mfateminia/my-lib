import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from './Nav/Nav';
import HeroImage from './HeroImage/HeroImage';
import Research from './Research/Research';
import FeaturedPapers from './FeaturedPapers/FeaturedPapers';
import People from './People/People';
import Publications from './Publications/Publications';
import Footer from './Footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="-app-wrapper container-fluid text-primary">
        <Nav />
        <Route path='/' exact component={HeroImage} />
          <Route path='/' exact render={()=>(<h1 id='research' className = '-app-title d-none d-md-block'>Research</h1>)} />
          <Route path='/' exact component={Research} />
          <Route path='/' exact render={()=>(<h1 className = '-app-title d-none d-md-block'>Featured Papers</h1>)} />
          <Route path='/' exact component={FeaturedPapers} />
          <Route path='/publications' exact component={Publications} />
          <Route path='/people' exact component={People} />
        <Footer />        
      </div>
    );
  }
}

export default App;
