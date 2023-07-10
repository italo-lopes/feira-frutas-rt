import React from 'react';
import { Button } from "@mui/material";
import { Container, Titulo, InputContainer } from "./styles";
import { Input, InputLabel, InputAdornment } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { UsuarioContext } from "../../common/Usuario";


const Login = ({nome,setNome, setNumero , numero})=> {
  const navegar = useNavigate()
  // const aoAlterar =(e)=>{
  //   setNome(e.target.value)
  // }
  return (
    <Container>
      <UsuarioContext.Consumer>
      {({nome, setNome, numero, setNumero})=>(
      <>
      <Titulo>Insira o seu nome</Titulo>
      <InputContainer>
        <InputLabel>Nome</InputLabel>
        <Input type="text"  onChange={(e)=>setNome(e.target.value)}  />
      </InputContainer>
      
      <InputContainer>
        <InputLabel>
        Saldo
        </InputLabel>
        <Input
          placeholder='00'
          type="number"
          onChange={(e)=>setNumero(e.target.value)}
          startAdornment={<InputAdornment position="start">R$</InputAdornment>}

        />
      </InputContainer>
      
      <Button variant="contained" color="primary"
       onClick={()=>navegar('/feira')}
      >
        Avançar
      </Button>
      <Titulo> Seu nome atual é: {nome} </Titulo>
      <Titulo> Seu nome atual é: {numero} </Titulo>
      </>
      )	}

      </UsuarioContext.Consumer>
    </Container>
  );
}

export default Login;

// onClick vai empurrar a gente pra proxima pagina

// antigo history.push('/')