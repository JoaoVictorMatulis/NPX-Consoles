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
                    <img id="imagemPreview" src="/assets/images/PLAYSTATION_5.png" alt="Prévia da Imagem"/><br/>
                    <input type="file" accept="image/*" name="img" id="img"/>
                </div>
                <div id="dados">
                    <input type="hidden" name="flag" value="nintendo"/>
                    <label for="nome"><strong>Nome do Produto:</strong></label>
                    <input id ="nome" type="text" name="nome" value="PlayStation 5"/>
                    <label for="preco"><strong>Preço do Produto(R$):</strong></label>
                    <input id="preco" type="number" name="preco" value="4200.00"/>
                    <label for="desc"><strong>Descrição do Produto:</strong></label>
                    <textarea id="desc" name="desc">Console Sony Playstation 5 
                        Jogar no PS5 Não Tem Limites
                        Desfrute do carregamento do seu PS5, extremamente rápido com o SSD de altíssima velocidade, uma imersão mais profunda com suporte a feedback tátil, gatilhos adaptáveis e áudio 3D, além de uma geração inédita de jogos incríveis para PlayStation.
                        
                        
                        
                        Veloz como um raio, SSD ultrarrápido
                        Domine o poder de uma CPU e GPU personalizadas e o SSD com E/S integradas que redefinem as regras do que o console PlayStation pode fazer.
                        
                        Maximize suas sessões de jogo com tempo de carregamento praticamente instantâneo para jogos do PS5 instalados.
                        
                        
                        
                        Jogos impressionantes para PS5
                        Maravilhe-se com os gráficos incríveis e experimente os recursos do novo PS5. "Ray Tracing" (Rastreamento de raios) Mergulhe em mundos com um nível inédito de realismo enquanto os raios de luz são simulados individualmente, criando sombras e reflexos realistas em jogos compatíveis com Playstation 5. Jogos para TVs 4K Curta seus jogos favoritos do PS5 na sua incrível TV 4K. Até 120 fps com saída em 120 Hz Desfrute da fluidez e taxa de quadros de até 120 fps em jogos compatíveis, com suporte a saída de 120 Hz em telas 4K.
                        
                        
                        Tecnologia HDR
                        Com uma TV HDR, os jogos compatíveis do PS5 exibem uma variedade de cores inacreditavelmente vibrantes e realistas. Saída em 8K Os consoles PS5 oferecem suporte à saída 8K, para que você possa jogar na sua tela com resolução de 4320p.
                        
                        
                        
                        Tempest 3D AudioTech
                        Mergulhe em palcos sonoros que farão você acreditar que os sons estão vindo de todas as direções. Seja com seus fones de ouvido ou os alto-falantes de sua TV, seu ambiente ganhará vida com o Tempest 3D AudioTech em jogos compatíveis.
                        
                        
                        
                        Resposta tátil
                        Experimente a resposta tátil com o controle sem fio DualSense em jogos selecionados do PS5 e sinta o impacto de suas ações no jogo através da resposta sensorial dinâmica.
                        
                        
                        
                        Gatilhos adaptáveis
                        Assuma o controle com os imersivos gatilhos adaptáveis, agora com níveis dinâmicos de resistência que simulam o impacto físico das atividades em jogos selecionados do PS5.
                    </textarea>
                    <div>
                        <input type="button" class="botao" id="editar" value="Editar"/>
                    </div>
                </div>
            </form>
        </div>
    )}