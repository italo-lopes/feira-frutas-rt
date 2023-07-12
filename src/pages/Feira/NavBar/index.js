import React from 'react';
import { Nav } from './styles';
import { ReactComponent as Logo } from 'assets/logo.svg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { useCarrinhoContext } from 'common/Carrinho';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const navegar = useNavigate()
  const {quantidadeCarrinho} = useCarrinhoContext()
  return (
    <Nav>
      <Logo />
      <IconButton
      disabled={quantidadeCarrinho === 0}
      onClick={()=> navegar('/carrinho')}
      >
       
        <Badge
          color="primary"
          badgeContent={quantidadeCarrinho}
        >
        <ShoppingCartIcon/>
        </Badge>
      </IconButton>
    </Nav>
  )
}