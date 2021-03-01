const map = new Map();
// Ajouter et mettre à jour un élément

map.set("name", "selaouti");
console.log(map);
map.set("name", "sellaouti");
console.log(map);
map.set("prenom", "aymen");
console.log(map);
console.log("As tu une prompriété name ?? ", map.has("name"));
console.log("Quel est ta taille ?? ", map.size);
map.forEach((valeur, cle) => {
  console.log(`Je suis le champ ${cle} et ma valeur est ${valeur}`);
});
map.delete("name");
console.log(map);
console.log(map.get("prenom"));
console.log(map.values());
