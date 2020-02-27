function factorielle() {
    let n = parseInt(prompt("De quel nombre veux-tu la factorielle ?"));
    let result = n;
    for (let i = 1; n > i; i++) {
        result*= n-i;
    }
    return console.log(`Le résultat est ${result}`); 
}

factorielle();