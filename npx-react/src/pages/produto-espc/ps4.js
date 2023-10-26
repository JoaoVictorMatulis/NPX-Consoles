import './index.scss';
import { Link } from "react-router-dom";

export default function ProdutoEspc(){
    return(
        <div id="prodEspc-Body">
            <form id="form-Edit" action="post">
                <input type="hidden" name="flag" value="editar"/>
                <a href="http://localhost:3000/EditarProdutoPs4"><input type="button" id="editar" class="botao" value="Editar"/></a>
            </form>
            <div id="conteiner">
                <div id="div-ProdEspc">
                    <img src="/assets/images/PLAYSTATION_5.png" alt="ps5"/>
                    <p>Descrição</p>
                    <p>
                    Jogar no PS5 Não Tem Limites
                    Desfrute do carregamento do 
                    seu PS5, extremamente rápido 
                    com o SSD de altíssima velocidade, 
                    uma imersão mais profunda com 
                    suporte a feedback tátil, 
                    gatilhos adaptáveis e áudio 3D,
                    além de uma geração inédita 
                    de jogos incríveis para PlayStation.
                    
                    
                    
                    Veloz como um raio, SSD ultrarrápido
                    Domine o poder de uma CPU e GPU 
                    personalizadas e o SSD com E/S 
                    integradas que redefinem as regras 
                    do que o console PlayStation pode 
                    fazer.
                    
                    Maximize suas sessões de jogo com 
                    tempo de carregamento praticamente 
                    instantâneo para jogos do PS5 
                    instalados.
                    
                    
                    
                    Jogos impressionantes para PS5
                    Maravilhe-se com os gráficos 
                    incríveis e experimente os 
                    recursos do novo PS5. "Ray 
                    Tracing" (Rastreamento de raios) 
                    Mergulhe em mundos com um nível 
                    inédito de realismo enquanto os 
                    raios de luz são simulados 
                    individualmente, criando sombras 
                    e reflexos realistas em jogos 
                    compatíveis com Playstation 5. 
                    Jogos para TVs 4K Curta seus jogos 
                    favoritos do PS5 na sua incrível 
                    TV 4K. Até 120 fps com saída em 
                    120 Hz Desfrute da fluidez e taxa
                    de quadros de até 120 fps em 
                    jogos compatíveis, com suporte 
                    a saída de 120 Hz em telas 4K.
                    
                    
                    Tecnologia HDR
                    Com uma TV HDR, os jogos 
                    compatíveis do PS5 exibem 
                    uma variedade de cores 
                    inacreditavelmente vibrantes 
                    e realistas. Saída em 8K Os 
                    consoles PS5 oferecem suporte 
                    à saída 8K, para que você possa 
                    jogar na sua tela com resolução 
                    de 4320p.
                    
                    
                    
                    Tempest 3D AudioTech
                    Mergulhe em palcos sonoros que 
                    farão você acreditar que os sons
                    estão vindo de todas as direções. 
                    Seja com seus fones de ouvido ou 
                    os alto-falantes de sua TV, seu 
                    ambiente ganhará vida com o 
                    Tempest 3D AudioTech em jogos 
                    compatíveis.
                    
                    
                    
                    Resposta tátil
                    Experimente a resposta tátil 
                    com o controle sem fio 
                    DualSense em jogos selecionados 
                    do PS5 e sinta o impacto de 
                    suas ações no jogo através 
                    da resposta sensorial dinâmica.
                    
                    
                    
                    Gatilhos adaptáveis
                    Assuma o controle com os 
                    imersivos gatilhos adaptáveis,
                    agora com níveis dinâmicos de 
                    resistência que simulam o impacto
                    físico das atividades em jogos 
                    selecionados do PS5.
                 </p>
                </div>
                <div class = "desc">
                    <h1>PlayStation 4</h1>
                    <h3>10x R$230,00 sem juros</h3>
                    <h2>R$ 2300,00</h2>
                    <button class="botao">Comprar</button>
                    <button class="botao">Adicionar ao Carrinho</button>
                </div>
            </div>
        </div>
    )
}