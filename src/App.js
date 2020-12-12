import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoutes from './routes/PrivateRoutes'
import PublicRoutes from './routes/PublicRoutes'


import Balanza from './balanza/containers/BalanceContainer'
import Login from './loginUser/containers/LoginContainer'

//state redux global
import { Provider } from 'react-redux'
import store from './redux/store'




function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <PublicRoutes exact path="/login" component={Login} />
          <PrivateRoutes path="/balanza" component={Balanza} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
