import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feira from "./pages/Feira";
import Login from "./pages/Login";
import Carrinho from "./pages/Carrinho";
import { UsuarioProvider } from "./common/Usuario";
import {CarrinhoProvider} from "./common/Carrinho";
import {PagamentoProvider} from "./common/Pagamento";


const App = () => {
//   const [nome, setNome] = useState("");
//   const [numero, setNumero] = useState("");
// tirando a responsabiilidade do estado ser controlado pelas rodas
  return (
    <BrowserRouter> 
    <UsuarioProvider>
        <CarrinhoProvider>

        <Routes> 

                <Route  path="/" element={<Login />}/>
        
                  
                    <Route path="/feira" element={

                    <Feira/>  

                    } /> 
                    
                    <Route path={"/carrinho"} element={
                      <PagamentoProvider>
                        <Carrinho/>
                      </PagamentoProvider>
                    } />
                  
          
                <Route path="*" element={<h4>ERRO</h4>} />
        </Routes> 

           </CarrinhoProvider>
        </UsuarioProvider>
    </BrowserRouter>
  );
};

export default App;


/* 
Explicação das vantagem de utilizar Context
- boas praticas 
aparece todos os carrinhos dinmica 
aparece de modo idependete de feira nao tem props apenas o contexto que é a interção
context é quando tem interação dinamica usuario e eventos (listar, salvar ,manter dados)






<Route path={"/carrinho"} element={<Carrinho/>} />

<Route path="*" element={<h4>ERRO</h4>} /> 
</CarrinhoProvider>

*/

//useSate roda uma vez no escopo da execução
        
          /* <Route exact path="/">
                <UsuarioContext.Provider value={{ nome, setNome, numero, setNumero }}>
                    <Login />
                </UsuarioContext.Provider>
          </Route> */
            
          
          /* 
        <Route path="/feira" element={
    
        <Feira nome={nome} numero={numero} />
        
        } /> */
