/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
  const sum = function(){//DICHIARATA FUNZIONE
  var valore1 = 10;//VARIABILE CON UN VALORE NUMERICO
  var valore2 = 20;//VARIABILE CON UN VALORE NUMERICO
  console.log(valore1+valore2);//COSNOLE LOG
  }
sum(10+20);//FUNZIONE RICHIAMATA

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
const elementi = function(){//DICHIARATA FUNZIONE
let ar = [];//DICHIARATO ARRAY
for(let i = 0; i < 10; i++){//CICLO FOR
  ar.push(Math.floor(Math.random() * 20));//ESEGUE IL PUSH DEL NUMERO 
}console.log(ar);//COSNOLE LOG
}
elementi()//FUNZIONE RICHIAMATA

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
var me = {//VARIABILE RICHIAMATA
  nome: 'Vincenzo',//PROPRIETA OGGETTO 
  surname: 'Paluszewski',//PROPRIETA OGGETTO
  age: 24//PROPRIETA OGGETTO
};
console.log(me)//COSNOLE LOG

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
var me = {//VARIABILE RICHIAMATA
  nome: 'Vincenzo',//PROPRIETA OGGETTO
  surname: 'Paluszewski',//PROPRIETA OGGETTO
  age: 24//PROPRIETA OGGETTO
}
delete me.age;//ELIMINAZIONE DELLA PRPRIETA OGGETTO AGE
console.log(me)//CONSOLE LOG

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ['HTML','CSS','JAVASCRIPT']//ARRAY CON LE SKILL AGGIUNTO
console.log(me)//CONSOLE LOG
 

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push('');//PUSH PER AGGIUNGERE UNA SKILL
console.log(me);//CONSOLE LOG

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop('');//POP PER RIMUOVERE L'ULTIMA SKILL AGGIUNTA
console.log(me)//CONSOLE LOG

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
function dice(){//DICHIARATA FUNZIONE
  return 1 + Math.floor(Math.random() * 6);//RESTITUIAMO I VALORI DA 1 A 6
}
for(let i = 0;i < 5; i++) console.log(dice());//CICLO FOR E CONSOLE LOG


/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
const whoIsBigger = (v1,v2) =>{//DICHAIRO LA FUNZIONE
  if(v1 > v2) console.log(`Valore a: ${v1} è maggiore di Valore b: ${v2}`)//NEL CASO V1 SIA MAGGIORE
  if(v1 < v2) console.log(`Valore a: ${v1} è maggiore di Valore b: ${v2}`)//NEL CASO V2 SIA MAGGIORE
  if(v1 == v2) console.log(`Valore a: ${v1} è maggiore di Valore b: ${v2}`)//NEL CASO ENTRAMBI SIANO UGUALU
};
whoIsBigger(2,4)//RICHIAMO LA FUNZIONE


