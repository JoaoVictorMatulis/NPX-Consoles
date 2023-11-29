import { useState } from 'react';
import './index.scss';
import { Link } from "react-router-dom";
import axios from 'axios';

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function logar() {
        var body = {
            email: email,
            senha: senha
        }

        var r = await axios.post('http://localhost:5000/login', body)
        if (r.data[0] == null) {
            alert('Email ou senha errada')
        } else {
            window.location.href = '/HomeAdmin';
        }
    }

    return (
        <div className="body-Login">
            <nav className="cabecalho">
                <div className="cabecalho-menu">
                    <Link to="/">
                        <img id="logo" src="/assets/images/logonpx.png" alt="npx consoles" />
                    </Link>
                </div>
            </nav>
            <br />
            <div className="Login">
                <label htmlFor="email">Email:</label><br />
                <input type='text' name="email" value={email} onChange={e => setEmail(e.target.value)} required /><br />
                <label htmlFor="senha">Senha:</label><br />
                <input type="password" name="senha" value={senha} onChange={e => setSenha(e.target.value)} required />
                <button onClick={logar}> Continuar</button>
            </div>
        </div>
    );
}