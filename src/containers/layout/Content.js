import React, { Suspense } from 'react'
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
// import { CContainer, CFade } from '@coreui/react'

import {Container, Row, Col,Navbar, Nav, NavDropdown} from 'react-bootstrap';

// routes config
import routes from 'Routes';
  
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const Content = () => {
  return (
    <main className="c-main">
      <div>
        <div >
            <div>
                <Suspense fallback={loading}>
                    <Switch>
                        {routes.map((route, idx) => {
                        return route.component && (
                            <Route
                            key={idx}
                            path={route.path}
                            exact={route.exact}
                            name={route.name}
                            render={props => (
                                <route.component {...props} />
                            )} />
                        )
                        })}
                        <Redirect from="/" to="/" />
                    </Switch>
                </Suspense>
            </div>
        </div>
      </div>
    </main>
  )
}

export default React.memo(Content)
