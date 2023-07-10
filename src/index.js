import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './routes';
import { ThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2A9F85'
    },
    secondary: {
      main: '#FF7070'
    },
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StyledEngineProvider injectFirst>
  <ThemeProvider theme={theme}>
    <App/>
    </ThemeProvider>
  </StyledEngineProvider>
);