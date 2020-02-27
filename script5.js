const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];
//Est-ce que tous les livres ont été au moins empruntés une fois ?
function rented(books){
  let ary = []
  for (const index in books) {
    if ((books[index].rented) > 1 ) {
      ary.push(true);
    }else{
      ary.push(false);
      console.log("Au moins un livre n'a pas ete emprute")
      break;
    }
  }
  console.log("Tous les livres ont ete empruntes au moins une fois");
};

rented(books);

//  -----------------------

books.sort(function(a, b){
  let x = a.rented;
  let y = b.rented;
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
});

//Quel est le livre le moins emprunté ?
console.log(books[0]);

//Quel est livre le plus emprunté ?
console.log(books[books.length-1]);

//Trouve le livre avec l'ID: 873495 ;
console.log(books.find(obj => obj.id === 873495));

//Supprime le livre avec l'ID: 133712 ;
let removeIndex = books.map(function(item) { return item.id; }).indexOf(133712);
books.splice(removeIndex, 1);
console.log(books);

//Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).

books.sort(function(a, b){
  let x = a.title;
  let y = b.title;
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
});
console.log(books);