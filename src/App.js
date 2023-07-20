import React, { createContext, useEffect, useState } from 'react';
import MainNav from './components/MainNav';
import Container  from 'react-bootstrap/Container';
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import styles from './App.module.css';
import { Route, Switch} from "react-router-dom";
import "./api/axiosDefaults";
import axios from "axios";

export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

function App() {

  const [currentUser, setCurrentUser] = useState(null);

  const handleMount = async () => {
    try {
      const { data } = await axios.get("dj-rest-auth/user/");
      setCurrentUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleMount();
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <SetCurrentUserContext.Provider value={setCurrentUser}>
    <div className={styles.App}>
      <MainNav/>
      <Container className={styles.Main} fluid>
        <Switch>
          <Route exact path='/' render={() =>
            <h1>Testing</h1>
          } />
          <Route exact path='/signin' render={() =><SignInForm/>} />
          <Route exact path='/signup' render={() =><SignUpForm/>} />
          <Route render={() =>
            <h1>Whoops Looks You're Lost!</h1>
          } />
        </Switch>
      </Container>
</div>
    </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;