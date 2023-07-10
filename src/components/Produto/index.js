import React, { useState } from "react";

import { Container } from "./styles";
import { memo } from "react";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function Produto({ nome, foto, valor,numero ,saldo,mandarValor}) {
  const [quantidade,setQuantidade] = useState(0)

  const somar = () =>{
    console.log(saldo)
      if(saldo >= valor){
      mandarValor(valor,false)
      setQuantidade(quantidade=>quantidade+1)
      }

  }
  const subtrair = () =>{
    if(quantidade !== 0){
    mandarValor(valor,true)
    setQuantidade(quantidade=>quantidade-1)
    }
}

  return (
    <Container>
      <div>
        <img src={`/assets/${foto}.png`} alt={`foto de ${nome}`} />
        <p>
          {nome} - R$ {valor?.toFixed(2)} <span>Kg</span>
        </p>
      </div>
      <div>
        <IconButton color="secondary" onClick={subtrair}>
          <RemoveIcon />
        </IconButton>
        <h3>{quantidade}</h3>
        <IconButton onClick={somar}>
          <AddIcon/>
        </IconButton>
      </div>
    </Container>
  );
}

export default memo(Produto);
