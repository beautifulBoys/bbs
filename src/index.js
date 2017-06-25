import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageDetail from './views/page_detail';
import Main from './views/main';
import Menu from './views/page_menu';
import Member from './views/member';
import Header from './components/header';
import Footer from './components/footer';

// Render the main component into the dom
ReactDOM.render((
  <Router>
    <div>
      <Header/>
      <Switch>
        <Route path="/main" component={Main}/>
        <Route path="/menu" component={Menu}/>
        <Route path="/member" component={Member}/>
        <Route path="/" component={PageDetail}/>
      </Switch>
      <Footer/>
    </div>
  </Router>
), document.getElementById('app'));
