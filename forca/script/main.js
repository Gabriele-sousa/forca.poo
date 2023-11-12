
const c = document.getElementById('c');
const ctx = c.getContext('2d');
c.width = window.innerWidth;
c.height = window.innerHeight;
//classes
const b = new Boneco();
const f = new Forca();
//variaveis de contagem para ganhar ou perder
var ganhar;
var perder;
//início
alert("Bem vindo ao jogo da velha! Para adicionar novas palavras pressione 1");
//pinta o fundo de verde
ctx.fillStyle = "#1e3317";
ctx.fillRect(0,0,c.width, c.height);
//função de desenhar o tracejado da palavra
function desenharPalavra(){
    for(let i = 0; i < f.lP.length; i++){
        var x;
        x = 330 + (i * 80);
        ctx.beginPath();
        ctx.moveTo(x, 2 * c.height / 3);
        ctx.lineTo(x + 50, 2 * c.height / 3);
        ctx.lineWidth = 10;
        ctx.strokeStyle = "white";
        ctx.stroke();
        ctx.closePath();
    }
}
//função do jogo em si
function jogo(){
    //zera o contador e apaga o boneco
    ganhar = 0;
    perder = 0;
    b.apagarBoneco();
    //apaga a palavra
    ctx.fillStyle = "#1e3317";
    ctx.fillRect(330,c.height / 3,c.width, c.height);
    //escolhe uma nova palavra
    f.escolherPalavra();
    //desenha a fora em si
    ctx.beginPath();
    ctx.moveTo(70, 2 * c.height / 3);
    ctx.lineTo(70, 240);
    ctx.lineTo(280, 240);
    ctx.lineTo(280, 300);
    ctx.moveTo(0, 2 * c.height / 3);
    ctx.lineTo(320, 2 * c.height / 3);
    ctx.lineWidth = 10;
    ctx.strokeStyle = "white";
    ctx.stroke();
    ctx.closePath();
    desenharPalavra();
};
//adiciona o evento do teclado
addEventListener("keydown", (e) =>{
        //adiciona novas palavras
        if(e.key === "1"){
            let word;
            word = prompt('Por favor, insira uma nova palavra');
            console.log(word);
            f.pS.push(word);
            console.log(f.pS);
            alert("palavra adicionada, reiniciando o jogo");
            jogo();
        }else if(!f.lP.includes(e.key)){
            //verifica se a letra existe na palavra
            perder += 1;
            b.desenharBoneco(perder);
        }
        //procura a letra na palavra e a desenha
        for(let i = 0; i <= f.lP.length; i++){
            if(e.key == f.lP[i]){
                ctx.fillStyle = "white";
                ctx.font = "30px Arial";
                ctx.fillText(f.lP[i].toUpperCase(), 340 + (i * 80), 2 * (c.height / 3) - 20);
                //tira a letra encontrada para evitar repetição
                f.lP[i] = null;
                //adiciona um ponto para ganhar
                ganhar += 1;
            }     
        }
        //verifica se ganhou o jogo
        setTimeout(() =>{
            if(ganhar == f.lP.length){
                alert('PARABENS!! Você venceu');
                //reinicia o jogo
                jogo();
            }
        }, 30);
});
//inicia o jogo
jogo();


