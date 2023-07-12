import React from 'react';
import { Button, InputLabel } from  '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useState } from 'react';
import { Container, Voltar, TotalContainer, PagamentoContainer} from './styles';
import { useNavigate, Link } from 'react-router-dom';
import  Produto  from '../../components/Produto';
import {usePagamentoContext } from '../../common/Pagamento'
// import { useContext } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useMemo } from 'react';

const Carrinho = ()=> {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  // receber o contex de carrinho q vem todos os valores de value provider 
  // ou posso receber o context hook customizado 
  // pegando de provider graças a que ta dentro de CarrinhoProvider
  //const {pagamentoValor} = useContext(PagamentoContext);
  
  const {carrinho,
    numero,
    mudarPagamento,
    tipoApagar,
    pagamentoValor,
    tipoPagamento,
    quantidadeCarrinho,
    efetuarCompra
    //totalVal
  } = usePagamentoContext()  
  console.log(tipoPagamento)
  //const {carrinho} = useContext(CarrinhoContext)
  //carrinho.reduce((contador,itens)=> contador + (itens.quantidade * itens.valor, 0))
    //     setPagamentoValor(novaQuantidade)

    console.table(quantidadeCarrinho)
  
  const nav = useNavigate('-1')
  console.log(nav)

   const saltoDoCarrinho = parseFloat(pagamentoValor);

  const valorSobrando = useMemo(()=> numero - saltoDoCarrinho,[numero,saltoDoCarrinho])
//so vai rederizar quando numero,saltoDoCarrinho mudar  ai vai fazer a conta

  
console.table(carrinho)
  
  return (
    <Container>
      <Link  to={'/feira'} >  
      <Voltar/>
      </Link>
      <h2>
          Carrinho  no  {tipoApagar.nome}
      </h2>
       {carrinho.map(item => (
                  <Produto 
                  {...item}
                  key={item.id}
                  />))} 
      <PagamentoContainer>
        <InputLabel  id="demo-simple-select-label" > Forma de Pagamento </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={tipoApagar.id}
          label="Forma de Pagamento"
          onChange={(e)=>mudarPagamento(e.target.value)}
        >
          {tipoPagamento.map( item => {
             return (<MenuItem  key={item.id} value={item.id}>{item.nome} </MenuItem>)}
          )}
        </Select>

      </PagamentoContainer>
      <TotalContainer>
          <div>
            <h2>Total no Carrinho:   </h2>
            <span>R$ { parseFloat(saltoDoCarrinho).toFixed(2)} </span>
          </div>
          <div>
            <h2> Saldo:  </h2>
            <span> R$ { !numero? 0 : numero} </span>
          </div>  
          <div>
            <h2> Saldo Total: </h2>
            <span> R$ { valorSobrando>=0 ? valorSobrando.toFixed(2) : "insuficiente"}</span>
          </div>
        </TotalContainer>
      <Button
        onClick={() => {
          setOpenSnackbar(true);
          efetuarCompra(valorSobrando.toFixed(2))
        }}  
        color="primary"
        variant="contained"
        disabled = {valorSobrando < 0 || carrinho.length === 0}
      >
         Comprar
       </Button>
        <Snackbar
          anchorOrigin={
            { 
              vertical: 'top',
              horizontal: 'right'
            }
          }
          open={openSnackbar}
        >
           <MuiAlert
            onClose={() => setOpenSnackbar(false)}
            severity="success"
          >
            Compra feita com sucesso!
          </MuiAlert>
        </Snackbar>
    </Container>
  )
}

export default Carrinho;