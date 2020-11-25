const $campo0 = document.querySelector('.campo-0')
const $campo1 = document.querySelector('.campo-1')
const $campo2 = document.querySelector('.campo-2')
const $campo3 = document.querySelector('.campo-3')
const $campo4 = document.querySelector('.campo-4')
const $campo5 = document.querySelector('.campo-5')
const $campo6 = document.querySelector('.campo-6')
const $campo7 = document.querySelector('.campo-7')
const $campo8 = document.querySelector('.campo-8')
const $campos = document.querySelectorAll('.campo-jogada')
const $placarJogador1 = document.querySelector('.marcador-placar-1')
const $placarJogador2 = document.querySelector('.marcador-placar-2')
const $camposList = document.querySelectorAll('.campo-jogada')
const $checkBoxBot = document.querySelector('.botao-dentro-wrapper')
const $bolinhaBot = document.querySelector('.ball-wrapper')
const $checkBoxMd = document.querySelector('.box-selecionar-quantidade')
const $bolinhaMd = document.querySelector('.ball')
const $placarList = document.querySelectorAll('.placar')
const $botaoJogar = document.querySelector('.botao-jogar')
const $botaoReiniciar = document.querySelector('.botao-reiniciar')
const $VezCampeao = document.querySelector('.span-placar')
const $Jogador1 = document.querySelector('.campo-wrapper')
const $historicoJogada1 =document.querySelector('.campo-historico-jogada-1')
const $historicoJogada2 =document.querySelector('.campo-historico-jogada-2')
const $historicoJogada3 =document.querySelector('.campo-historico-jogada-3')
const $historicoJogada4 =document.querySelector('.campo-historico-jogada-4')
const $historicoJogada5 =document.querySelector('.campo-historico-jogada-5')
const $historicoJogada6 =document.querySelector('.campo-historico-jogada-6')
const $historicoJogada7 =document.querySelector('.campo-historico-jogada-7')
const $historicoJogada8 =document.querySelector('.campo-historico-jogada-8')
const $historicoJogadaList =document.querySelectorAll('.historico-jogada')
const $localHistoricoJogada1 =document.querySelector('.local-historico-jogada-1')
const $localHistoricoJogada2 =document.querySelector('.local-historico-jogada-2')
const $localHistoricoJogada3 =document.querySelector('.local-historico-jogada-3')
const $localHistoricoJogada4 =document.querySelector('.local-historico-jogada-4')
const $localHistoricoJogada5 =document.querySelector('.local-historico-jogada-5')
const $localHistoricoJogada6 =document.querySelector('.local-historico-jogada-6')
const $localHistoricoJogada7 =document.querySelector('.local-historico-jogada-7')
const $localHistoricoJogada8 =document.querySelector('.local-historico-jogada-8')
const $localHistoricoJogadaList =document.querySelectorAll('.local-historico-jogada')
const $campinho1 =document.querySelector('.campinho-historico-1')
const $campinho2 =document.querySelector('.campinho-historico-2')
const $campinho3 =document.querySelector('.campinho-historico-3')
const $campinho4 =document.querySelector('.campinho-historico-4')
const $campinho5 =document.querySelector('.campinho-historico-5')
const $campinho6 =document.querySelector('.campinho-historico-6')
const $campinho7 =document.querySelector('.campinho-historico-7')
const $campinho8 =document.querySelector('.campinho-historico-8')
const $campinho9 =document.querySelector('.campinho-historico-9')
const $campinhoList =document.querySelectorAll('.campinho-historico')

const linha1 = [$campo0, $campo1, $campo2]
const linha2 = [$campo3, $campo4, $campo5]
const linha3 = [$campo6, $campo7, $campo8]
const coluna1 = [$campo0, $campo3, $campo6]
const coluna2 = [$campo1, $campo4, $campo7]
const coluna3 = [$campo2, $campo5, $campo8]
const diagonal1 = [$campo0, $campo4, $campo8]
const diagonal2 = [$campo2, $campo4, $campo6]

const linhas = [linha1, linha2, linha3, coluna1, coluna2, coluna3, diagonal1, diagonal2]

let jogadaAtual = 'x';

let vencedor = undefined;

let pontoJogador1 = 0;
let pontoJogador2 = 0;

const placares = [$placarJogador1, $placarJogador2]

const minNumeroAleatorio = 0;
const maxNumeroAleatorio = 8;

let bot = false;

let md = false;

let campeao = undefined;

let clicou = false;
let clicouReiniciar = false;




function adicionaEventoCampos() {
    for (const $campo of $campos) {
        $campo.addEventListener('click', function () {
            if (clicou == false) {
                return
            }
            if ($campo.textContent != '' || vencedor != undefined) return;
            $campo.innerHTML = jogadaAtual;
            verificarVencedor()
            verificarVelha()
            if (vencedor != undefined) {
                adicionaPonto()
                resetRodada()
                imprimiPontuação()
            }
            alternaJogada()
            if (bot == true) {
                jogadaBot();
            }
            if (md == false) {
                verificarCampeaoMd3();
            }
            if (md == true) {
                verificarCampeaoMd5();
            }
        })
    }
}

