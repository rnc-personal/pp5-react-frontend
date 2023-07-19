import React from 'react';
import MainNav from './components/MainNav';
import Hero from './components/Hero';
import Container  from 'react-bootstrap/Container';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <MainNav>
        </MainNav>
 
      <Container className={styles.Main} fluid>
        <Hero className={styles.App}/>
      </Container>
    </div>
  );
}

export default App;