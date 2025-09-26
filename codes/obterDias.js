function ehBissexto(ano){
    return ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0)
}

function obterDias(ano, mes){
    if(mes<1 || mes>12 || ano<1){
        return 0;
    }

    if(mes==1 || mes==3 || mes==5 || mes==7 || mes==8 || mes==10 || mes==12){
        return 31;
    }

    if(mes==2){
        if(ehBissexto(ano)==true){
            return 29;
        } else{
            return 28;
        }
    }

    if(mes==4 || mes==6 || mes==9 || mes==11){
        return 30;
    }
}

console.log(obterDias(0, 7))