function alternaJogada() {
    if (jogadaAtual == 'x') {
        jogadaAtual = 'o';
        $VezCampeao.innerHTML = 'Vez Jogador 2'
    } else {
        jogadaAtual = 'x';
        $VezCampeao.innerHTML = 'Vez Jogador 1';
    }
}


function verificarVencedor() {
    for (linha of linhas) {
        if (linha[0].textContent != '' && linha[0].textContent == linha[1].textContent && linha[1].textContent == linha[2].textContent) {
            vencedor = jogadaAtual;
        }
    }
}

function verificarCampeaoMd3() {
    if ($placarJogador1.textContent == '3') {
        campeao = 'jogador1';
        $VezCampeao.innerHTML = 'Jogador 1 Venceu';
        limpaPlacar()
        clicou = false
        $botaoJogar.innerHTML = 'Jogar'
        return
    }
    if ($placarJogador2.textContent == '3') {
        campeao = 'jogador2';
        $VezCampeao.innerHTML = 'Jogador 2 Venceu';
        limpaPlacar()
        clicou = false
        $botaoJogar.innerHTML = 'Jogar'
        return
    }
}


function verificarCampeaoMd5() {
    if ($placarJogador1.textContent == '5') {
        campeao = 'jogador1';
        $VezCampeao.innerHTML = 'Jogador 1 Venceu';
        limpaPlacar()
        clicou = false
        $botaoJogar.innerHTML = 'Jogar'
        return
    }
    if ($placarJogador2.textContent == '5') {
        campeao = 'jogador2';
        $VezCampeao.innerHTML = 'Jogador 2 Venceu';
        limpaPlacar()
        clicou = false
        $botaoJogar.innerHTML = 'Jogar'
        return
    }
}

function adicionaPonto() {
    if (vencedor == 'x') {
        pontoJogador1 = pontoJogador1 + 1;
    }
    if (vencedor == 'o') {
        pontoJogador2 = pontoJogador2 + 1;
    }
}


function imprimiPontuação() {
    $placarJogador1.innerHTML = pontoJogador1;
    $placarJogador2.innerHTML = pontoJogador2;
}

function limpaCampos() {
    for (campo of $camposList) {
        campo.textContent = ''
    }
}

function limpaPlacar() {
    for (const placar of $placarList) {
        placar.textContent = '0'
    }
    pontoJogador1 = 0;
    pontoJogador2 = 0;
}

function resetRodada() {
    limpaCampos();
    vencedor = undefined
}

function verificarVelha() {
    let camposPreenchidos = 0;

    for (campo of $camposList) {
        if (campo.textContent != '') {
            camposPreenchidos = camposPreenchidos + 1;
        }

    }
    if (camposPreenchidos == 9 && vencedor == undefined) {
        vencedor = 'velha';
    }
}

adicionaEventoCampos();

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function jogadaBot() {
    const numeroAletorio = getRandomInt(minNumeroAleatorio, maxNumeroAleatorio)
    const $campo = $campos[numeroAletorio];
    if ($campo.textContent != '') return jogadaBot();
    $campo.innerHTML = jogadaAtual;
    verificarVencedor()
    verificarVelha()
    if (vencedor != undefined) {
        adicionaPonto()
        resetRodada()
    }
    imprimiPontuação()
    alternaJogada();
}


function ativaBot() {
    $checkBoxBot.addEventListener('click', function () {
        if (clicou == true) {
            return
        }
        if (bot == true) {
            bot = false
        } else {
            bot = true
        }
    })
}
ativaBot();

function trocaMd() {
    $checkBoxMd.addEventListener('click', function () {
        if (clicou == true) {
            return
        }
        if (md == false) {
            md = true
        } else {
            md = false
        }
    })
}

trocaMd()

function começaJogo() {
    $botaoJogar.addEventListener('click', function () {
        if (clicou == false) {
            clicou = true
            $botaoJogar.innerHTML = 'Pausar'
            $VezCampeao.innerHTML = 'Vez Jogador1' ;

        } else {
            clicou = false
            $botaoJogar.innerHTML = 'Jogar'
        }

    })

}

começaJogo()

function reiniciar() {
    $botaoReiniciar.addEventListener('click', function () {
        if (clicouReiniciar == false) {
            clicouReiniciar = true
            limpaCampos()
            limpaPlacar()
            clicou = false
            $botaoJogar.innerHTML = 'Jogar'
        } else {
            clicouReiniciar = false
        }
    })
}

reiniciar()

function imprimiHistoricoJogada() {
    for (const $campo of $camposList) {
        $campo.addEventListener('click,', function () {
        })
    }
}

function imprimiHistoricoRodada() {

}


//fsdbjkakjfgitgit