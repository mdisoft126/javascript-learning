//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Chapter 11 Coding and Design Patterns
////// Desing patterns
//// Decorator pattern
// Decorating a christmas tree v2

// object tree and deorator method
var tree = {};
tree.decorate = function() {
  console.log("Make sure that the tree don't fall");
}

// created getDecorator method
tree.getDecorator = function(deco) {
  tree[deco].prototype = this;
  return new tree[deco];
}

// Red Balls decorator
tree.RedBalls = function() {
  this.decorate = function() {
    this.RedBalls.prototype.decorate();
    console.log("Put on some red balls");
  }
}

// Blue Balls decorator
tree.BlueBalls = function() {
  this.decorate = function() {
    this.BlueBalls.prototype.decorate();
    console.log("Add blue balls");
  }
}

// Angel decorator
tree.Angel = function() {
  this.decorate = function() {
    this.Angel.prototype.decorate();
    console.log("An Angel on the top");
  }
}

tree = tree.getDecorator("BlueBalls");
tree = tree.getDecorator("Angel");
tree = tree.getDecorator("RedBalls");

tree.decorate();


// Next - Observer pattern 384