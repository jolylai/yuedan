import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Envelope from './routes/Envelope/';
import Login from './routes/Login';
import IndexForm from './routes/Form/index';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Login} />
      <Route path="/envelope" component={Envelope} />
      <Route path="/indexform" component={IndexForm} />
      <Route path="/test" component={IndexPage} />
    </Router>
  );
}

export default RouterConfig;
