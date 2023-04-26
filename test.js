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
// Decorating a christmas tree

// Define the base object
class Component {
  operation() {
    console.log("I am a component.");
  }
}

// Define the decorator class
class Decorator {
  constructor(component) {
    this.component = component;
  }

  operation() {
    this.component.operation();
  }
}

// Define the concrete decorators
class ConcreteDecoratorA extends Decorator {
  operation() {
    super.operation();
    console.log('Adding behavior from ConcreteDecoratorA.');
  }
}

class ConcreteDecoratorB extends Decorator {
  operation() {
    super.operation();
    console.log('Adding behavior from ConcreteDecoratorB.');
  }
}

// Usage
const component = new Component();
const decoratorA = new ConcreteDecoratorA(component);
const decoratorB = new ConcreteDecoratorB(decoratorA);

decoratorB.operation();


// Next - continue decorating a christmas tree 383