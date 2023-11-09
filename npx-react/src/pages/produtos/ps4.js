import './index.scss';
import { Link } from "react-router-dom";

export default function Produtos(){
    return(
        <div class="body-Produtos">
            <div id="produtos">
                <Link class="a-Produtos" to="/ProdutoEspcPs4" target="produtos">
                    <img src="/assets/images/PLAYSTATION_5.png" alt="PlayStation 5"/>
                    <h1>PlayStation 5</h1>
                    <p>10x R$420,00 sem juros</p>
                    <h2>R$ 4200,00</h2>
                </Link>
                <Link class="a-Produtos" to="">
                    <img src="/assets/images/PLAYSTATION_4.png" alt="PLAYSTATION 4"/>
                    <h1>PlayStation 4</h1>
                    <p>10x R$230,00 sem juros</p>
                    <h2>R$ 2300,00</h2>
                </Link>
            </div>
        </div>
    )
}