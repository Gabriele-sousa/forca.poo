class Boneco{
    constructor(cabeca, corpo, pernaD, pernaE, bracoD, bracoE){
        this.c = cabeca; 
        this.cO = corpo;
        this.pD = pernaD;
        this.pE = pernaE;
        this.bD = bracoD;
        this.bE = bracoE;
    }
    desenharBoneco(p){
        //define se os pedaços do boneco estão ativos
        if(p == 1){
            this.c = 1;
        }else if(p == 2){
            this.cO = 1;
        }else if(p == 3){
            this.bD = 1;
        }else if(p == 4){
            this.bE = 1;
        }else if(p == 5){
            this.pD = 1;
        }else if(p == 6){
            this.pE = 1;
        }
        ctx.beginPath();
            if(this.c == 1){
                ctx.moveTo(280, 320);
                ctx.arc(280, 320, 10, 0, Math.PI * 2, true);
                this.c = 2;
                ctx.fillStyle = "white";
                ctx.fill();
            }else if(this.cO == 1){
                ctx.moveTo(280, 330);
                ctx.lineTo(280, 390);
                this.cO = 2;
            }else if(this.bD == 1){
                ctx.moveTo(280, 330);
                ctx.lineTo(260, 385);
                this.bD = 2;
            }else if(this.bE == 1){
                ctx.moveTo(280, 330);
                ctx.lineTo(300, 385);
                this.bE = 2;
            }else if(this.pD == 1){
                ctx.moveTo(280, 385);
                ctx.lineTo(260, 435);
                this.pD = 2;
            }else if(this.pE == 1){
                ctx.moveTo(280, 385);
                ctx.lineTo(300, 435);
                this.pE = 2;
            }
            setTimeout(() =>{
                if(p == 6){
                    alert('Você perdeu, vai estudar. A palavra era '+ f.p);
                    jogo();
                }
            }, 30);
            ctx.strokeStule = "white";
            ctx.stroke();
        ctx.closePath();
    }
    apagarBoneco(){
        ctx.fillStyle = "#1e3317";
        ctx.fillRect(250, 300, 60, 140);
        this.c = 0;
        this.cO = 0;
        this.bD = 0;
        this.bE = 0;
        this.pD = 0;
        this.pE = 0;
    }
}