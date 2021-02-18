const monObjet = {
  maMethode1() {
    console.log("hello");
  },
  maMethode2(arg1, arg2) {
    console.log(arg2);
  },
};
/* monObjet.maMethode1();
//	=>	"hello"
monObjet.maMethode2("banana", true); */
//	=>	true
//	Equivalent	ES5
const monObjetES5 = {
  maMethode1: function () {
    console.log("hello");
  },
  maMethode2: function (arg1, arg2) {
    console.log(arg2);
  },
};

const firstname =  'aymen';
const name =  'aymen';

const user = {
    firstname,
    name
}
console.log(user);