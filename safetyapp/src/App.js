import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import ReportDetails from './components/ReportDetails/ReportDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import Creator from './components/CreatorOrTag/CreatorOrTag';
import Accidents from './screens/Accidents/Accidents';
import Precaution from './screens/Precaution/Precaution';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Switch>

        <Route path='/accidents' component={Accidents} />
          <Route path='/precaution' component={ Precaution } />        
 

          <Route path="/" exact component={() => <Redirect to="/reports" />} />
          <Route path="/reports" exact component={Home} />
          <Route path="/reports/search" exact component={Home} />
          <Route path="/reports/:id" exact component={ReportDetails} />
          <Route path={['/creators/:name', '/memories/:name']} component={Creator} />
          <Route path="/auth" exact component={Auth} />

        </Switch>
      </Container>
    </BrowserRouter>
  );
};


export default App;
