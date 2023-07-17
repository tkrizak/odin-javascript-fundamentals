// loop through array length and add each item to text

const fruits0 = ['Banana', 'Orange', 'Apple', 'Mango'];
let fLen = fruits0.length;

let text = '<ul>';
for (let i = 0; i < fLen; i++) {
  text += '<li>' + fruits0[i] + '</li>';
}
text += '</ul>';

console.log(text);

// forEach loops through array, push add item to last index

const fruits1 = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits1.push('Lemon');

let text2 = '<ul>';
fruits1.forEach(myFunction);
text2 += '</ul>';

function myFunction(value) {
  text2 += '<li>' + value + '</li>';
}

console.log(text2);

// remove last item from array

const fruit2 = ['Banana', 'Orange', 'Apple', 'Mango'];
let fruit = fruit2.pop();

console.log(fruit);

// add item to array (last item)

const fruits3 = ['Banana', 'Orange', 'Apple', 'Mango'];
let length = fruits3.push('Kiwi');

console.log(length);

// remove array of index and length

const fruits4 = ['Banana', 'Orange', 'Apple', 'Kiwi'];
fruits4.splice(1, 2);

console.log(fruits4);

// loop through each item in array return one by one

const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

for (const cat of cats) {
  console.log(cat);
}

// uppercase array strings

function toUpper(string) {
  return string.toUpperCase();
}

const cats2 = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

const upperCats = cats2.map(toUpper);

console.log(upperCats);

// filter out array starting with L

function lCat(cat) {
  return cat.startsWith('L');
}

const cats3 = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

const filtered = cats3.filter(lCat);

console.log(filtered);

/* const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter((cat) => cat.startsWith("L"));
console.log(filtered); */

//

const cats4 = ['Pete', 'Biggles', 'Jasmine'];

let myFavoriteCats = 'My cats are called ';

for (let i = 0; i < cats4.length; i++) {
  if (i === cats4.length - 1) {
    myFavoriteCats += `and ${cats4[i]}.`;
  } else {
    myFavoriteCats += `${cats4[i]}, `;
  }
}

console.log(myFavoriteCats);

/* const cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

let i = 0;

while (i < cats.length) {
  if (i === cats.length - 1) {
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }

  i++;
}

console.log(myFavoriteCats) */

//

const contacts = [
  'Chris:2232322',
  'Sarah:3453456',
  'Bill:7654322',
  'Mary:9998769',
  'Dianne:9384975',
];
const para = document.querySelector('p');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  const searchName = input.value.toLowerCase();
  input.value = '';
  input.focus();
  para.textContent = '';
  for (const contact of contacts) {
    const splitContact = contact.split(':');
    if (splitContact[0].toLowerCase() === searchName) {
      para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
      break;
    }
  }
  if (para.textContent === '') {
    para.textContent = 'Contact not found.';
  }
});
