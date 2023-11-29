import { useEffect, useState } from 'react';
import './index.scss';
import { Link } from "react-router-dom";
import axios from 'axios';

export default function Produtos() {
    const [produtos, setProdutos] = useState([]);
    const [principais, setPrincipais] = useState([])

    useEffect(() => {
        buscarProdutos()
        buscarPrincipais()
    }, [])

    async function buscarProdutos() {
        try{
            let r = await axios.get('http://191.235.113.110:5000/normais');
            setProdutos(r.data || []);
        } catch(error){
            console.error('Erro ao buscar produtos:', error);
            setProdutos([]);
        }
    }

    async function buscarPrincipais() {
        try{
            let r = await axios.get('http://191.235.113.110:5000/principais');
            setPrincipais(r.data || []);
        } catch(error){
            console.error('Erro ao buscar produtos:', error);
            setPrincipais([]);
        }
    }

    return (
        <div class="body-Produtos">
            <div id="produtos-principais">
                {principais.map((produto) => (
                    <Link class="a-Produtos" key={produto.id} to={{ pathname: `/ProdutoEspc/${produto.id}`, state: { produtoId: produto.id } }}>
                        <img src={"http://191.235.113.110:5000/"+produto.imagem} alt={produto.nome} />
                        <h1>{produto.nome}</h1>
                        <p>{`10x R$${(produto.preco / 10).toFixed(2)} sem juros`}</p>
                        <h2>{`R$ ${produto.preco}`}</h2>
                    </Link>
                ))}
            </div>
            <div id="produtos">
                {produtos.map((produto) => (
                    <Link class="a-Produtos" key={produto.id} to={{ pathname: `/ProdutoEspc/${produto.id}`, state: { produtoId: produto.id } }}>
                        <img src={"http://191.235.113.110:5000/"+produto.imagem} alt={produto.nome} />
                        <h1>{produto.nome}</h1>
                        <p>{`10x R$${(produto.preco / 10).toFixed(2)} sem juros`}</p>
                        <h2>{`R$ ${produto.preco}`}</h2>
                    </Link>
                ))}
            </div>
        </div>
    )
}