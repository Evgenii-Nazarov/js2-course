const h1 = document.querySelector('h1');
const div = document.querySelector('.out');

console.log(h1.textContent)

// h1.style.background = 'red';
// div.style.background = 'red';

div.onclick = myFunction;

function myFunction () {
    div.classList.toggle('test')
}

const newElem = document.createElement('input');
document.querySelector('.out-1').appendChild(newElem);
