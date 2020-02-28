// UCU ou UCC ou UCA ou UCG ou AGU ou AGC => Sérine
// CCU ou CCC ou CCA ou CCG => Proline
// UUA ou UUG => Leucine
// UUU ou UUC => Phénylalanine
// CGU ou CGC ou CGA ou CGG ou AGA ou AGG => Arginine
// UAU ou UAC => Tyrosine

// CCGUCGUUGCGCUACAGC
// CCUCGCCGGUACUUCUCG


// Pour un codon donne :

// decouper en paquet de 3 characteres
// inserer chacun des paquets dans un tableau
// pour chacun des paquet evaluer sa valeur et sortir l'acide amine correspondant
// joindre chaque acide amine avec un '-'


function arnArray(arn) {
  let ary = [];
  ary.push(arn.match(/.{1,3}/g))
  convert(ary);
};

function convert(ary) {
  let amn = [];
    ary.forEach(codon => {
      for (let i = 0; i < codon.length; i++) {
        if (codon[i].substring(0,2) == "UC" || codon[i] == "AGU" || codon[i] == "AGC") {
        amn.push("Sérine");
        }else if (codon[i].substring(0,2) == "CC") {
          amn.push("Proline");
        }else if (codon[i] == "UUA" || codon[i] == "UUG"){
          amn.push("Leucine");
        }else if (codon[i] == "UUU" || codon[i] == "UUC"){
          amn.push("Phénylalanine");
        }else if (codon[i].substring(0,2) == "CG" || codon[i] == "AGA" || codon[i] == "AGG") {
          amn.push("Arginine");
        }else if (codon[i] == "UAU" || codon[i] == "UAC") {
          amn.push("Tyrosine");
        };
      }; 
    });
    print(amn);
};


function print(amn) {
  let acidesAmine = amn.join("-");
  console.log(acidesAmine)
};
arnArray("CCGUCGUUGCGCUACAGC");