function testDefaultParam(message = "message par défaut") {
  console.log(message);
}
/* testDefaultParam();
testDefaultParam("message du user"); */

function genericSomme(val1, val2, ...resteDesParams) {
    console.log(val1);
    console.log(val2);
    console.log(resteDesParams);
}
tableau = [1,2,3,4,5,6,7,8];
genericSomme(...tableau);

p => { /* Instructions */ };
(p1, …, pN) => { /* Instructions */ };

const saySomething = message => { console.log(message); };

//Si la fonction n’a pas de paramètre, on utilise les parenthèses vides :
() => { /* Instructions */ };
//Si l’instruction de la fonction retourne une expression, on écrit :
(p1, …, pN) => { return expression };
//La syntaxe peut être encore réduite à :
(p1, …, pN) => expression;
