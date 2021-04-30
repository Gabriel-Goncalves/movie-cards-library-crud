import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import {
  MovieList,
  MovieDetails,
  NewMovie,
  EditMovie,
  NotFound,
} from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route exact path="/movies/new" component={NewMovie} />
        <Route exact path="/movies/:id/edit" component={EditMovie} />
        <Route exact path="/movies/:id" component={MovieDetails} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
