import './index.scss';
import { Link } from "react-router-dom";

export default function ProdutoEspc(){
    return(
        <div id="prodEspc-Body">
            <form id="form-Edit" action="post">
                <input type="hidden" name="flag" value="editar"/>
                <a href="/EditarProdutoXbox"><input type="button" id="editar" class="botao" value="Editar"/></a>
            </form>
            <div id="conteiner">
                <div id="div-ProdEspc">
                    <img src="/assets/images/XBOX_SERIES_X.png" alt="xbox series x"/>
                    <p>Descrição</p>
                    <p>
                    Características:
                    - Marca: Microsoft
                        
                    Especificações:
                    - Plataforma Xbox Series X
                    - Espaço de armazenamento 1 TB
                    - Conexões HDMI-In/Out, Wi-Fi embutido, Blu-ray
                    - Voltagem Bivolt
                    
                    Conteúdo da Embalagem:
                    - Console Xbox Series X de 1TB
                    - 1 controle sem fio Xbox
                    - Cabo HDMI
                    - Cabo de alimentação
                        
                    
                    Garantia do Fornecedor: 
                    
                    3 meses
                    
                    
                    Peso:
                    4452 gramas (bruto com embalagem)</p>
                </div>
                <div class = "desc">
                    <h1>Xbox Series X</h1>
                    <h3>10x R$429,50 sem juros</h3>
                    <h2>R$ 4295,00</h2>
                    <button class="botao">Comprar</button>
                    <button class="botao">Adicionar ao Carrinho</button>
                </div>
            </div>
        </div>
    )
}