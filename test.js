//// shortcuts:
// ctr + F10 --> run
// clg --> console.log
// shift + alt + down arrow --> duplicate line / ctrl + d --> duplicate line
// shift + ctrl + k --> remove line
// {selected code} + ctrl + shift + l --> insert console log

////

////////// Chapter 11 Coding and Design Patterns
////// Coding patterns
//// Lazy definition


<<<<<<< HEAD
=======
// function for creating elements in the document
var MYAPP = MYAPP || {};                                // version for non browser environment. return string

MYAPP.dom = {};

MYAPP.dom.Element = function(type, properties) {
  var tmp = '<' + type;

  for (var i in properties) {
    if (properties.hasOwnProperty(i)) {
      tmp += ' ' + i + '="' + properties[i] + '"';
    }
  }

  tmp += '>' + (properties.innerHTML || '') + '</' + type + '>';

  return tmp;
};


// initialization
var myElement = MYAPP.dom.Element('div', {
    'class': 'my-class',
    'data-id': '12345',
    'innerHTML': 'Hello, world!'
  });
//   document.body.appendChild(myElement);          // for browser environment
  
  console.log(myElement);


>>>>>>> 9375c2740aa1e81216c84e5476ad89b7ec73ee59
// Next Configuration object 366