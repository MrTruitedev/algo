// Exercice 1 : écrire 50 fois "Bonjour" dans la console.
console.log("Exercice 1");
for (let i = 0; i < 50; i++) {
    console.log("Bonjour");
}

// Exercice 2 : écrire dans la console :
// A
// B
// A
// B
// A
// B
// A
// B
// A
// B
console.log("Exercice 2");
for (let i = 0; i < 5; i++) {
    console.log("A");
    console.log("B");
}

// Exercice 3 : écrire dans la console :
// A
// A
// A
// A
// A
// B
// A
// A
// A
// A
// A
// B
// A
// A
// A
// A
// A
// B
console.log("Exercice 3");
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
        console.log("A");
    }
    console.log("B");
}
// Exercice 4 : écrire dans la console :
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
console.log("Exercice 4");
// let a = 0;
// while(a<10) {
//     a++;
//     console.log(a)
// }

// Correction
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// Exercice 5 : écrire dans la console :
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
console.log("Exercice 5, moi");
let b = 3;
while (b < 13) {
    b++;
    console.log(b);
}

console.log("Exercice 5, correction1");
let exo5 = 3;
for (let i = 0; i < 10; i++) {
    console.log(exo5);
    exo5++;
}
console.log("Exercice 5, correction2");
for (let i = 3; i < 13; i++) {
    console.log(i);
}
console.log("Exercice 5, correction3");
for (let i = 0; i < 10; i++) {
    console.log(i + 3);
}

// Exerice 6 : écrire dans la console :
// 0
// 1
// 2
// 3
// 0
// 1
// 2
// 3
// 0
// 1
console.log("Exercice 6, moi");
let c = 0;
for (let i = 0; i < 2; i++) {
    let c = 0;
    for (let i = 0; i < 4; i++) {
        console.log(c);
        c++;
    }
}
console.log(c);
c++;
console.log(c);

console.log("Exercice 6, correction1");
for (let j = 0; j < 2; j++) {
    for (let i = 0; i < 4; i++) {
        console.log(i);
    }
}
console.log(0);
console.log(1);

console.log("Exercice 6, correction2");
let exo6b = 0;
for (let i = 0; i < 10; i++) {
    console.log(exo6b);
    exo6b++;
    if (exo6b == 4) {
        exo6b = 0;
    }
}

console.log("Exercice 6, correction3");
let exo6t = 0;
for (let i = 0; i < 10; i++) {
    console.log(exo6t);
    exo6t = (exo6t + 1) % 4;
}

console.log("Exercice 6, correction4");
for (let i = 0; i < 10; i++) {
    console.log(i % 4)
}

// Exercice 7 : écrire dans la console :
// 0
// 1
// 2
// 3
// 4
// A
// A
// A
// 8
// 9
console.log("Exercice 7");
for (let i = 0; i < 10; i++) {
    if (i < 5 || i > 7) { // i < 5 OU i > 7
        console.log(i);
    } else {
        console.log("A");
    }
}

console.log("Exercice 7, correction2");
for (let i = 0; i < 10; i++) {
    if (i >= 5 && i <= 7) { // i<5 ET i>7
        console.log("A");
    } else {
        console.log(i);
    }
}

// Exercice 8 : écrire dans la console :
// 100
// 1
// 2
// 103
// 4
// 5
// 106
// 7
// 8
// 109
console.log("Exercice 8");


// Exercice 9 : écrire dans la console :
// 0
// 101
// 202
// 3
// 104
// 205
// 6
// 107
// 208
// 9
console.log("Exercice 9");
for (let i = 0; i < 10; i++) {
    if (i % 3 == 0) {
        console.log(i);
    } else {
        if (i % 3 == 1) {
            console.log(i + 100);
        } else {
            console.log(i + 200);
        }
    }
}
// Exercice 10 : écrire dans la console tous les résultats possibles de lancers de deux dés :
// 1 1
// 1 2
// 1 3
// ...
// 6 4
// 6 5
// 6 6
console.log("Exercice 10");
for(let i=1 ; i<7 ; i++){
    for(let j=1 ; j<7 ; j++){
    console.log(i,j);
    }
}


