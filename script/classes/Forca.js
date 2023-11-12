class Forca{
    constructor(palavra, palavras, letrasPalavra){
        this.p = palavra;           //palavra escolhida
        this.pS = palavras;         //palavras disponiveis para escolher
        this.lP = letrasPalavra;    //letras da palavra escolhida
    }
    escolherPalavra(){
        this.pS = [
            "pamonha", "cidade", "pindamonhangaba",
            "paralelepipedo", "maça", "concha",
            "estojo", "aviso", "monitor", "pixel",
            "gabinete", "composto", "cowboy", "show",
            "cavalheiro", "ventania", "saxofone",
            "trompete", "feitiçeiro", "amoeba",
            "tesouro", "ritual","cobra","sombra",
            "ornitorrinco", "loop", "colosso", "amigo",
            "inferno", "lua", "vinte", "italiano", "html",
            "urso", "palhaço", "termo", "godzilla", "estrela"
        ];
        //escolhe uma palavra aleatória
        let word = Math.floor(Math.random() * this.pS.length);
        this.p = this.pS[word];
        this.lP = this.p.split("");
    }
}