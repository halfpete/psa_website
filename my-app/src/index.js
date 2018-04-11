import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './Home';
import Work from './Work';
import About from './About';
import Contact from './Contact';
import SurfaceDesign from './SurfaceDesign';
import CollectionBook from './CollectionBook';
import Nikes from './Nikes';
import Shirts from './Shirts';
import PrintMaking from './PrintMaking';
import Illustration from './Illustration';
import Other from './Other';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter basename="/psa_website">
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/home" component={Home} />
      <Route path="/work" component={Work} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/surface_design" component={SurfaceDesign} />
      <Route path="/collection_book" component={CollectionBook} />
      <Route path="/shirts" component={Shirts} />
      <Route path="/nikes" component={Nikes} />
      <Route path="/print_making" component={PrintMaking} />
      <Route path="/illustration" component={Illustration} />
      <Route path="/other" component={Other} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
