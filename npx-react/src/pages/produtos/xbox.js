import './index.scss';
import { Link } from "react-router-dom";

export default function Produtos(){
    return(
        <div class="body-Produtos">
            <div id="produtos">
                <a class="a-Produtos" href="http://localhost:3000/ProdutoEspcXbox">
                    <img src="/assets/images/XBOX_SERIES_X.png" alt="Xbox Series X"/>
                    <h1>Xbox Series X</h1>
                    <p>10x R$429,50 sem juros</p>
                    <h2>R$ 4295,00</h2>
                </a>
                <a class="a-Produtos" href="">
                    <img src="/assets/images/XBOX_ONE.png" alt="XBOX_ONE"/>
                    <h1>Xbox One</h1>
                    <p>10x R$110,00 sem juros</p>
                    <h2>R$ 1100,00</h2>
                </a>
                <a class="a-Produtos" href="">
                    <img src="/assets/images/XBOX_SERIES_S.png" alt="XBOX_SERIES_S"/>
                    <h1>Xbox Series S</h1>
                    <p>10x R$240,00 sem juros</p>
                    <h2>R$ 2400,00</h2>
                </a>
            </div>
        </div>
    )
}