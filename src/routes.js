import React from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { ThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
import Feira from './pages/Feira';
import Login from './pages/Login';
import Carrinho from './pages/Carrinho';

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

const App = () => {
    return ( 
        <BrowserRouter>
          <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <Routes>    
                     <Route exact path='/' element={<Login/>}/>  
                     <Route path="/feira" element={<Feira/>}/> 
                     <Route path={"/carrinho"} element={<Carrinho/>}/> 
                     <Route path='*' element={<h4>ERRO</h4>}/>  
            </Routes>
            </ThemeProvider>
        </StyledEngineProvider>
       </BrowserRouter>
     );
}
     
export default App;


