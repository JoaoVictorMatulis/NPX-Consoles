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
            // let r = await axios.get('http://191.235.113.110:5000/normais');
            let r = await axios.get('http://191.235.113.110:5000/normais');
            setProdutos(r.data || []);
        } catch(error){
            console.error('Erro ao buscar produtos:', error);
            setProdutos([]);
        }
    }

    async function buscarPrincipais() {
        try{
            // let r = await axios.get('http://191.235.113.110:5000/normais');
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
                    <Link class="a-Produtos" key={produto.id} to="">
                        <img src={"http://191.235.113.110:5000/"+produto.imagem} alt={produto.nome} />
                        <h1>{produto.nome}</h1>
                        <p>{`10x R$${(produto.preco / 10).toFixed(2)} sem juros`}</p>
                        <h2>{`R$ ${produto.preco}`}</h2>
                    </Link>
                ))}
                {/* <Link class="a-Produtos" to="/ProdutoEspcNintendo" target="produtos">
                    <img src="/assets/images/NINTENDO_SWITCH_OLED.png" alt="Nintendo Switch OLED" />
                    <h1>Nintendo Switch OLED</h1>
                    <p>10x R$219,90 sem juros</p>
                    <h2>R$ 2199,00</h2>
                </Link>
                <Link class="a-Produtos" to="/ProdutoEspcPs4" target="produtos">
                    <img src="/assets/images/PLAYSTATION_5.png" alt="PlayStation 5" />
                    <h1>PlayStation 5</h1>
                    <p>10x R$420,00 sem juros</p>
                    <h2>R$ 4200,00</h2>
                </Link>
                <Link class="a-Produtos" to="/ProdutoEspcXbox" target="produtos">
                    <img src="/assets/images/XBOX_SERIES_X.png" alt="Xbox Series X" />
                    <h1>Xbox Series X</h1>
                    <p>10x R$429,50 sem juros</p>
                    <h2>R$ 4295,00</h2>
                </Link> */}
            </div>
            <div id="produtos">
                {produtos.map((produto) => (
                    <Link class="a-Produtos" key={produto.id} to="">
                        <img src={"http://191.235.113.110:5000/"+produto.imagem} alt={produto.nome} />
                        <h1>{produto.nome}</h1>
                        <p>{`10x R$${(produto.preco / 10).toFixed(2)} sem juros`}</p>
                        <h2>{`R$ ${produto.preco}`}</h2>
                    </Link>
                ))}
                {/* <Link class="a-Produtos" to="">
                    <img src="/assets/images/NINTENDO_SWITCH.png" alt="Switch"/>
                    <h1>Switch</h1>
                    <p>10x R$200,00 sem juros</p>
                    <h2>R$ 2000,00</h2>
                </Link>
                <Link class="a-Produtos" to="">
                    <img src="/assets/images/WII_U.png" alt="WII U"/>
                    <h1>WII U</h1>
                    <p>10x R$219,90 sem juros</p>
                    <h2>R$ 2199,00</h2>
                </Link>
                <Link class="a-Produtos" to="">
                    <img src="/assets/images/NINTENDO_3DS_XL.png" alt="Nintendo 3DS XL"/>
                    <h1>Nintendo 3DS XL</h1>
                    <p>10x R$219,90 sem juros</p>
                    <h2>R$ 2199,00</h2>
                </Link>
                <Link class="a-Produtos" to="">
                    <img src="/assets/images/PLAYSTATION_4.png" alt="PLAYSTATION 4"/>
                    <h1>PlayStation 4</h1>
                    <p>10x R$230,00 sem juros</p>
                    <h2>R$ 2300,00</h2>
                </Link>
                <Link class="a-Produtos" to="">
                    <img src="/assets/images/NINTENDO_2DS.png" alt="NINTENDO_2DS"/>
                    <h1>Nintendo 2DS</h1>
                    <p>10x R$90,00 sem juros</p>
                    <h2>R$ 900,00</h2>
                </Link>
                <Link class="a-Produtos" to="">
                    <img src="/assets/images/XBOX_ONE_S.png" alt="XBOX_ONE_S"/>
                    <h1>Xbox Series S</h1>
                    <p>10x R$240,00 sem juros</p>
                    <h2>R$ 2400,00</h2>
                </Link>
                <Link class="a-Produtos" to="">
                    <img src="/assets/images/XBOX_ONE.png" alt="XBOX_ONE"/>
                    <h1>Xbox One</h1>
                    <p>10x R$110,00 sem juros</p>
                    <h2>R$ 1100,00</h2>
                </Link>
                <Link class="a-Produtos" to="">
                    <img src="/assets/images/XBOX_SERIES_S.png" alt="XBOX_SERIES_S"/>
                    <h1>Xbox Series S</h1>
                    <p>10x R$240,00 sem juros</p>
                    <h2>R$ 2400,00</h2>
                </Link> */}
            </div>
        </div>
    )
}