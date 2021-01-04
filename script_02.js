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

/* Sors-moi la liste des titres des livres du CDI */
console.log("liste des titres du CDI :")
for(i=0; i<books.length; i++) {
  console.log(books[i].title)
}

/* Est-ce que tous les livres ont été empruntés au moins une fois ? */
for(i=0; i<books.length; i++) {
  if (books[i].rented > 0) {
    console.log("empruntés au moins une fois")
  }
  else {
    console.log(books[i].title + " n'a jamais été emprunté.")
  }
}

/* Quel est le livre le plus emprunté ? */
let rentedValueMax = []
for(i=0; i<books.length; i++) {
  rentedValueMax.push(books[i].rented);
}

console.log(Math.max(...rentedValueMax));

books.sort(function(a, b){
  if(a.rented > b.rented) { return -1; }
  if(a.rented < b.rented) { return 1; }
  return 0;
})
console.log('Le livre le plus emrpunté est ' + books[0].title + "(" + books[0].rented + " fois)");


/* Quel est le livre le moins emprunté ? */
let rentedValueMin = []
for(i=0; i<books.length; i++) {
  rentedValueMin.push(books[i].rented);
}

console.log(Math.min(...rentedValueMin));

books.sort(function(a, b){
  if(a.rented < b.rented) { return -1; }
  if(a.rented > b.rented) { return 1; }
  return 0;
})
console.log('Le livre le moins emrpunté est ' + books[0].title + "(" + books[0].rented + " fois)");

/* Supprime le livre avec l'ID 133712 */
const bookId = books.find(book => book.id == 133712);
console.log(bookId)

for (let i in books) {
  if (books[i].id === 133712) {
    books.splice(i, 1);
  }
}