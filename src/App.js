import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MovieDetails from './components/MovieDetails/MovieDetails';
import PageNotFound from './components/PageNotFound/PageNotFound'
function App() {
  return (
    <div className="App">
      <Router>
        <Header>

        </Header>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/movie/:imdbID' component={MovieDetails} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
      <Footer>

      </Footer>
    </div>
  );
}

export default App;
