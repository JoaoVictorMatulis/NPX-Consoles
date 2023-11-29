import { useEffect, useState } from 'react';
import './index.scss';
import { Link } from "react-router-dom";
import axios from 'axios';

export default function Produtos(){
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        buscarProdutos()
    }, [])

    async function buscarProdutos() {
        try{
            let r = await axios.get('http://localhost:5000/produtos/xbox');
            setProdutos(r.data || []);
        } catch(error){
            console.error('Erro ao buscar produtos:', error);
            setProdutos([]);
        }
    }
    
    
    return(
        <div class="body-Produtos">
            <div id="produtos">
                {produtos.map((produto) => (
                    <Link class="a-Produtos" key={produto.id} to={{ pathname: `/ProdutoEspc/${produto.id}`, state: { produtoId: produto.id } }}>
                        <img src={"http://localhost:5000/"+produto.imagem} alt={produto.nome} />
                        <h1>{produto.nome}</h1>
                        <p>{`10x R$${(produto.preco / 10).toFixed(2)} sem juros`}</p>
                        <h2>{`R$ ${produto.preco}`}</h2>
                    </Link>
                ))}
            </div>
        </div>
    )
}