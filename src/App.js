import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import ResetCSS from './styles/global/ResetCSS';
import GlobalStyle from './styles/global/GlobalStyle';
import { UserProvider } from './context/UserContext';

const App = () => {
  return (  
    <UserProvider>
      <Router>
        <ResetCSS />
        <GlobalStyle />
        <Switch>
          <Route exact path='/signUp' component={SignUp} />
          <Route exact path='/' component={SignIn} />
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;