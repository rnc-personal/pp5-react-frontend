import React from 'react';
import MainNav from './components/MainNav';
import Container  from 'react-bootstrap/Container';
import SignUpForm from './pages/auth/SignUpForm';
import styles from './App.module.css';
import { Route, Switch} from "react-router-dom";
import "./api/axiosDefaults";

function App() {
  return (
    <div className={styles.App}>
      <MainNav/>
      <Container className={styles.Main} fluid>
        <Switch>
          <Route exact path='/' render={() =>
            <h1>Testing</h1>
          } />
          <Route exact path='/signin' render={() =>
            <h1>Sign In</h1>
          } />
          <Route exact path='/signup' render={() =><SignUpForm/>} />
          <Route render={() =>
            <h1>Whoops Looks You're Lost!</h1>
          } />
        </Switch>
      </Container>
</div>
  );
}

export default App;