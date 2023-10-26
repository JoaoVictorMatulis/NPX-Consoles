import './index.scss';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe'
import React, { useEffect, useRef } from 'react';

export default function HomeAdmin() {

    useEffect(() => {
        var iframe = document.getElementById("produtosIframe");
        var logo = document.getElementById("logo");
        var nintendo = document.getElementById("nintendo");
        var ps4 = document.getElementById("ps4");
        var xbox = document.getElementById("xbox");
        var marcas = document.getElementById("marcas");
        var ativar = document.getElementById('ativar');
        var ativo = false;
        var cad = document.getElementById('cadastrarProd');
        var cadAtivo = false;

        window.addEventListener("mousemove", function(){
            var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
            var iframeBody = iframeDocument.body;
            iframe.style.height = (iframeBody.offsetHeight + 100) + "px"
        })

        logo.addEventListener("click", function () {
            marcas.style.backgroundColor = "black"
            cadAtivo=false;
        })

        nintendo.addEventListener("click", function () {
            marcas.style.backgroundColor = "#E60012"
            if(cadAtivo){
                document.getElementById('nintendo').href="http://localhost:3000/CadastroProdutoNintendo";       
            }else{
                document.getElementById('nintendo').href="http://localhost:3000/ProdutosNintendo";
            }
        })
        
        ps4.addEventListener("click", function () {
            marcas.style.backgroundColor = "#2F7DBF"
            if(cadAtivo){
                document.getElementById('ps4').href="http://localhost:3000/CadastroProdutoPs4";        
            }else{
                document.getElementById('ps4').href="http://localhost:3000/ProdutosPs4";
            }
        })
        
        xbox.addEventListener("click", function () {
            marcas.style.backgroundColor = "#5DB34A"
            if(cadAtivo){
                document.getElementById('xbox').href="http://localhost:3000/CadastroProdutoXbox";     
            }else{
                document.getElementById('xbox').href="http://localhost:3000/ProdutosXbox";
            }
        })

        ativar.addEventListener('click', function(){
            if(!ativo){
                document.getElementById('opcoesAdmin').style.display = 'block';
                ativo = true;
            } else{
                document.getElementById('opcoesAdmin').style.display = 'none';
                ativo = false;
            }
        })
        
        cad.addEventListener('click', function(){
            marcas.style.backgroundColor = "black";
            cadAtivo=true;
        })
    }, []);

    return (
        <div class="corpo-home">
            <nav class="cabecalho">
                <div class="cabecalho-menu">
                    <a href="http://localhost:3000/produtos" target="meio"><img id="logo" src="/assets/images/logonpx.png" alt="npx consoles" /></a>
                    <form class="cabecalho-form">
                        <input id="pesquisa" type="text" name="pesquisa" />
                        <button class="form-button" type="submit" id="completed-task">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </form>
                    <div class="cabecalho-login">
                        <div class="cabecalho-login-button" id="ativar">
                            <button>Bem Vindo<i class="fa-solid fa-chevron-down"></i></button>
                        </div>
                        <div id="opcoesAdmin">
                            <a href="http://localhost:3000/CadastroProduto" target="meio" id="cadastrarProd">Cadastrar Produto</a>
                            <br/>
                            <a href="http://localhost:3000">Sair</a>
                        </div>
                    </div>
                </div>
            </nav>
            <div id="marcas">
                <div>
                    <a id="nintendo" href="http://localhost:3000/ProdutosNintendo" target="meio">
                        <img src="/assets/images/nintendo.png" alt="" />
                    </a>
                    <a id="ps4" href="http://localhost:3000/ProdutosPs4" target="meio">
                        <img src="/assets/images/ps4.png" alt="" />
                    </a>
                    <a id="xbox" href="http://localhost:3000/ProdutosXbox" target="meio">
                        <img src="/assets/images/xbox.png" alt="" />
                    </a>
                </div>
            </div>
            <main class="main-home">
                <Iframe id="produtosIframe" src="http://localhost:3000/produtos" name="meio"/>
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