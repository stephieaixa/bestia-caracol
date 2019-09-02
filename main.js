//esto es para cambiar la imagen al hacer click

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'Imágenes wellness/logo duplicado.png') {
      myImage.setAttribute ('src','Imágenes wellness/6 copy.png');
    } else {
      myImage.setAttribute ('src','Imágenes wellness/logo duplicado.png');
    }
}
//ponemos un botón personalizado para el saludo

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Bienvenido a FisioWellness, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Bienvenido a FisioWellness, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}