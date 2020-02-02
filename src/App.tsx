import React from 'react';
import { ThemeProvider } from 'styled-components'; // Used to inject the theme by a props

import light from './styles/themes/light';
import GlobalStyle from './styles/global';
import Header from './components/Header';

const App = () => {
  return (
    <ThemeProvider theme={light}>
      <div className="App">
        <GlobalStyle />
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
