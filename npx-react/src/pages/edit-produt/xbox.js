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
        <div id="body-Edit">
            <form action="post" id="form-Delete">
                <input type="hidden" name="flag" value="deletar"/>
                <input type="button" id="deletar" class="botao" value="Deletar"/>
            </form>
            <form action="post">
                <div>
                    <img id="imagemPreview" src="/assets/images/XBOX_SERIES_X.png" alt="Prévia da Imagem"/><br/>
                    <input type="file" accept="image/*" name="img" id="img"/>
                </div>
                <div id="dados">
                    <input type="hidden" name="flag" value="nintendo"/>
                    <label for="nome"><strong>Nome do Produto:</strong></label>
                    <input id ="nome" type="text" name="nome" value="Xbox Series X"/>
                    <label for="preco"><strong>Preço do Produto(R$):</strong></label>
                    <input id="preco" type="number" name="preco" value="4295.00"/>
                    <label for="desc"><strong>Descrição do Produto:</strong></label>
                    <textarea id="desc" name="desc">Características:
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
                        
                        
                        Garantia do Fornecedor
                        
                        3 meses
                        
                        
                        Peso:
                        4452 gramas (bruto com embalagem)                        
                    </textarea>
                    <div>
                        <input type="button" class="botao" id="editar" value="Editar"/>
                    </div>
                </div>
            </form>
        </div>
    )}