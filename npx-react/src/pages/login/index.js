import './index.scss';
import { Link } from "react-router-dom";

export default function Login(){
    return (<div class="body-Login">
        <nav class="cabecalho">
            <div class="cabecalho-menu">
                <a href="http://localhost:3000"><img id="logo"
                        src="/assets/images/logonpx.png" alt="npx consoles"/></a>
            </div>
        </nav>
        <br/>
        <form class="Login">
            <label for="email">Email:</label><br/>
            <input type="text" id="email" name="email" required/><br/>
            <label for="senha">Senha:</label><br/>
            <input type="password" id="senha" name="senha" required/>
            <a href="http://localhost:3000/HomeAdmin">Continuar</a>
        </form>
    </div>)
}