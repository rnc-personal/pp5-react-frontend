import React from 'react';
import MainNav from './components/MainNav';
import Container  from 'react-bootstrap/Container';
import styles from './App.module.css';
import { Route, Switch} from "react-router-dom";



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
          <Route exact path='/signup' render={() =>
            <h1>Signup</h1>
          } />
        </Switch>
      </Container>
</div>
  );
}

export default App;