import React from 'react';
import { Switch, Route, Redirect, routerRedux } from 'dva/router'
import dynamic from 'dva/dynamic'
import App from './routes/App'

const { ConnectedRouter } = routerRedux

const Routers = function ({ history, app }) {
  const routes = [
    {
      path: '/',
      component: () => import('./routes/Home/')
    }, {
      path: '/photos',
      component: () => import('./routes/Photos/')
    }, {
      path: '/letters',
      component: () => import('./routes/Letters/')
    }, {
      path: '/letters/:tag',
      component: () => import('./routes/Letters/detail')
    }, {
      path: '/journey',
      component: () => import('./routes/Journey/')
    }
  ]

  return (
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          {
            routes.map(({ path, ...dynamics }, key) => (
              <Route key={key}
                exact
                path={path}
                component={dynamic({
                  app,
                  ...dynamics,
                })}
              />
            ))
          }
        </Switch>
      </App>
    </ConnectedRouter>
  )
}

export default Routers;

