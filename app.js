alert("Jogo do Numero Secreto :P");
let maxNumber = 100;
let secretNumber = parseInt(Math.random()*maxNumber+1);
let attempts = 10;
let goingAttemps = 0;
let guessNumber = -1;

console.log(secretNumber);


while(secretNumber != guessNumber && attempts != goingAttemps){
    guessNumber = prompt(`digite um número ente 1 e ${maxNumber}, ${attempts} tentativas`);
    goingAttemps ++;

    if(secretNumber == guessNumber){

        let wordTentativa = goingAttemps > 1 ? "tentativas" : "tentativa";

        alert(`Você descobriu o Número secreto: ${secretNumber} em ${goingAttemps} ${wordTentativa}`)
        /*
        switch(goingAttemps){
            case 1:
                alert(`Você descobriu o número secreto: ${secretNumber} em ${goingAttemps} tentativa`);
                break;
            
            default:
                alert(`Você descobriu o número secreto: ${secretNumber} em ${goingAttemps} tentativas`);
                break;
        }
        break;
        */
    } else{
        if(secretNumber < guessNumber){
            alert(`o número secreto é menor que ${guessNumber}`);
        }
        else if(secretNumber > guessNumber){
            alert(`o número secreto é maior que ${guessNumber}`);
        }
    }

    if(attempts == goingAttemps){
        alert("game over");

    }

}
