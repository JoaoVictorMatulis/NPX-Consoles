import './index.scss';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Produtos(){

    const [marca] = useState('nintendo');
    const [nome, setNome] = useState(null);
    const [preco, setPreco] = useState(null);
    const [descricao, setDescricao] = useState(null);
    const [principal, setPrincipal] = useState(false);
    const [img, setImg] = useState(null);

    async function salvarProduto(){
        if(nome == null || preco == null || descricao == null || img == null){
            alert('Preencha todos as campos abaixo e selecione uma imagem')
        }else{
            alert(img)
            const formData = new FormData();
            formData.append('capa', img);

            var body = {
                marca: marca,
                nome: nome,
                preco: preco,
                descricao: descricao,
                principal: principal
            }
            var r = await axios.post('http://localhost:5000/cadastroProd', body)
            var id = r.data.id;

            // if (img) {
            //     r = await axios.put(`http://localhost:5000/prod/${id}/capa`, formData, {
            //         headers: { 'Content-Type': 'multipart/form-data' },
            //     });
            // }

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
                    <img id="imagemPreview" src="/assets/images/Nintendo_logo.png" alt="Prévia da Imagem"/><br/>
                    <input type="file" accept="image/*" name="img" id="img" value={img} onChange={e => setImg(e.target.value)} required/>
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