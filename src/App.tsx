import React from 'react';
import { ThemeProvider } from 'styled-components'; // Used to inject the theme by a props
import usePersistedState from './utils/usePersistedState'; 
// ^^ Function created on utils/ to help us to save on Local Storage

import light from './styles/themes/light';
import dark from './styles/themes/dark';
import GlobalStyle from './styles/global';
import Header from './components/Header';

const App = () => {
  const [theme, setTheme] = usePersistedState('theme', light); // Set the default theme to light

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
