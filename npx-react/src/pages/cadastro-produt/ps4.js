import './index.scss';
import { Link } from "react-router-dom";
import React, { useEffect } from 'react';

export default function Produtos(){

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
                    <img id="imagemPreview" src="/assets/images/PS4_logo.jpg" alt="Prévia da Imagem"/><br/>
                    <input type="file" accept="image/*" name="img" id="img"/>
                </div>
                <div id="dados">
                    <input type="hidden" name="flag" value="ps4"/>
                    <label for="nome"><strong>Nome do Produto:</strong></label>
                    <input id ="nome" type="text" name="nome"/>
                    <label for="preco"><strong>Preço do Produto(R$):</strong></label>
                    <input id="preco" type="number" name="preco"/>
                    <label for="desc"><strong>Descrição do Produto:</strong></label>
                    <textarea id="desc" name="desc"></textarea>
                    <div>
                        <input type="button" id="botao" value="Cadastrar"/>
                    </div>
                </div>
            </form>
        </div>
    )}