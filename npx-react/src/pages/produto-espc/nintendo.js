import { useEffect, useState } from 'react';
import './index.scss';
import { Link } from "react-router-dom";
import axios from 'axios';

export default function ProdutoEspc(){

    const [produtos, setProdutos] = useState([]);
    const [principais, setPrincipais] = useState([])

    useEffect(() => {
        buscarProdutos()
    }, [])

    async function buscarProdutos() {
        try{
            let r = await axios.get('http://191.235.113.110:5000/produto/');
            setProdutos(r.data || []);
        } catch(error){
            console.error('Erro ao buscar produtos:', error);
            setProdutos([]);
        }
    }

    return(
        <div id="prodEspc-Body">
            <form id="form-Edit" action="post">
                <input type="hidden" name="flag" value="editar"/>
                <Link to="/EditarProdutoNintendo"><input type="button" id="editar" class="botao" value="Editar"/></Link>
            </form>
            <div id="conteiner">
                <div id="div-ProdEspc">
                    <img src="/assets/images/NINTENDO_SWITCH_OLED.png" alt="nintendo switch oled"/>
                    <p>Descrição</p>
                    <p>
                    Console Nintendo Switch modelo OLED: Joy-Cons e 
                    Dock na cor branca;
                    Tela OLED de 7";
                    Memória interna de 64GB;
                    Dock com entrada LAN para internet a cabo.
                    PRODUTO IMPORTADO. A versão poderá variar 
                    de acordo com o estoque disponível no dia da 
                    aprovação da compra. Consulte seu vendedor. 
                    IMPORTANTE: Produto de região livre, portanto, 
                    independente da versão do console, 
                    poderão ser utilizados jogos físicos e digitais 
                    de qualquer região assim como contas 
                    online de qualquer país. A configuração do console 
                    poderá ser feita em diversos idiomas, 
                    incluindo português brasileiro.</p>
                </div>
                <div class = "desc">
                    <h1>Nintendo Switch OLED</h1>
                    <h3>10x R$219.90 sem juros</h3>
                    <h2>R$ 2199.00</h2>
                    <button class="botao">Comprar</button>
                    <button class="botao">Adicionar ao Carrinho</button>
                </div>
            </div>
        </div>
    )
}