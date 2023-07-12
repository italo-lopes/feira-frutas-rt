import React from 'react';
import {  createContext } from 'react';
import { useState } from 'react';

export const UsuarioContext = createContext();  
//UsuarioContext.displayName="Usuario";

// tira a responsabilidade de route de controle de estado mantendo o padrao solid
// especifica a responsabilidade de usuario e a mudança de estado 
// com isso routes mantem sua responsibilidade de apenas na manutenção 
export const UsuarioProvider = ({children})=>{
    const [nome, setNome] = useState("");
    const [numero, setNumero] = useState("");
    // useSate atribuido valor na primeira execução
    return(
        <UsuarioContext.Provider value={{nome,setNome,numero,setNumero}}>
                {children}
        </UsuarioContext.Provider>
    )
}






/* React com class +context
class Component extends React.Component {

    render(){
        return(
            <></>
        )
    }
}

Component.contextType = UsuarioContext
*/