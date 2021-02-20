function Voiture() {
  this.kilometres = 100;
  console.log(this.kilometres);
  setTimeout(
    function () {
      console.log("this : ", this);
      this.kilometres += 10;
      console.log(this.kilometres);
    }.bind(this),
    1000
  );
}
new Voiture();
// => 100 ... 110

function Voiture() {
  this.kilometres = 100;
  console.log(this.kilometres);
  setTimeout(() => {
    console.log("this", this);
    this.kilometres += 10;
    console.log(this.kilometres);
  }, 1000);
}
new Voiture();
