

// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

$(document).ready(function(){

  // - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.

  var studente = {
    "nome" : "Mario",
    "cognome" : "Rossi",
    "eta" : 24
  }

  // -Stampare a schermo attraverso il for in tutte le proprietà;
  console.log("Ciclo for...in proprietà studente");
  for (var key in studente) {
    console.log();
    console.log(key + ": " + studente[key]);
  }

  // - Creare un array di oggetti di studenti.

  studenti = [
    {
      "nome" : "Paolo",
      "cognome" : "Brosio",
      "eta" : 24
    },
    {
      "nome" : "Gianni",
      "cognome" : "Morandi",
      "eta" : 37

    },
    {
      "nome" : "Gengis",
      "cognome" : "Khan",
      "eta" : 460
    }
  ]

  // -Ciclare su tutti gli studenti e stampare per ognuno nome e cognome;

  console.log("Ciclo for in studenti nome e cognome");
  for (var i = 0; i < studenti.length; i++) {
    console.log(studenti[i].nome,studenti[i].cognome);
  }

  // - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

  var nomeIns = prompt("Inserisci il tuo nome")
  var cognomeIns = prompt("Inserisci il tuo cognome")
  var etaIns = parseInt(prompt("Inserisci la tua età"))

  studenti.push({"nome" : nomeIns,"cognome" : cognomeIns,"eta" : etaIns})
  console.log(studenti);
})
