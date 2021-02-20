function creerPersonne(nom, age) {
  // propriétés
  this.nom = nom;
  this.age = age;
  // méthode
  this.log = function () {
    console.log(this.nom + "  a  " + this.age + " ans.");
  };
}
var aymenSellaouti = new creerPersonne("Aymen Sellaouti", 38);

class Personne {
  constructor(nom, age) {
    // propriétés
    this.nom = nom;
    this.age = age;
  }

  log() {
    console.log(`${this.nom} a ${this.age} ans`);
  }
}

class Admin extends Personne {
  #privateValue;
  constructor(nom, age, email, password) {
    super(nom, age);
    this._email = email;
    this.password = password;
    this.#privateValue = 20;
    Admin.status++;
  }
  static status = 1;
  get email() {
    return `L'email est : ${this._email}`;
  }

  set email(email) {
    if (email.includes("@")) {
      this._email = email;
    } else {
      console.log("email must contain @");
    }
  }

  static whoIAm() {
    console.log("I am an admin");
  }
  log() {
    super.log();
    console.log("cc");
    console.log(`mon email est : ${this._email}`);
  }
}

const admin = new Admin(
  "aymen sellaouti",
  38,
  "aymen.sellaouti@gmail.com",
  "123456"
);
admin.log();
admin.email = "newEmail";
admin.log();
Admin.whoIAm();
console.log(Admin.status);
console.log(admin.#privateValue);