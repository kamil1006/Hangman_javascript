// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')


const isSameSet = (s1, s2) => {
    function isContain(aSet, bSet){
        return ![...aSet].some(item => !bSet.has(item))
    }
    return isContain(s1, s2) && isContain(s2, s1);
};

const lista = ['python', 'java', 'swift', 'javascript'];

let kontynuacja = true;
let wygrane = 0;
let przegrane = 0;

//console.log("H A N G M A N");
console.log("H A N G M A N  # 8 attempts");
while (kontynuacja) {

    //console.log('Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit:');
    let polecenie = (input('Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit:'));
    if (polecenie == 'results') {
        console.log('You won: ' + wygrane + ' times.');
        console.log('You lost: ' + przegrane + ' times.');
    }else if(polecenie == 'exit')
            kontynuacja = false;
    else if(polecenie == 'play'){
        const wlosowano = lista[getRandom()];

        const zbior = new Set();
        for (let a = 0; a < wlosowano.length; a++) {
            zbior.add(wlosowano[a]);
        }
        //let propmta = "Guess the word: ";
        let propmta = "";
        let dl_wybor = wlosowano.length;
        let podciag = wlosowano.slice(0, 3);
        let dl_reszta = (dl_wybor - (podciag.length));
        //let do_pokazania = podciag+"-".repeat(dl_reszta);
        let do_pokazania = "-".repeat(dl_wybor);
        let do_znalezienia = wlosowano;

        let czy_wygrana = false;
        let attempts = 8;
        let zbior_strzalow = new Set();

        while (attempts > 0) {
            console.log();
            console.log(do_pokazania);
            const litera = input("Input a letter:");

            if (litera.length > 1 || litera.length === 0)
                console.log('Please, input a single letter.');
            else if (litera == litera.toUpperCase() || !(litera.charCodeAt(0) <= 123 && litera.charCodeAt(0) >= 97))
                console.log('Please, enter a lowercase letter from the English alphabet.');

            else if (zbior_strzalow.has(litera))
                console.log("You've already guessed this letter.");


            else if (zbior.has(litera)) {

                zbior_strzalow.add(litera);
                const zbior2 = new Set();
                for (let a = 0; a < do_pokazania.length; a++) {
                    zbior2.add(do_pokazania[a]);
                }
                /*
                if (zbior2.has(litera)) {
                    console.log('No improvements. ');
                    attempts = attempts - 1;

                }
                */


                for (let j = 0; j < dl_wybor; j++) {

                    if (do_znalezienia[j] == litera)
                        do_pokazania = do_pokazania.slice(0, j) + litera + do_pokazania.slice(j + 1, do_pokazania.length);


                    let zbior2 = new Set();
                    for (let a = 0; a < do_pokazania.length; a++)
                        zbior2.add(do_pokazania[a]);

                    if (isSameSet(zbior, zbior2)) {
                        czy_wygrana = true;
                        attempts = 0;
                    }


                }

            } else {
                zbior_strzalow.add(litera);
                console.log("That letter doesn't appear in the word. ");
                attempts = attempts - 1;
                console.log('# ' + attempts + ' attempts');


            }


        }
        console.log();
        if (!(czy_wygrana)) {
            console.log('You lost!');
            przegrane = przegrane + 1;
        } else {
            //console.log(do_znalezienia);
            console.log('You guessed the word ' + do_znalezienia + '!');
            console.log('You survived!');
            wygrane = wygrane + 1;
        }



    }






}
//   -------------------------------------------------------------









function getRandom() {
// Write your code here
    let min = 0;
    let max = 4 ;
    return Math.floor(Math.random() * (max - min)) + min;
}