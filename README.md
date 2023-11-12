# forca.poo
## Autores
Gabriele Batista Sousa e Filipe Custodio Gonçalves

## Descrição
É um trabalho solicitado pela orientadora Nivea Maria, com o objetivo de fazer um jogo da forca com opção de adicionar palavras alem de advinhar.

## Estrutura do projeto
* index.html - página inicial do site .

* script/main.js - Arquivo JavaScript para adcionar interatividade com o site.

* script/classe - pasta com as classes.

* script/classe/forca - a classe que se refere a forca que escolhe as palavras e as divide em letras.

* script/classe/boneco - a classe que se refere ao boneco que será montado quando o jogador errar e caso completo termina o jogo.

## Desenvolvimeto
Para criar esse projeto foi necessario utilizar os seguintes passos:
1. Criar o `index.html` com a estrutura basica do HTML e adicionar o elemento `<canvas>` e chamar o JS.

```ruby
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <canvas id="c">
    </canvas>

    <script src="script/classes/Boneco.js"></script>
    <script src="script/classes/Forca.js"></script>
    <script src="script/main.js"></script>
</body>
</html>
```
2. Criar uma pasta para armazenar os scripts e uma para armazenar as classe.

* Primeira classe a se criar é a Classe forca, a classe forca tem os atributos: `palavras`, `palavra` e `letraPalavra`, sendo `palavras` o conjunto de palavras
predeterminadas, `palavra` é a palavra escolhida pela forca e `letrasPalavra` é o conjunto de letras que formam essa palavra.
* Metodos da forca, a classe possui apenas um método sendo este `escolherPalavra()` que escolhe a palavra e a separa em diversas letras.

3. Criar a Classe boneco
* A classe boneco tem os atributos: `cabeca`, `corpo`, `perdaD`, `pernaE`, `bracoD`, `bracoE` todos os atributos verificam a existencia da parte em questão.
* Métodos do boneco, a classe possui os métodos: `desenharBoneco()` e `apagarBoneco()`, o método `desenharBoneco()` é chamado quando o jogador erra ao escolher uma letra, caso todas as partes forem desenhadas o jogo é reiniciado e o método `apagarBoneco()` é chamado ao reiniciar o jogo.

4. Desenvolver o script principal:
* Declarar as constantes `c` para o `canvas`, `ctx` para o contexto do `canvas`, `b` para a classe do boneco e `f` para a classe da forca. Declarar as variáveis `ganhar` e `perder` e adicionar um evento de `keydown`, após as declarações o fundo é colorido, e são declaradas as funções `desenharPalavra()` e `jogo()`.

* `desenharPalavra()`: a função verifica a quantidade de letras da palavra escolhida e repete a ação de desenhar linhas em posições determinadas.

* `jogo()`: assim que iniciado apaga as linhas desenhadas e o boneco, seguido pelo desenho da forca. Chama o método `escolherPalavra()` e desenha a forca. 

* __Evento ao pressionar tecla:__ quando o jogador preciona uma tecla, é verificado que tecla foi pressionada. Caso a tecla seja o número 1 um aviso aparecerá pedindo para adicionar uma nova palavra ao atributo `palavras` e o jogo é reiniciado. Caso a tecla precionada não pertença a palavra escolhida o método `desenharBoneco()` é chamado. Caso 
a tecla precionada pertença a palavra escolhida, é verificado em que posições da palavra ela se encontra e é desenhado a letra na posição correta. Caso a palavra seja completa o jogo é finalizado e reiniciado.
