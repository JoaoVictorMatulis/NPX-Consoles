import './index.scss';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

export default function Produtos() {

    const [marca, setMarca] = useState('');
    const [nome, setNome] = useState(null);
    const [preco, setPreco] = useState(null);
    const [descricao, setDescricao] = useState(null);
    const [principal, setPrincipal] = useState(false);
    const [arquivo, setArquivo] = useState('')
    const [arquivoString, setArquivoString] = useState('');

    const [produto, setProduto] = useState([]);
    const params = useParams();

    async function deletarProduto() {
        let text = "Gostaria de deletar o produto X?!";
        if (window.confirm(text) == true) {
            let r = await axios.delete("http://localhost:5000/delproduto/" + params.id);
            if(r.status = 202){
                alert("Produto deletado com sucesso")
                window.location.href = '/Produtos';
            }   else {
                alert("Erro ao deletar o produto")
            }
        }
    }

    useEffect(() => {
        buscarProduto()
        const imagemInput = document.getElementById('img');
        const imagemPreview = document.getElementById('imagemPreview');
        imagemInput.addEventListener('change', function () {
            const file = imagemInput.files[0];
            if (file) {
                const reader = new FileReader();

                reader.onload = function (e) {
                    imagemPreview.src = e.target.result;
                };

                reader.readAsDataURL(file);
            }
        });
    }, []);

    async function buscarProduto() {
        try {
            let r = await axios.get("http://localhost:5000/produtoId/" + params.id);
            if (r.data.length > 0) {
                const primeiroProduto = r.data[0];
                setMarca(primeiroProduto.marca);
                setNome(primeiroProduto.nome);
                setPreco(primeiroProduto.preco);
                setDescricao(primeiroProduto.descricao);
                setPrincipal(primeiroProduto.principal);
                setArquivo(primeiroProduto.imagem);
                setArquivoString(primeiroProduto.imagem);
            }
        } catch (error) {
            console.error('Erro ao buscar Produto:', error);
            setProduto([]);
        }
    }

    async function salvarProduto() {
        if(nome == null || preco == null || descricao == null || arquivo == ''){
            alert('Preencha todos as campos abaixo e selecione uma imagem')
        }else{
            const formData = new FormData();
            formData.append('capa', arquivo);

            var body = {
                id: params.id,
                marca: marca,
                nome: nome,
                preco: preco,
                descricao: descricao,
                principal: principal
            }
            var r = await axios.put('http://localhost:5000/atualizarProd', body)

            if (arquivo && String(arquivo) != String(arquivoString) ) {
                r = await axios.put(`http://localhost:5000/prod/${params.id}/capa`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });   
            }

            alert('Produto atualizado. Id ' + params.id)
        }
    }

    return (
        <div id="body-Edit">
            <div id="div-form-deletar">
                <form action="post" id="form-Delete">
                    <input type="button" id="deletar" class="botao" value="Deletar" onClick={deletarProduto} />
                </form>
            </div>
            <form action="post">
                <div>
                    <img id="imagemPreview" src={"http://localhost:5000/" + arquivo} alt="Prévia da Imagem" /><br />
                    <input type="file" accept="image/*" name="img" id="img" onChange={e => setArquivo(e.target.files[0])} required />
                </div>
                <div id="dados">
                    <label for="nome"><strong>Nome do Produto:</strong></label>
                    <input id="nome" type="text" name="nome" value={nome} onChange={e => setNome(e.target.value)} required size="30" maxlength="30" />
                    <label for="preco"><strong>Preço do Produto(R$):</strong></label>
                    <input id="preco" type="number" name="preco" value={preco} onChange={e => setPreco(e.target.value)} required />
                    <label for="desc"><strong>Descrição do Produto:</strong></label>
                    <textarea id="desc" name="desc" value={descricao} onChange={e => setDescricao(e.target.value)} required maxlength="6000"></textarea>
                    <label>É um produto principal da loja? <input type='checkbox' checked={principal} onChange={e => setPrincipal(e.target.checked)} /></label>
                    <div>
                        <input type="button" class="botao" id="editar" onClick={salvarProduto} value={"Editar"} />
                    </div>
                </div>
            </form>
        </div>
    )
}