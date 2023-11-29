import './index.scss';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
    const [pesquisar, setPesquisar] = useState('');
    const [produtos, setProdutos] = useState([]);
    const [iframe, setIframe] = useState('/produtos');

    useEffect(() => {
        const delayTimer = setTimeout(() => {
            pesquisarProduto();
        }, 300);

        return () => clearTimeout(delayTimer);
    }, [pesquisar]);

    async function pesquisarProduto() {
        if (!pesquisar) {
            console.log('Não foi possível achar esse produto');
            setProdutos([]);
        } else {
            try {
                const response = await axios.get(`http://191.235.113.110:5000/produto/${pesquisar}`);
                setProdutos(response.data || []);
            } catch (error) {
                console.log(error);
            }
        }
    }

    const limparPesquisa = () => {
        setPesquisar('');
        setProdutos([]);
    };

    useEffect(() => {
        var iframe = document.getElementById('produtosIframe');
        var logo = document.getElementById('logo');
        var nintendo = document.getElementById('nintendo');
        var ps4 = document.getElementById('ps4');
        var xbox = document.getElementById('xbox');
        var marcas = document.getElementById('marcas');
        var login = document.getElementById('login');
        var corpo = document.getElementById('corpo-home');

        iframe.addEventListener('load', async function () {
            await timeout(100);
            var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
            var iframeBody = iframeDocument.body;
            iframe.style.height = iframeBody.offsetHeight + 100 + 'px';
        });

        window.addEventListener(
            'resize',
            function () {
                var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
                var iframeBody = iframeDocument.body;
                iframe.style.height = iframeBody.offsetHeight + 100 + 'px';
            },
            true
        );

        logo.addEventListener('click', function () {
            marcas.style.backgroundColor = 'black';
            corpo.style.backgroundImage = "url('/assets/images/Plano_de_Fundo.jpeg')";
        });

        nintendo.addEventListener('click', function () {
            marcas.style.backgroundColor = '#E60012';
            corpo.style.backgroundImage = "url('/assets/images/Nintendo_Fundo.jpeg')";
        });

        ps4.addEventListener('click', function () {
            marcas.style.backgroundColor = '#2F7DBF';
            corpo.style.backgroundImage = "url('/assets/images/PS4_Fundo.jpeg')";
        });

        xbox.addEventListener('click', function () {
            marcas.style.backgroundColor = '#5DB34A';
            corpo.style.backgroundImage = "url('/assets/images/Xbox_Fundo.jpeg')";
        });

        login.addEventListener('click', async function () {
            await timeout(50);
            window.removeEventListener('resize', eventHandlerFunction);
            window.location.href = '/login';
        });

        function eventHandlerFunction(event) {
            alert('a');
        }

        function timeout(delay) {
            return new Promise((res) => setTimeout(res, delay));
        }
    }, []);

    return (
        <div className="corpo-home" id="corpo-home">
            <nav className="cabecalho">
                <div className="cabecalho-menu">
                    <Link to="/produtos" target="produtos">
                        <img id="logo" src="/assets/images/logonpx.png" alt="npx consoles" />
                    </Link>
                    <div className="cabecalho-form">
                        <div className="form">
                            <input
                                id="pesquisa"
                                type="text"
                                name="pesquisa"
                                value={pesquisar}
                                onChange={(e) => setPesquisar(e.target.value)}
                            />
                        </div>
                        {produtos.length > 0 && (
                            <div className="resultado-form-pesquisa">
                                {produtos.map((produto) => (
                                    <Link
                                        className="a-pesquisa-Produtos"
                                        key={produto.id}
                                        to={{ pathname: `/ProdutoEspc/${produto.id}`, state: { produtoId: produto.id } }}
                                        target='produtos'
                                        onClick={limparPesquisa}
                                    >
                                        <img src={`http://191.235.113.110:5000/${produto.imagem}`} alt={produto.nome} />
                                        <h1>{produto.nome}</h1>
                                        <h2>{`R$ ${produto.preco}`}</h2>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="cabecalho-login">
                        <div className="cabecalho-login-button">
                            <Link id="login">Login</Link>
                        </div>
                    </div>
                </div>
            </nav>
            <div id="marcas">
                <div>
                    <Link id="nintendo" to="/ProdutosNintendo" target="produtos">
                        <img src="/assets/images/nintendo.png" alt="" />
                    </Link>
                    <Link id="ps4" to="/ProdutosPs4" target="produtos">
                        <img src="/assets/images/ps4.png" alt="" />
                    </Link>
                    <Link id="xbox" to="/ProdutosXbox" target="produtos">
                        <img src="/assets/images/xbox.png" alt="" />
                    </Link>
                </div>
            </div>
            <main className="main-home">
                <Iframe id="produtosIframe" src={iframe} name="produtos" />
            </main>
            <footer className="rodape-home">
                <div className="rodape">
                    <div className="informacoes">
                        <h1>INFORMAÇÕES DA LOJA</h1>
                        <p>
                            O NPX Consoles é o local ideal para procurar os melhores e mais recentes consoles.
                        </p>
                    </div>
                    <div className="navegue">
                        <h1>NAVEGUE</h1>
                        <p>
                            -EMPRESA <br></br>
                            -POLÍTICAS DE PRIVACIDADE<br></br>
                            -LOCALIZAÇÃO<br></br>
                            -POLÍTICA DE PRÉ-VENDA
                        </p>
                    </div>
                    <div className="div-desenvolvido">
                        <div className="desenvolvido">
                            <h1>DESENVOLVIDO POR:</h1>
                            <p>
                                BERNARDO GALVÃO DE SOUZA<br></br>
                                JOÃO VICTOR MATULIS<br></br>
                                KEVIN SOUSA DOS SANTOS
                            </p>
                        </div>
                        <div className="rodape-img">
                            <img className="pagamento" src="/assets/images/Visa.png" alt="" />
                            <img className="pagamento" src="/assets/images/MasterCard.png" alt="" />
                            <img className="pagamento" src="/assets/images/Diners Club.png" alt="" />
                            <img className="pagamento" src="/assets/images/American Express.png" alt="" />
                            <img className="pagamento" src="/assets/images/Hipercard.png" alt="" />
                            <img className="pagamento" src="/assets/images/Elo.png" alt="" />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}