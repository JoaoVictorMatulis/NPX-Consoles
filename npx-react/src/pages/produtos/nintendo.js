import './index.scss';
import { Link } from "react-router-dom";

export default function Produtos(){
    return(
        <div class="body-Produtos">
            <div id="produtos">
                <a class="a-Produtos" href="http://localhost:3000/ProdutoEspcNintendo">
                    <img src="/assets/images/NINTENDO_SWITCH_OLED.png" alt="Nintendo Switch OLED"/>
                    <h1>Nintendo Switch OLED</h1>
                    <p>10x R$219,90 sem juros</p>
                    <h2>R$ 2199,00</h2>
                </a>
                <a class="a-Produtos" href="">
                    <img src="/assets/images/NINTENDO_SWITCH.png" alt="Switch"/>
                    <h1>Switch</h1>
                    <p>10x R$200,00 sem juros</p>
                    <h2>R$ 2000,00</h2>
                </a>
                <a class="a-Produtos" href="">
                    <img src="/assets/images/WII_U.png" alt="WII U"/>
                    <h1>WII U</h1>
                    <p>10x R$219,90 sem juros</p>
                    <h2>R$ 2199,00</h2>
                </a>
                <a class="a-Produtos" href="">
                    <img src="/assets/images/NINTENDO_3DS_XL.png" alt="Nintendo 3DS XL"/>
                    <h1>Nintendo 3DS XL</h1>
                    <p>10x R$219,90 sem juros</p>
                    <h2>R$ 2199,00</h2>
                </a>
                <a class="a-Produtos" href="">
                    <img src="/assets/images/NINTENDO_2DS.png" alt="NINTENDO_2DS"/>
                    <h1>Nintendo 2DS</h1>
                    <p>10x R$90,00 sem juros</p>
                    <h2>R$ 900,00</h2>
                </a>
            </div>
        </div>
    )
}