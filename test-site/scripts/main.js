// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';


let myImage = document.querySelector('img');

myImage.onclick=function () {
	let mySrc = myImage.getAttribute('src');
	if (mySrc == "images/firefox-icon.png") {
	// if(mySrc.match("firefox-icon"))//不行
		myImage.setAttribute('src','images/firefox2.png');
	}
	else{
		myImage.setAttribute('src','images/firefox-icon.png');
	}


}

/* 单引号和双引号好像都一样？
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src', 'images/firefox2.png');
    } else {
      myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}
*/

	
/*
element=document.getElementById('myimage')
if (element.src.match("bulbon"))
{
	element.src="/images/pic_bulboff.gif";
}
else
{
	element.src="/images/pic_bulbon.gif";
}
*/


let myButtom = document.querySelector('button');
let myHeading = document.querySelector('h1');


function setUserName() {
	let myName = prompt('请输入您的姓名。');
	if (!myName) {setUserName();}
	localStorage.setItem('name',myName);
	myHeading.textContent = 'Mozilla is cool，' + myName + '!';
}

if (!localStorage.getItem('name')) {
	setUserName();
}else{
	let storedName = localStorage.getItem('name');
	myHeading.textContent =  'Mozilla is cool, ' + storedName + '!';
}

myButtom.onclick = function(){
	setUserName();
}