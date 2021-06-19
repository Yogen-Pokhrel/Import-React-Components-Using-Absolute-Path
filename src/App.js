import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';


// import Header from './containers/layout/Header';
const Layout = React.lazy(() => import('Containers/layout/Layout'));
const Page404 = React.lazy(() => import('Views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('Views/pages/page500/Page500'));

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

function App() {
  return (
    <div>
      <div className="backgroundImage"></div>
      <div className="backgroundDesign">
        <Router>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route path="/" name="Home" render={props => <Layout {...props}/>} />
            </Switch>
          </React.Suspense>
      </Router>
      </div>
    </div>
  );
}

export default App;
