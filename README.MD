<h1 align="center">
    Projeto: <a href="https://vivamazonia.github.io/">VIVAMAZONIA</a>
</h1>
<h3>
    Equipe: Harpia
</h3>
<h3>
    Membros: 
</h3>
<ul>
    <li>Abdias Matos</li>
    <li>Antonio Sapucaia</li>
    <li>Enayle Santos</li>
    <li>Jonathan Monteiro</li>
    <li>Vinicius Correia</li>
</ul>
<h3 align="center">
    Cliente: Greenpeace Fortaleza
</h3>
<p>O projeto foi criado para a cadeira de Projeto Integrado I pela equipe Harpia para o cliente Greenpeace Fortaleza.</p>
<p>O jogo interativo foi criado para atender a necessidade de uma maneira lúdica e divertida de conscientizar as crianças sobre a floresta amazônica, apesar de muito importante para fauna e flora brasileira vem sofrendo problemas como queimadas, tráfico de animais silvestres, poluição e desmatamento.</p>
<p>O jogo foi criado para o público alvo de crianças de 7 à 10 anos de idade.</p>

<table>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>


<h3>
    Requisitos funcionais
</h3>
<table>
    <tr><b>
        <td>Referência</td>
        <td>Função</td>
        <td>Descrição</td>
        <td>Categoria</td>
    </b></tr>
    <tr>
        <td>RF_F1</td>
        <td>Diálogo</td>
        <td>Em pontos do jogo o personagem a Júlia aparece com o uma caixa de diálogo representando o que ela está dizendo</td>
        <td>Evidente</td>
    </tr>
    <tr>
        <td>RF_F2</td>
        <td>Navegação entre telas</td>
        <td>O jogador poderá selecionar qual mini-game ele gostaria de jogar. Será apresentado um tela com 4 problemas ambientais: Queimadas, Poluição, Desmatamento e Tráfico de animais; e a sede do Greenpeace para receber informações e conseguir a carteirinha do Greenpeace. Com o clique do mouse o jogador será redirecionado para a tela correspondente.</td>
        <td>Evidente</td>
    </tr>
    <tr>
        <td>RF_F3</td>
        <td>Mecânica de encontrar os animais</td>
        <td>Antes de apagar o fogo o jogador terá que procurar 4 animais na mata em chamas, na seguinte ordem: 1º onça, 2º aves(tucano e harpia) e 3º anta.</td>
        <td>Evidente</td>
    </tr>
    <tr>
        <td>RF_F4</td>
        <td>Início jogo queimadas</td>
        <td>Quando clicado em iniciar mini-game o jogo começará com 5 pontos de queimada que deverão ser apagados, se todos os pontos pegarem fogo o jogo acaba em derrota.</td>
        <td>Evidente</td>
    </tr>
    <tr>
        <td>RF_F5</td>
        <td>Fogo se alastrando queimadas</td>
        <td>Com o passar de 2 segundos uma nova área aleatória iniciará um incêndio.</td>
        <td>Evidente</td>
    </tr>
    <tr>
        <td>RF_F6</td>
        <td>Apagar fogo queimadas</td>
        <td>Com o clique do mouse o incêndio na área é apagado. Quando todos os incêndios forem apagados o jogo acabará com a vitória do jogador.</td>
        <td>Evidente</td>
    </tr>
    <tr>
        <td>RF_F7</td>
        <td>Selecionar lixos</td>
        <td>Na tela serão apresentados 10 lixos distribuídos no rio e na margem, o jogador deverá clicar com o mouse no lixo que ele gostaria de interagir e arrastar para a lixeira que ele quer jogar.</td>
        <td>Evidente</td>
    </tr>
    <tr>
        <td>RF_F8</td>
        <td>Jogar lixo correto</td>
        <td>Com o clique no lixo e depois na lixeira correspondente do lixo (Ex: garrafa de vidro na lixeira de vidro) a rede é esvaziada para selecionar o próximo lixo.</td>
        <td>Evidente</td>
    </tr>
    <tr>
        <td>RF_F9</td>
        <tdJogar lixo errado></td>
        <td>Com o clique no lixo e depois na lixeira não correspondente do lixo (Ex: garrafa de vidro na lixeira de papel) o jogo pausa e a Júlia comunica o erro e pede para tentar novamente.</td>
        <td>Evidente</td>
    </tr>
    <tr>
        <td>RF_F10</td>
        <td>Carregamento para soltura do animal</td>
        <td>Colocando o ponteiro do mouse em cima da jaula do animal, o contador é incrementado simbolizando o progresso de soltura do animal. Quando a barra de progresso estiver concluída o animal estará livre e será levado para a sede</td>
        <td>Evidente</td>
    </tr>
    <tr>
        <td>RF_F11</td>
        <td>Esconder da lanterna</td>
        <td>Se o mouse continuar na jaula quando a lanterna estiver ligada ao máximo ele é encontrado, a Júlia comunica a derrota e terá que reiniciar. </td>
        <td>Evidente</td>
    </tr>
    <tr>
        <td>RF_F12</td>
        <td>Trocar de ferramenta</td>
        <td>Quando carregado o jogo, 4 “ferramentas” serão apresentados para o jogador escolher qual utilizar entre: Pá, Enxada, Muda e Regador. Para selecionar a ferramenta o jogador deverá clicar com o mouse, assim o ponteiro do mouse se transformará na ferramenta escolhida.</td>
        <td>Evidente</td>
    </tr>
    <tr>
        <td>RF_F13</td>
        <td>Usar ferramenta pá</td>
        <td>Quando selecionado uma ferramenta o jogador clicará no ponto para ajudar a reflorestar. Para usar a pá, deverá clicar no ponto quando tronco cortado.</td>
        <td>Evidente</td>
    </tr>
    <tr>
        <td>RF_F14</td>
        <td>Usar ferramenta enxada</td>
        <td>Quando selecionado uma ferramenta o jogador clicará no ponto para ajudar a reflorestar. Para usar a enxada, deverá clicar no ponto quando buraco.</td>
        <td>Evidente</td>
    </tr>
    <tr>
        <td>RF_F15</td>
        <td>Plantar muda</td>
        <td>Quando selecionado uma ferramenta o jogador clicará no ponto para ajudar a reflorestar. Para plantar a muda, deverá clicar no ponto quando a terra arada.</td>
        <td>Evidente</td>
    </tr>
    <tr>
        <td>RF_F16</td>
        <td>Agoar muda</td>
        <td>Quando selecionado uma ferramenta o jogador clicará no ponto para ajudar a reflorestar. Para usar o regador, deverá clicar no ponto quando muda plantada.</td>
        <td>Evidente</td>
    </tr>
    <tr>
        <td>RF_F17</td>
        <td>Catálogo</td>
        <td>O Catálogo dos animais do jogo é apresentado para o jogador saber mais sobre os animais da amazônia, os animais ficam bloqueados até o resgate nas fases queimadas e tráfico de animais.</td>
        <td>Evidente</td>
    </tr>
</table>