import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Footer from '../components/Footer';
import Main from '../pages/main';
import React from 'react';

const Routes = () => (
  <BrowserRouter>
    <>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>

      <Footer />
    </>
  </BrowserRouter>
);

export default Routes;
