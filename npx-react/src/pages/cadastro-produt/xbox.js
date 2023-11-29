import './index.scss';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Produtos(){

    const [marca] = useState('xbox');
    const [nome, setNome] = useState(null);
    const [preco, setPreco] = useState(null);
    const [descricao, setDescricao] = useState(null);
    const [principal, setPrincipal] = useState(false);
    const [arquivo, setArquivo] = useState('')

    async function salvarProduto(){
        if(nome == null || preco == null || descricao == null || arquivo == ''){
            alert('Preencha todos as campos abaixo e selecione uma imagem')
        }else{
            const formData = new FormData();
            formData.append('capa', arquivo);

            var body = {
                marca: marca,
                nome: nome,
                preco: preco,
                descricao: descricao,
                principal: principal
            }
            var r = await axios.post('http://191.235.113.110:5000/cadastroProd', body)
            var id = r.data.id;

            if (arquivo) {
                r = await axios.put(`http://191.235.113.110:5000/prod/${id}/capa`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
            }

            alert('Produto cadastrado. Id '+id)
        }
    }
    
    useEffect(() => {
        const imagemInput = document.getElementById('img');
        const imagemPreview = document.getElementById('imagemPreview');
        imagemInput.addEventListener('change', function() {
            const file = imagemInput.files[0];
            if (file) {
                const reader = new FileReader();

                reader.onload = function(e) {
                    imagemPreview.src = e.target.result;
                };

                reader.readAsDataURL(file);
            }
        });
    }, []);

    return(
        <div id="body-IndexCad">
            <form action="post">
                <div>
                    <img id="imagemPreview" src="/assets/images/Xbox_logo.png" alt="Prévia da Imagem"/><br/>
                    <input type="file" accept="image/*" name="img" id="img" onChange={e => setArquivo(e.target.files[0])} required/>
                </div>
                <div id="dados">
                    <label for="nome"><strong>Nome do Produto:</strong></label>
                    <input id ="nome" type="text" name="nome" value={nome} onChange={e => setNome(e.target.value)} required/>
                    <label for="preco"><strong>Preço do Produto(R$):</strong></label>
                    <input id="preco" type="number" name="preco" value={preco} onChange={e => setPreco(e.target.value)} required/>
                    <label for="desc"><strong>Descrição do Produto:</strong></label>
                    <textarea id="desc" name="desc" value={descricao} onChange={e => setDescricao(e.target.value)} required></textarea>
                    <label>É um produto principal da loja? <input type='checkbox' checked={principal}  onChange={e => setPrincipal(e.target.checked)}/></label>
                    <div>
                        <input type="button" id="botao" onClick={salvarProduto} value="Cadastrar"/>
                    </div>
                </div>
            </form>
        </div>
    )}