/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
const splitMe = (stringa) => console.log(stringa.split(" "));//DICHIARO LA FUNZIONE CON UN CONSOOLE LOG
splitMe("I love coding");//RICHIAMO LA FUNZIONE

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
const deleteOne = (stringa, booleano) => {// DICHIARO STRNGA E BOLLEANO E SE BOOLEANO E TRUE
  if (booleano) {
    console.log(stringa.slice(1, stringa.length));//SE BOOLEANO E FALSE
  }
  else {
    console.log(stringa.slice(0, -1));
  }
};
deleteOne("SpiderMan", false);//RICHAMO LA FUNZIONE
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
const onlyLetters = (str) => console.log(str.replace(/[0-9]?/g,""));//DICGIARO LA FUNZIONE E IL CONSOLE LOG
onlyLetters("I have 4 dogs");//RICHIAMO LA FUNZIONE

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
const isThisAnEmail = (str) => {//DICGIARO LA FUNZIONE
  let regexPerMail =//USO LA REGEX PER FAR IL CHECK DELL'EMAIL
    /^(([^<>;()[].,;:s@"]+(.[^<>()[].,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
  if (regexPerMail.test(str)) {//SE IL TEST E VERO L'EMAIL E VALIDA
    console.log(`${str} è una email valida!`);
  } else {//SE IL TEST E FALSE L'EMAIL NON E VALIDA
    console.log(`${str} NON è una email valida!`);
  }
};
isThisAnEmail('viper')//RICHIAMO LA FUNZIONE
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
const whatDayIsIt = () => {//DICHIARO LA FUNZIONE
  let now = new Date();//IMPOSTO LA DATA
  console.log(now);//CONSOLE LOG
  console.log(now.getDay());//CONSOLE LOG CON IL GIORNO CORRENTE
};
whatDayIsIt();//RICHIAMO LA FUNZIONE
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
const rollTheDices = (n) => {//DICHIARO LA FUNZIONE
  let obj = {//CREO DUE OGGETTI VUOTI
    sum: 0,
    values: [],
  };
  for (let i = 0; i < n; i++) {//CICLO FOR PER AGGIUNGERE DEI VALORI AGLI ARRAY
    const roll = dice();//ROLL E UN NUMERO CASUALE
    obj.values.push(roll);//PUSHO VASLORI NELL'ARRAY ANCH'ESSI CASUALI
    obj.sum += roll;//SOMMO I VALORI
  }
  console.log(obj);//COONSOLE LOG CON L'OGGETTO CREATO
};
rollTheDices(dice());//RICHIAMO LA FUNZIONE
/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
const howManyDays = (date) => {// DICHIARO LA FUNZIONE
  let milSecondPerDay = 1000 * 60 * 60 * 24;//MILLISECONDI IN UNA GIORNATA
  let oggi = new Date();//DATA DI OGGI
  let giornoDaComp = new Date(date);//UTILIZZO UN PARAMETRO
  let differenza = Math.floor((giornoDaComp - oggi) / milSecondPerDay);//OTTENGO LA DIFFERENZA DIVIDENDO I MILLISECONDI
  console.log(//CONSOLE LOG
    `Ci sono ${differenza} giorni di differenza tra "${oggi}" e "${giornoDaComp}"`
  );
};
howManyDays("10/07/2022");//RICHIAMO LA FUNZIONE CON UNA DATA CASUALE
/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
let oggi = new Date();//DICHIARO LA FUNZIONE
console.log(oggi);//CONSOLE LOG

const isTodayMyBirthday = (dataOggi) => {
  let myBirthday = new Date("06/15/2022");//AGGIUNGO IL MIO COMPLEANNO
  if (myBirthday === dataOggi)//SE OGGI E UGUALE AL M9IO COMPLEANNO ALLORA IL RISULTATO E TRUE
    console.log("E' il mio compleanno!");//CONSOLE LOG
  else {//SE NON E IL MIO COMPLEANNO IL RISULTATO E FALSE
    console.log("Non è il mio compleanno!");//CONSOLE LOG
  }
};
isTodayMyBirthday(oggi);//RICHIAMO LA FUNZIONE

//==========GLI ESERCIZI DI ARRAY E OGGETTI SONO IN FONDO ALLA PAGINA==========//

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
    'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
    },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
    },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
const deleteProp = (object, stringa) => {//DICHIARO LA FUNZIONE
  for (let prop in object) {//USO IL CICLO FOR PER OGNI PROPRIETA DELL'OBJECT
   if (object[prop] === stringa) {//SE L'OBJECT è UGUALE ALLA STRINGA LO SI RIMUOVE
     delete object[prop];
   }
 }
 console.log(object);//CONSOLE LOG
};
objecto = {//RICHIAMO LA FUNZIONE CON UN OGGETTO INVENTATO
  name: "I",
  preposizione: "love",
  locazione: "coding",
};
deleteProp(objecto, I);//RICHIAMO LA FUNZIONE
/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
const newestMovie = (array) => {//DICHIARO LA FUNZIONE
  let recente = array.reduce((previous, current) => {
    if (previous.Year < current.Year) return current;//SE YEAR E MAGGIORE DEL PRECEDENTE RITORNA IL FILM CORRENTE
    else return previous;//NEL CASO CONTRARIO SE YEAR E MINORE DEL PRECEDENTE RIPORTA IL PRECEDENTE
  });
  console.log(recente);//CONSOLE LOG
};
newestMovie(movies);//RICHIAMO LA FUNZIONE
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
const countMovies = (array) => console.log(array.length);//DICHIARO LA FUNZIONE
countMovies(movies);//RICHIAMO LA FUNZIONE
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
const onlyTheYears = (array) => console.log(array.map((element) => element.Year));//DICHIARO LA FUNZIONE
onlyTheYears(movies);//RICHIAMO LA FUNZIONE
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
const onlyInLastMillennium = (array) =>//DICHIARO LA FUNZIONE
  console.log(array.filter((element) => element.Year < 2000));//CONSOLE LOG
onlyInLastMillennium(movies);//RICHIAMO LA FUNZIONE
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
const sumAllTheYears = (array) => {//DICHIARO LA FUNZIONE
  console.log(array);//CONSOLE LOG
  let sum = array.reduce((allaccumulatore, element) => (allaccumulatore += Number(element.Year)), 0);//TRASFORMO IN STRINGA YEAR E AGGIUNGO ALL'ACCUMULATORE 0
  console.log(sum);//CONSOLE LOG
};
sumAllTheYears(movies);//RICHIAMO LA FUNZIONE
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
const searchByTitle = (stringa) =>//DICHIARO LA FUNZIONE
  console.log(//CONSOLE LOG
    movies.find((element) => element.Title.toLowerCase().includes(stringa.toLowerCase()))//USO INCLUDE CHE MI FA TORNARE UN BOOLEANO
  );
searchByTitle("The Avengers");//RICHIAMO LA FUNZIONE
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
const searchAndDivide = (stringa) => {//DICHIARO LA FUNZIONE
  let object = { match: [], unmatch: [] };//CREO L'OBJECT CON DUE ARRAY VUOTI
  movies.forEach((element) => {//OGNI ELEMENTO MOVIESE
    if (element.Title.toLowerCase().includes(stringa.toLowerCase())) {//SE IL TITOLO HA DELLE STRINGHE
      object.match.push(element);//SI PUSHA NELL'ARRAY VUOTO CREATO E CHIAMATO MATCH
    } else {
      object.unmatch.push(element);//ALTRIMENTI PUSHALO NELL'ARRAI VUOTO CREATO E CHIAMATO UNMATCH
    }
  });
  console.log(object);//CONSOLE LOG
};
searchAndDivide("Lord of the Flies");//RICHIAMO LA FUNZIONE CON UN ESEMPIO DI UN FILM
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log(movies);//CONSOLE LOG
const removeIndex = (n) => {//DICHIARO LA FUNZIONE
  let copiaArray = [...movies];//VREO UNA COPIA DELL'ARRAY
  copiaArray.splice(n, 1);//USO SPLICE PER ELIMINARE L'ELEMENTO
  console.log(copiaArray);//CONSOLE LOG
};
removeIndex(6);//RICHIAMO LA FUNZIONE
// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
function seleziona(){//DICHIARO LA FUNZIONE
  document.getElementById('cointainer')//IDENTIFICO L'ID CONTAINER
}
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
function tuttiTag(){//DICHIARO LA FUNZIONE
  document.getElementsByTagName('td')//IDENTIFICO IL TAG 
} 
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
var el = document.getElementsByTagName('td');//IDENTIFICO IL TAG SELEZIONANDOLO
for(var i = 0;i < el.length; i++){//USO IL CICLO FOR
  console.log( el[i].innerHTML);//CONSOLE LOG
}
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
const sfondo = function(){//DICHIARO LA FUNZIONE
const sfondo = document.getElementById('a').style.backgroundColor = 'red';//USO L'ID PER SELEZIONARE A COSA ATTRIBBUIRE IL COLORE ROSSO
}
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
/*const nuovoPunto = function (_content) {//DICHIARO LA FUNZIONE
  let lista = document.querySelector('#myList');//RICHIAMO L'ID 
  let elementoLista = document.createElement('li');//CREO L'ELEMENTO DENTRO LA LISTA CON IL PROPRIO TAG
  elementoLista.textContent = 'Nuovo ingrediente';//INSERISCO IL NOME CHE SI TROVA ALL'INTERNO DEL TAG
  lista.appendChild(elementoLista);//INSERISCO UN NUOVO NODO ALLA FINE DELLA LISTA DEI FIGLI DEL PARAGRAFO
}
nuovoPunto();//RICHIAMO LA FUNZIONE
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
/*function svuotare(){//DICHIARO LA FUNZIONE
 document.getElementById('myList')//RICHIAMO L'ID DELLA LISTA
  $('#myList').empty();//SVUOTO LA LISTA
}
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
/*const test = function (){//DICHIARO LA FUNZIONE
  document.querySelector('tr').className = 'test';//RICHIAMO IL TR E GLI DO LA CLASSE TEST
   }
   test()//RICHIAMO LA FUNZIONE
   
   
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
