import React, { useEffect, useState } from 'react';

import { Container, Header, Lista } from "./styles";
import feira from "./feira.json";
import Produto from "components/Produto";
import NavBar from "./NavBar";
import { useNavigate } from 'react-router-dom';

function Feira({nome,numero}) {
  console.log(feira)
  console.log(nome)
  // antes de redenrizar fazer tal coisa
  const navegar = useNavigate();
  useEffect(()=>{
    if(nome === ''){
      navegar('/')
    }
  },[nome,navegar]);


  //Ao adicionar 
  // eslint-disable-next-lin(e) antes do navigate('/outra-rota');,
  // o linter ignorará o aviso específico para aquela linha em particular, 
  // permitindo que você use navigate sem incluí-lo como dependência.



  const [saldo,setSaldo] = useState(numero)

  const recebeValor = (valor,verifivar)=>{

    verifivar
        ?  valor = saldo + valor
        :  valor = saldo - valor
       
        setSaldo(parseFloat(valor.toFixed(2)))
  }
  

  return (  
    <Container> 
      <NavBar />
      <Header>
        <div>
          <h2> Olá! {nome}</h2>
          <h3> Saldo: R${saldo}</h3>
        </div>
        <p>Encontre os melhores produtos orgânicos!</p>
      </Header>
      <Lista>
        <h2>Produtos:</h2>
        {feira.map((produto) => (
          <Produto {...produto} key={produto.id} saldo={saldo} 
          mandarValor={recebeValor} />
        ))}
      </Lista>
    </Container>
  );
}

export default Feira;
