// import { UsuarioContext } from "./Usuario";
// import {useContext} from 'react';
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { UsuarioContext } from "./Usuario";


export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);
  const [quantidadeCarrinho, setQuantidadeCarrinho] = useState('');
  const [totalVal,setTotalValor] = useState(0);

  return (
    <CarrinhoContext.Provider value={{ 
              carrinho, 
              setCarrinho,
              quantidadeCarrinho,
              totalVal,
              setTotalValor,
              setQuantidadeCarrinho}}>
      {children}
    </CarrinhoContext.Provider>
  );
};

// so posso usar tando o hook customizado e hook useContext
// se eu tiver dentro do contexto children  nele que todo o context vai funcionar

// criar hook customizado que tira a responsabilidade de produto
// construido o hook carrinho
export const useCarrinhoContext = () => {
  // pega os valores do contexto principal .Provider
  // e cria uma funçoes nesse novo contexto podendo chamar esse contexto

  //const [quantidade, setQuantidade] = useState(0);
  // tentar criar

  const { carrinho, 
    setCarrinho ,
    setQuantidadeCarrinho, 
    quantidadeCarrinho,
    totalVal,
    setTotalValor,
  } = useContext(CarrinhoContext);

   const {setNumero} = useContext(UsuarioContext)

  //const {tipoPagamento} = usePagamentoContext()
  // funcao no useContext

  const somar = (novoProduto) => {
    const temProduto = carrinho.some(
      (carrinho) => carrinho.id === novoProduto.id
    );
    if (!temProduto) {
      novoProduto.quantidade = 1;
      setCarrinho((anterior) => [...anterior, novoProduto]);
    } else {
      setCarrinho(mudarQunatidade(novoProduto.id,1));
    }
  };


  // extrair com uma logica de +(-1)  +(+) pra determinar se tira ou coloca quantidade
  function mudarQunatidade(id,quantidade){
    return(carrinho.map((anterior) => { 
        if (anterior.id === id) {
        anterior.quantidade = anterior.quantidade + quantidade;
      }
      return anterior;
    }))
  }


  const subtrair = (id) => {
    // sempre tem que ver se tem item
    const produto = carrinho.find((carrinho) => carrinho.id === id);
    // saber se é ult pra tirar o item do carrinho oi se vai so diminuir a quantidade logica boa

    if (produto) {
      const eOUltimo = produto.quantidade === 1;
      if (eOUltimo) {
        // pego todos os item do carrinho menos o ultimo que quero remover
        return setCarrinho((carrinhoAnt) =>carrinhoAnt.filter((itemDoCarrinho) => itemDoCarrinho.id !== id));
      }
      return setCarrinho(mudarQunatidade(produto.id,-1));
    }
  };

  // consigo deixar toda  a parte logica 
  // precisa do estado que vai mudar de acordo com o carrinho
  useEffect(()=>{
    const {novaQuantidade, totalValor} = carrinho.reduce(
          (contador,itens)=>
        ({
                  novaQuantidade : contador.novaQuantidade + itens.quantidade,
                  totalValor : (itens.quantidade * itens.valor )+ contador.totalValor
      }) ,({novaQuantidade:0, totalValor:0}))
    
   // ,({novaQuantidade:0,totalValor:0})  parte que inicia o reduce
   // entao  contador agora é um obj com novaQuantidade:0, totalValor:0 contador: { nova e total}
     console.log(novaQuantidade)
    setQuantidadeCarrinho(novaQuantidade)
    setTotalValor(totalValor)
  },[carrinho,setQuantidadeCarrinho,setTotalValor])



  function efetuarCompra(valo3r){
    setCarrinho([])
    console.log("asdsas")
    setNumero(nummero => nummero - totalVal)

}

  return {  
    carrinho,
    setCarrinho,
    somar,
    subtrair,
    quantidadeCarrinho,
    totalVal,
    efetuarCompra
  };
};

// os valores sw contexto que ele fornece ele um usoContext com funçoes
