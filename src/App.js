import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import ResetCSS from './styles/global/ResetCSS';
import GlobalStyle from './styles/global/GlobalStyle';

const App = () => {
  return (  
    <Router>
      <ResetCSS />
      <GlobalStyle />
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;