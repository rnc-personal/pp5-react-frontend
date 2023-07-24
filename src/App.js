import React, { createContext, useEffect, useState } from 'react';
import MainNav from './components/MainNav';
import Container from 'react-bootstrap/Container';
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import CreateBuildForm from './pages/builds/CreateBuildForm';
import BuildDetailPage from './pages/builds/BuildDetailPage';
import styles from './App.module.css';
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import axios from "axios";
import BuildsList from './pages/builds/BuildsList';
import { useCurrentUser } from './contexts/CurrentUserContext';

function App() {

  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

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
          <Route exact path="/builds/create" render={() => <CreateBuildForm />} />
          <Route exact path="/builds" render={() => <BuildsList/>} />
          <Route exact path="/builds/:id" render={() => <BuildDetailPage message="Nothing Found!"/>} />
          <Route exact path="/following" render={() => <BuildDetailPage message="Nothing Found!" filter={`creator__followed__creator__profile=${profile_id}&`}/>} />
          <Route render={() =>
            <h1>Whoops Looks You're Lost!</h1>
          } />
        </Switch>
      </Container>
    </div>
  );
}

export default App;