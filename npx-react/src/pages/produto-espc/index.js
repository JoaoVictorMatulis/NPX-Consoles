import { useEffect, useState } from 'react';
import './index.scss';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

export default function ProdutoEspc(){

    const [produto, setProduto] = useState([]);
    const params = useParams();

    useEffect(() => {
        buscarProduto()
    }, [])

    async function buscarProduto() {
        try{
            let id = params.id
            let r = await axios.get("http://191.235.113.110:5000/produtoId/"+id);
            setProduto(r.data || []);
        } catch(error){
            console.error('Erro ao buscar Produto:', error);
            setProduto([]);
        }
    }

    return(
        <div id="prodEspc-Body">
            <div id="div-editar">
                {produto.map((produto) => (
                <div id="div-form-edit">
                    <form id="form-Edit" action="post">
                        <Link key={produto.id} to={{ pathname: `/EditarProduto/${produto.id}`, state: { produtoId: produto.id } }} id="editar" class="botao">Editar</Link>
                    </form>
                </div>
                ))}
            </div>
            {produto.map((produto) => (
            <div id="conteiner">
                <div id="div-ProdEspc">
                    <img src={"http://191.235.113.110:5000/"+produto.imagem} alt={produto.nome} />
                    <p>Descrição</p>
                    <p id="descricao" >{produto.descricao}</p>
                </div>
                <div class = "desc">
                    <h1 id="nome-prod-espc">{produto.nome}</h1>
                    <p>{`10x R$${(produto.preco / 10).toFixed(2)} sem juros`}</p>
                    <h2>{`R$ ${produto.preco}`}</h2>
                    <button class="botao">Comprar</button>
                    <button class="botao">Adicionar ao Carrinho</button>
                </div>
            </div>
            ))}
        </div>
    )
}