// Exercice 11 : adapter l'exercice précédent pour enlever les doublons (on ne veut pas afficher 1 2 et 2 1, mais seulement l'un des deux).
console.log("Exercice 11");
for(let i=1 ; i<7 ; i++){
    for(let j=1 ; j<7 ; j++){
        if(i<=j){
    console.log(i,j);
        }
    }
}


// Exercice 12 : en prenant des dés à 20 faces, combien de résultats différents (sans doublon) peut-on afficher ? (Autrement dit : adapter le code précédent pour compter les résultats au lieu de les afficher)
console.log("Exercice 12");
let result = 1;
for(let i=1 ; i<21 ; i++){
    for(let j=1 ; j<21 ; j++){
        if(i<=j){
    result ++;
        }
    }
}
console.log(result);

// Exercice 13 : afficher la table de multiplication de 1 (de 1 à 9):
// 1x1 = 1
// 1x2 = 2
// 1x3 = 3
// 1x4 = 4
// 1x5 = 5
// 1x6 = 6
// 1x7 = 7
// 1x8 = 8
// 1x9 = 9
console.log("Exercice 13");
for(let i=1; i<2 ; i++){
    for(let j=1 ; j<10 ; j++){
        let result13 = i*j;
        console.log(i,"x",j, "=", result13);
    }
}

// Exercice 14 : que faut-il modifier du code précédent pour obtenir la table de 2 :
// 2x1 = 2
// 2x2 = 4
// 2x3 = 6
// 2x4 = 8
// 2x5 = 10
// 2x6 = 12
// 2x7 = 14
// 2x8 = 16
// 2x9 = 18
console.log("Exercice 14");
for(let i=2; i<3 ; i++){
    for(let j=1 ; j<10 ; j++){
        let result13 = i*j;
        console.log(i,"x",j, "=", result13);
    }
}

// Exercice 15 : comment généraliser pour afficher toutes les tables de multiplication de 1 à 9 :
// 1x1 = 1
// 1x2 = 2
// 1x3 = 3
// 1x4 = 4
// ...
// 9x7 = 63
// 9x8 = 72
// 9x9 = 81
console.log("Exercice 15");
for(let i=1; i<10 ; i++){
    for(let j=1 ; j<10 ; j++){
        let result13 = i*j;
        console.log(i,"x",j, "=", result13);
    }
}

// Exercice 16 : calculer 1+2+3+4+...+99+100. (Vous devriez trouver 5050)
console.log("Exercice 16");
let result16 = 1;
for(let i=1 ; i<100 ; i++){
    result16++;
    result16 = i + result16;
}
    console.log(result16);
// Exercice 17 : trouver le nombre n tel que 1+2+3+4+5+...+(n-1)+n = 302253
console.log("Exercice 17");
let result17 =1;
let resultb = 1;
while (resultb<302253){
    result17++;
    resultb = resultb + result17;
}
    console.log(resultb);

// Exercice 18 : Afficher :
// 1
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34
// 55
console.log("Exercice 18");
let result18 = 0;
let g = 1;
let k = 1;
for(let i=0 ; i<10 ; i++){
    if(i == 0){
        result18 = result18 + g;
        console.log(result18);
    }else if(i == 1){
        console.log(result18);
    }else if(i == 3){
        result18 = result18 +(result18);
        console.log(result18);
    }else{
        result18 = result18 +(result18-k);
        console.log(result18);
        k++;
    }
}



// Exercice 19 : compter combien il y a de nombres multiples de 3 ou de 7 entre 1234 et 5678
console.log("Exercice 19");
let result19 = 0;
for(let i=1234 ; i<5679 ; i++){
    if(i%3 == 0){
        result19 ++;
    }else if(i%7 == 0){
        result19 ++;
    }
}
console.log(result19);

// Exercice 20 : afficher dans la console :
/*
 *
 **
 ***
 ****
 *****
 */
console.log("Exercice 20");

// Exercice 21 : afficher dans la console :
/*
 *
 **
 ***
 ****
 *****
 */
console.log("Exercice 21");
// TODO

// Exercice 22 : afficher dans la console :
/*
 *
 ***
 *****
 *******
 *********
 */
console.log("Exercice 22");
// TODO

// Exercice 23 : afficher dans la console :
/*
 *
 ***
 *****
 *******
 *********
 *******
 *****
 ***
 *
 */
console.log("Exercice 23");
// TODO