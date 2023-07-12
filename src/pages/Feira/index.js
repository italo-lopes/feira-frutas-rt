import React, {useContext, useEffect } from 'react';

import { Container, Header, Lista } from "./styles";
import feira from "./feira.json";
import Produto from "components/Produto";
import NavBar from "./NavBar";
import { useNavigate } from 'react-router-dom';
import { UsuarioContext } from "../../common/Usuario";
import { CarrinhoContext } from "../../common/Carrinho";


//{nome,numero} prps pelo context da aplicação
function Feira() {
  const {carrinho} = useContext(CarrinhoContext)
  const {nome,numero} = useContext(UsuarioContext)
  // const [saldo,setSaldo] = useState(numero)
  console.log(feira)
  console.log(nome)
  // antes de redenrizar fazer tal coisa
  const navegar = useNavigate();
  useEffect(()=>{
    if(nome === ''){
      navegar('/')
    }
  },[nome,navegar]);


  useEffect(()=>{
        console.log("===========")
        console.log(carrinho)
        console.log("===========")
},[carrinho])
  //Ao adicionar 
  // eslint-disable-next-lin(e) antes do navigate('/outra-rota');,
  // o linter ignorará o aviso específico para aquela linha em particular, 
  // permitindo que você use navigate sem incluí-lo como dependência.



  //const [saldo,setSaldo] = useState(numero)

  // const recebeValor = (valor,verifivar)=>{

  //   verifivar
  //       ?  valor = saldo + valor
  //       :  valor = saldo - valor
       
  //       setSaldo(parseFloat(valor.toFixed(2)))
  // };

  

  return (  
    <Container> 
      <NavBar />
      <Header>
        <div>
          <h2> Olá! {nome}</h2>
          <h3> Saldo: R${numero}</h3>
        </div>
        <p>Encontre os melhores produtos orgânicos!</p>
      </Header>
      <Lista>
        <h2>Produtos:</h2>
        {feira.map((produto) => (
          <Produto {...produto} key={produto.id} saldo={produto.valor}   />
        ))}
      </Lista>
    </Container>
  );
}

export default Feira;
