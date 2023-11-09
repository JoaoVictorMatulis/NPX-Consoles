import './index.scss';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Contato() {

    const[pesquisar, setPesquisar] = useState(null);

    async function pesquisarProduto(){
        if(pesquisar == null || pesquisar === undefined || pesquisar === ''){
            alert('Não foi possível achar esse produto')
        }else{
            var r = await axios.get('http://localhost:5000/produto/'+pesquisar)
            if (r.data[0] == null) {
                alert('Não foi possível achar esse produto')
            } else {
                alert('Achei:'+r.data[0].preco)
            }
        }
    }

    function timeout(delay) {
        return new Promise(res => setTimeout(res, delay));
    }

    useEffect(() => {
        var iframe = document.getElementById("produtosIframe")
        var logo = document.getElementById("logo");
        var nintendo = document.getElementById("nintendo");
        var ps4 = document.getElementById("ps4");
        var xbox = document.getElementById("xbox");
        var marcas = document.getElementById("marcas");
        var login = document.getElementById("login");

        iframe.addEventListener("load", async function () {
            await timeout(50)
            var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
            var iframeBody = iframeDocument.body;
            iframe.style.height = (iframeBody.offsetHeight + 100) + "px"
        })

        window.addEventListener("resize", function () {
            var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
            var iframeBody = iframeDocument.body;
            iframe.style.height = (iframeBody.offsetHeight + 100) + "px"
        }, true)

        logo.addEventListener("click", function () {
            marcas.style.backgroundColor = "black"
        })

        nintendo.addEventListener("click", function () {
            marcas.style.backgroundColor = "#E60012"
        })

        ps4.addEventListener("click", function () {
            marcas.style.backgroundColor = "#2F7DBF"
        })

        xbox.addEventListener("click", function () {
            marcas.style.backgroundColor = "#5DB34A"
        })

        login.addEventListener("click", async function () {
            await timeout(50)
            window.removeEventListener("resize", eventHandlerFunction);
            window.location.href = '/login';
        })

        function eventHandlerFunction(event) {
            alert('a')
        }
    },[]);

    return (
        <div class="corpo-home">
            <nav class="cabecalho">
                <div class="cabecalho-menu">
                    <Link to="/produtos" target="produtos"><img id="logo" src="/assets/images/logonpx.png" alt="npx consoles" /></Link>
                    <div class="cabecalho-form">
                        <input id="pesquisa" type="text" name="pesquisa" value={pesquisar} onChange={e => setPesquisar(e.target.value)}/>
                        <button class="form-button" id="completed-task" onClick={pesquisarProduto}>
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                    <div class="cabecalho-login">
                        <div class="cabecalho-login-button">
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
            <main class="main-home">
                <Iframe id="produtosIframe" src="/produtos" name="produtos" />
            </main>
            <footer class="rodape-home">
                <div class="rodape">
                    <div class="informacoes">
                        <h1>INFORMAÇÕES DA LOJA</h1>
                        <p>
                            O NPX Consoles é o local ideal para
                            procurar os melhores e mais
                            recentes consoles.
                        </p>
                    </div>
                    <div class="navegue">
                        <h1>NAVEGUE</h1>
                        <p>-EMPRESA <br></br>
                            -POLÍTICAS DE PRIVACIDADE<br></br>
                            -LOCALIZAÇÃO<br></br>
                            -POLÍTICA DE PRÉ-VENDA</p>
                    </div>
                    <div class="div-desenvolvido">
                        <div class="desenvolvido">
                            <h1>DESENVOLVIDO POR:</h1>
                            <p>BERNARDO GALVÃO DE SOUZA<br></br>
                                JOÃO VICTOR MATULIS</p>
                        </div>
                        <div clas="rodape-img">
                            <img class="pagamento" src="/assets/images/Visa.png" alt="" />
                            <img class="pagamento" src="/assets/images/MasterCard.png" alt="" />
                            <img class="pagamento" src="/assets/images/Diners Club.png" alt="" />
                            <img class="pagamento" src="/assets/images/American Express.png" alt="" />
                            <img class="pagamento" src="/assets/images/Hipercard.png" alt="" />
                            <img class="pagamento" src="/assets/images/Elo.png" alt="" />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}