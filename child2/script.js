function playMusic() {
  var audio = new Audio('happy.mp3');
  audio.play();
}


let myImage = document.querySelector('img');

myImage.onclick=function () {
  let mySrc = myImage.getAttribute('src');
  let x = document.getElementById("text");
  if (mySrc == "childhood.jpg") {
    myImage.setAttribute('src','childhood1.jpg');
    x.innerHTML="真聪明，好像还可以点回去呢!"; 
  }
  else{
    myImage.setAttribute('src','childhood.jpg');
    x.innerHTML="也许可以点点图片？"; 
  }
}


// let myButtom = document.querySelector('button');
// let myHeading = document.querySelector('h1');

// function setUserName() {
//   let myName = prompt('让我看看是哪个宝宝？');
//   if (!myName) {setUserName();}
//   localStorage.setItem('name',myName);
//   myHeading.textContent = '儿童节快乐呀，林，还有' + myName + '!';
// }

// if (!localStorage.getItem('name')) {
//   setUserName();
// }else{
//   let storedName = localStorage.getItem('name');
//   myHeading.textContent =  '儿童节快乐呀，林，还有' + storedName + '!';
// }

// myButtom.onclick = function(){
//   setUserName();
// }