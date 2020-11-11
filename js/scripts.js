//varlarni belgilab olamiz

var formFizzBuzz = document.querySelector('.formFizzBuzz');
var inputNumber = formFizzBuzz.querySelector('.inputNumber');
var resultFizz = document.querySelector('.result-fizz');
var resultBuzz = document.querySelector('.result-buzz');
var resultFizzBuzz = document.querySelector('.result-fizzbuzz');
var fizzContainer = document.querySelector('.fizzContainer');
var buzzContainer = document.querySelector('.buzzContainer');
var fizzBuzzContainer = document.querySelector('.fizzBuzzContainer');

//fizzni va buzzni magic number bo'lmasligi uchun fizz va buzz nomli o'zgaruvchiga solib olamiz

var fizz = 3 ;
var buzz = 5 ;

// fizz buzz va fizzbuzz ga tegishli bo'lgan sonlarni alohida massivlarga solib olamiz

var fizzBuzzArray = [];
var fizzArray = [];
var buzzArray = [];

//formani submit holatini tinglaymiz.

formFizzBuzz.addEventListener('submit' , function(evt){
  
  evt.preventDefault();
  //formani yuborilishini o'chirib qo'yamiz
  
  var inputNumberValue = parseFloat(Math.round(inputNumber.value.trim()) ,10);
  
  // sonning faqat raqamligini tekshiramiz
  if (isNaN(inputNumberValue)){
    
    alert('iltimos tekshirmang');
    inputNumber.value = "";
    inputNumber.focus();
    return;
    
  }
  // sonning 2dan kattaligini tekshiramiz
  if (inputNumberValue < 2){
    
    alert('iltimos 2 va undan katta son kiriting :))');
    inputNumber.value = "";
    inputNumber.focus();
    return;
    
  }
  //fizz buzz va fizzbuzz arraylarni bo'shatib olamiz
  
  fizzBuzzArray = [];
  fizzArray = [];
  buzzArray = [];
  
  //fizz buzz fizzbuzz array nattijalari chiqadigan html larni boshatib olamiz
  
  fizzContainer.innerHTML = "" ;
  buzzContainer.innerHTML = "" ;
  fizzBuzzContainer.innerHTML = "" ;
  
  //counter qo'shamiz
  for(i = 1 ; i <= inputNumberValue ;i++){
    
    //fizzgacha yoki buzzgacha yoki fizzbuzz gacha bo'lgan son kiritilganda resultlarni boshlang'ich qiymatlarini 0 ga tenglashtirib olamiz
    
    if(i<fizz){
      resultFizz.textContent = "0" ;
    }
    if(i<buzz){
      resultBuzz.textContent = "0" ;      
    }
    
    if(i< fizz * buzz){
      resultFizzBuzz.textContent = "0";
    }
    
    //birinchi fizzbuzz ga tegishli elementlarni belgilab olamiz
    if(i % fizz === 0 && i % buzz === 0){
      // topgandan so'ng fizzbuzz arrayga push qilamiz
      fizzBuzzArray.push(i);
      // natijani ekranga chiqaramiz yani nechtaligini
      resultFizzBuzz.textContent = fizzBuzzArray.length ; 
      // elementni create qilib olamiz qaysiki aynan qaysi sonlar ekanligini ko'rsatish uchun va qiymatlarni tenglashtirib append qilib qo'yamiz
      var newFizzBuzz = document.createElement('p');
      newFizzBuzz.textContent = i ;
      fizzBuzzContainer.appendChild(newFizzBuzz);
    }
    //ish tepada aytilgan algoritmga asosan qaytadan davom etadi
    
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
  
});
