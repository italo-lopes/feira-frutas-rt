import React, { createContext, useContext,useEffect } from 'react';
import { UsuarioContext } from './Usuario';
import { useState } from 'react';
import {useCarrinhoContext} from './Carrinho'


export const PagamentoContext = createContext();

export const PagamentoProvider = ({children})=>{
    const [pagamentoValor, setPagamentoValor] = useState();
    const tipoPagamento =[{
        nome:'Boleto',
        juros: 1,
        id: 1
    },{
        nome:"Cartao de Credito",
        juros: 1.5,
        id:2
    },{
        nome:"Pix",
        juros: 1.3,
        id:3
    }
    ];
    const [tipoApagar, setTipoApagar] = useState(tipoPagamento[0]);
   return(
   <PagamentoContext.Provider value={{
    pagamentoValor,
    setPagamentoValor,
    tipoPagamento,
    tipoApagar,
    setTipoApagar
    }}>
            {children}
    </PagamentoContext.Provider>
   )

}
// criar hook custo pra manipular contex de pagamento valor a ser pago
// n uso nenhum set pro lado do componete so o context manipula ela 

export const usePagamentoContext = ()=>{
    const {pagamentoValor, 
            tipoPagamento,
           setPagamentoValor,
           setTipoApagar,
           tipoApagar,
           
        } = useContext(PagamentoContext);
    const {numero} = useContext(UsuarioContext)
    
    const {carrinho, quantidadeCarrinho,totalVal, efetuarCompra} = useCarrinhoContext()

    // useEffect(()=>{
    //     console.table(carrinho)
    //     const novaQuantidade = carrinho.reduce((contador,itens)=> (contador + (itens.quantidade * itens.valor)), 0)
    //     setPagamentoValor(novaQuantidade)
    //   },[carrinho,setPagamentoValor])
    



    useEffect(()=>{
        let recebe = totalVal * (tipoApagar.juros)
        setPagamentoValor(recebe)
        console.log(recebe)
      },[totalVal,tipoApagar,pagamentoValor,setPagamentoValor])

    const mudarPagamento = (valor)=>{
        console.log(valor)
        setTipoApagar(...tipoPagamento.filter(item=> item.id === valor))

    }

    return({
        quantidadeCarrinho,
        pagamentoValor,
        setPagamentoValor,
        numero,
        carrinho,
        mudarPagamento,
        tipoApagar,
        tipoPagamento,
        totalVal,
        efetuarCompra
    })
}