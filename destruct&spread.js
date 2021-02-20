var array = ["un", "deux", "trois", "quatre"];
var [a, b, c, d] = array;

console.log(a, b, c, d);
// => un, deux, trois, quatre

// => Il est possible d'ignorer un élément
var [un, , trois, quatre] = ["α", "β", "γ", "δ"];

console.log(un, trois, quatre);
// => α, γ, δ

//Pour les objets on accéde avec les noms de propriétés
var newObject = { a: 1, b: 2, c: 3};
var { a, b, c} = newObject;
console.log(a, b, c);

// On peut nommer les paramètres récupérés
var newObject = { a: 1, b: 2, c: 3};
var { a: un, b: deux, c: trois} = newObject;
console.log(un, deux, trois);
// => 1, 2, 3
// Marche aussi dans des objets imbriqués
var mon_object = { a: 1, b: { sous_b: 2}, c: 3};
var { a: un, b: { sous_b: deux}, c: trois} = mon_object;
console.log(un, deux, trois);
// => 1, 2, 3

var [a, b, c] = [1, 2];
console.log(a, b, c);
// => 1, 2, undefined
var [a] = [];
console.log(a);
// => undefined