import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Auth from '../auth/Auth';
import Layout from '../layout/Layout';
import { useAuth } from '../providers/useAuth';
import {routes} from './list'

const Routes:React.FC = () => {
  const {user} = useAuth()
  return (
    <Router>
      <Switch>
        {routes.map((route) => {
          if(route.auth && !user) {
            <Auth/>
          }
          return(
            <Route 
              path={route.path} 
              exact={route.exact}
              key={`route ${route.path}`}
            >
              <Layout>
                {route.auth && !user ? <Auth/> : <route.component/>}
              </Layout>
            </Route>
          )
        })}
      </Switch>
    </Router>
  )
}

export default Routes