import React from "react";
import { Container } from "./styles";
import { memo } from "react";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
// import { useContext } from "react";
// import { CarrinhoContext } from "../../common/Carrinho";
import { useCarrinhoContext} from "../../common/Carrinho";

function Produto({ id, nome, foto, valor }) {
  //const { carrinho, setCarrinho } = useContext(CarrinhoContext);
  // virou hook customizado chamado uma funçao q retorna os valores desses estados e chamada de função
  //const [quantidade, setQuantidade] = useState(0);
 
  const {somar,carrinho,subtrair} = useCarrinhoContext()
  // somar e subtrair vai pra Context de carrinho pq é um context da aplicacao
  const  carrinhoNovo = carrinho.find(item=>item.id === id );
  console.log(carrinhoNovo);

  return (
    <Container>
      <div>
        <h3>{carrinhoNovo? carrinhoNovo.quantidade : 0 }</h3> 
        <img src={`/assets/${foto}.png`} alt={`foto de ${nome}`} />
        <p>
          {nome} - R$ {valor?.toFixed(2)} <span>Kg</span>
        </p>
      </div>  
      <div>
        <IconButton color="secondary" 
          onClick={()=>subtrair(id)}
            disabled={!carrinhoNovo}
          >
          <RemoveIcon />
        </IconButton>
         <h3>{carrinhoNovo?.quantidade || 0}</h3> 
        <IconButton 
        color="primary"
        onClick={() => somar({ id, nome, valor, foto })}>
          <AddIcon />
        </IconButton>
      </div>
    </Container>
  );
}

export default memo(Produto);

//{carrinhoNovo?.quantidade -> o ?. pergunta se é null ou se exite se sim continua se n para

// ?.

  /*
  const subtrair = () => {
    // if (quantidade !== 0) {
    //   mandarValor(valor, true);
    //   setQuantidade((quantidade) => quantidade - 1);

    //   // setCarrinho( anterior => ...anterior.slice(0,anterior.filter(item => item.id === id).length) )
    // }
  };
*/