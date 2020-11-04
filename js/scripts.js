// <!-- iltimos birovning mehnati qadrlang -->
var formFizzBuzz = document.querySelector('.formFizzBuzz');
var inputNumber = formFizzBuzz.querySelector('.inputNumber');
var resultFizz = document.querySelector('.result-fizz');
var resultBuzz = document.querySelector('.result-buzz');
var resultFizzBuzz = document.querySelector('.result-fizzbuzz');
var fizzContainer = document.querySelector('.fizzContainer');
var buzzContainer = document.querySelector('.buzzContainer');
var fizzBuzzContainer = document.querySelector('.fizzBuzzContainer');
var fizz = 3 ;
var buzz = 5 ;

var fizzBuzzArray = [];
var fizzArray = [];
var buzzArray = [];


formFizzBuzz.addEventListener('submit' , function(evt){
  evt.preventDefault();
  var inputNumberValue = parseFloat(Math.round(inputNumber.value.trim()) ,10);
  
  if (isNaN(inputNumberValue)){
    alert('iltimos tekshirmang');
    inputNumber.value = "";
    inputNumber.focus();
    return
  }
  if (inputNumberValue < 2){
    alert('iltimos 2 va undan katta son kiriting :))');
    inputNumber.value = "";
    inputNumber.focus();
    return
  }
  fizzBuzzArray = [];
  fizzArray = [];
  buzzArray = [];
  
  fizzContainer.innerHTML = "" ;
  buzzContainer.innerHTML = "" ;
  fizzBuzzContainer.innerHTML = "" ;
  
  
  for(i = 1 ; i <= inputNumberValue ;i++){
    if(i<fizz){
      resultFizz.textContent = "0" ;
    }
    if(i<buzz){
      resultBuzz.textContent = "0" ;      
    }
    
    if(i< fizz * buzz){
      resultFizzBuzz.textContent = "0";
    }
    
    if(i % fizz === 0 && i % buzz === 0){
      fizzBuzzArray.push(i);
      resultFizzBuzz.textContent = fizzBuzzArray.length ; 
      var newFizzBuzz = document.createElement('p');
      newFizzBuzz.textContent = i ;
      fizzBuzzContainer.appendChild(newFizzBuzz);
    }
    
    if(i % fizz === 0 && i % buzz != 0){
      fizzArray.push(i);
      resultFizz.textContent = fizzArray.length ; 
      var newFizz = document.createElement('p');
      newFizz.textContent = i ;
      fizzContainer.appendChild(newFizz);
    }
    
    if(i % buzz === 0 && i % fizz != 0){
      buzzArray.push(i);
      resultBuzz.textContent = buzzArray.length ; 
      var newBuzz = document.createElement('p');
      newBuzz.textContent = i ;
      buzzContainer.appendChild(newBuzz);
    }
    
  }
  
})
