import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components'; // Used to inject the theme by a props

import light from './styles/themes/light';
import dark from './styles/themes/dark';
import GlobalStyle from './styles/global';
import Header from './components/Header';

const App = () => {
  const [theme, setTheme] = useState(light); // Set the default theme to light

  // Function that change the themes
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <h1>Hello World</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
