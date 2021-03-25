//JS5
var insiemeA = [1, 5, 5, 29, 652];
var insiemeB = [1, 5, 5, 29, 652, 1, 5, 5, 29, 652, 1, 5, 5, 29, 652];

if( insiemeA.length > insiemeB.length){
    while( insiemeA.length > insiemeB.length){
        insiemeB.push( Math.floor( Math.random()*1000 ) );
    }
}else{
    while( insiemeA.length < insiemeB.length){
        insiemeA.push( Math.floor( Math.random()*1000 ) );
    }
}

console.log(insiemeA);
console.log(insiemeB);






//JS4
/* var numeri = [535, 3, 5, -312, -4, 3, -23, 5, 48];
var somma = 0;

for(i=0; i<numeri.length; i++){
    if( i % 2 != 0)
    somma += numeri[i]
}

console.log(somma); */







//JS3
/* var nomi = ["Luca", "Giovanni", "Paolo" ];
var cognomi = ["Rossi", "Neri", "Bianchi"];
var invitati = [];

//JS3
for( i=0; i<3; i++){
    var randomNomi = Math.floor( Math.random()*3 );
    var randomCognomi = Math.floor( Math.random()*3 );
    invitati.push(nomi[randomNomi] + " " + cognomi[randomCognomi]);
}

console.log(invitati); */





//JS2
/* var numero = parseInt( prompt( "Inserire un numero pari" ) );
if(numero % 2 != 0){
    numero+= 1;
}

console.log(numero); */
                



//JS 1
/* var numeri = [];
var somma = 0;

/* for( i= 0; i < 5; i++){
    var numeroUtente = parseInt( prompt( "inserire un numero" ) );
    while( isNaN(numeroUtente) ){
        var numeroUtente = parseInt( prompt( "inserire un numero" ) );
    }

    numeri.push(numeroUtente);
    somma += numeroUtente;
} */

/* var i = 0
while (i < 5) {
    var numeroUtente = parseInt( prompt( "inserire un numero" ) );
    while( isNaN(numeroUtente) ){
        var numeroUtente = parseInt( prompt( "inserire un numero" ) );
    }
    numeri.push(numeroUtente);
    somma += numeroUtente;
    i++
} */

//console.log(somma); */

