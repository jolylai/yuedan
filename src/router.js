import React from 'react';
import { Router, Route } from 'dva/router';
// import IndexPage from './routes/IndexPage';
import Envelope from './routes/Envelope/';
import Login from './routes/Login';
import Home from './routes/Home/';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/envelope" component={Envelope} />
    </Router>
  );
}

export default RouterConfig;
