import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feira from "./pages/Feira";
import Login from "./pages/Login";
import Carrinho from "./pages/Carrinho";
import { UsuarioContext } from "./common/Usuario";

const App = () => {
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");

  return (
    <BrowserRouter>
      <Routes>

        
          <Route exact path="/" element={
                <UsuarioContext.Provider value={{ nome, setNome, numero, setNumero }}>
                <Login />
                </UsuarioContext.Provider>
          } />


        <Route path="/feira" element={<Feira nome={nome} numero={numero} />} />
        <Route path={"/carrinho"} element={<Carrinho />} />
        <Route path="*" element={<h4>ERRO</h4>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
