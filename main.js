
// character constructor

function Character(options) {
  var options = options || {};
  this.name = options.name || "person";
  this.eat = function (candy) {
    var munch = Math.floor(Math.random() * 2);
    console.log("yum! yum!");
    candy.consumed(munch);
  };
}


//candy constructor

function Candy() {
  this.pieces = 0;
  this.consumed = function(munch) {
    if(this.pieces <= 15) {
    this.pieces = this.pieces + munch;
    console.log("keep gobbling!");
    } else if (this.pieces===20) {
    console.log("Perfect amount! You are satisfied");
    } else {
    console.log("Too much candy, you're sick!");
    }
  };
}
