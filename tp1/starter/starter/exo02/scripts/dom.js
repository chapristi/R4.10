
let divTP2 = document.createElement('div');
divTP2.id=  'divTP2';

let text1 = document.createTextNode('Langages basés sur ECMAScript : ');

let ul = document.createElement('ul');
let li1 = document.createElement('li');
li1.textContent = 'JavaScript';
let li2 = document.createElement('li');
li2.textContent = 'JScript';
let li3 = document.createElement('li');
li3.textContent = 'ActionScript';
li4 = document.createElement('li');
li4.textContent = 'EX4';
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);

divTP2.appendChild(text1)
divTP2.appendChild(ul);
document.body.appendChild(divTP2)