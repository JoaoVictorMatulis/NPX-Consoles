create database npxconsole;
use npxconsole;

create table pessoa(
	pessoa_id int auto_increment primary key,
    email varchar(40) not null,
    senha varchar(50) not null
);

create table produto(
	produto_id int auto_increment primary key,
    marca varchar(20) not null,
    nome varchar(30) not null,
    preco double not null,
    descricao varchar(6000) not null ,
    principal boolean,
    img varchar(100) not null,
    dia datetime
);

insert into pessoa(email, senha) values('teste@gmail.com', 'senha123');

insert into produto(marca, nome, preco, descricao, principal, img, dia) values
(
	'nintendo', 
	'Nintendo Switch OLED',
	2199.00,
	'Console Nintendo Switch modelo OLED: Joy-Cons e 
	Dock na cor branca;
	Tela OLED de 7";
	Memória interna de 64GB;
	Dock com entrada LAN para internet a cabo.
	PRODUTO IMPORTADO. A versão poderá variar 
	de acordo com o estoque disponível no dia da 
	aprovação da compra. Consulte seu vendedor. 
	IMPORTANTE: Produto de região livre, portanto, 
	independente da versão do console, 
	poderão ser utilizados jogos físicos e digitais 
	de qualquer região assim como contas 
	online de qualquer país. A configuração do console 
	poderá ser feita em diversos idiomas, 
	incluindo português brasileiro.',
	true,
	'/public/assets/images/NINTENDO_SWITCH_OLED.png',
	now()
),
(
	'playstation',
	'PS5',
	2300.00,
	'Jogar no PS5 Não Tem Limites
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
					 selecionados do PS5.',
	true,
	'/public/assets/images/PLAYSTATION_5.png',
	now()
),
(
	'xbox',
    'Xbox Series X',
    4295.00,
    'Características:
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
                
            
            Garantia do Fornecedor: 
            
            3 meses
            
            
            Peso:
            4452 gramas (bruto com embalagem)',
	true,
    '/public/assets/images/XBOX_SERIES_X.png',
    now()
),
(
	'nintendo',
    'WII U',
    2199.99,
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    false,
    '/public/assets/images/WII_U.png',
    now()
);