import React, { createContext, useEffect, useState } from 'react';
import MainNav from './components/MainNav';
import Container from 'react-bootstrap/Container';
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import CreateBuildForm from './pages/builds/CreateBuildForm';
import styles from './App.module.css';
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import axios from "axios";

function App() {

  return (
    <div className={styles.App}>
      <MainNav />
      <Container className={styles.Main} fluid>
        <Switch>
          <Route exact path='/' render={() =>
            <h1>Testing</h1>
          } />
          <Route exact path='/signin' render={() => <SignInForm />} />
          <Route exact path='/signup' render={() => <SignUpForm />} />
          <Route exact path="/posts/create" render={() => <CreateBuildForm />} />
          <Route render={() =>
            <h1>Whoops Looks You're Lost!</h1>
          } />
        </Switch>
      </Container>
    </div>
  );
}

export default App;