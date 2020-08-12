import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import Photos from './components/Photos';
import PhotoInfo from './components/PhotoInfo';
import './index.css';

function App() {
  let pages = ['Cats','Dogs','Birds', 'Monkeys'];
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li id='home'><Link to={'/'}>Home</Link></li>

            {pages.map(
              (page, id) => <li key={id}><Link to={'/photos/'+page.toLowerCase()}>{page}</Link></li>
            )}

          </ul>
        </nav>

        <Switch>

            {pages.map(
              (page, id) => <Route key={id} path={'/photos/'+page.toLowerCase()}><Photos tag={page} /></Route>
            )}

            <Route path='/photo/:id' component={PhotoInfo} />

            <Route exact path='/'>
              <Home />
            </Route>

        </Switch>
      </Router>
    </div>
  );
}


export default App;