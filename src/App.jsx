import React, { useState } from 'react';
import Container from './components/Container';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  return (
    <div className={isDarkTheme ? 'App dark-theme' : 'App light-theme'}>
      <div>
        <Header isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
        <Container isDarkTheme={isDarkTheme}/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
