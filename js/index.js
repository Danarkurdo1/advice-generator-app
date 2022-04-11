var img  = document.getElementById('img');
var winWidth = window.innerWidth;

if(winWidth >= 768){
    img.src = "img/pattern-divider-desktop.svg";
}else{
    img.src = "img/pattern-divider-mobile.svg";
}

var id = document.getElementById('id');
var advice = document.getElementById('advice');

const api_url = 'https://api.adviceslip.com/advice';
async function getAdvice(){
    const response = await fetch(api_url);
    const data = await response.json();
    id.textContent = data.slip.id ;
    advice.textContent = data.slip.advice;
}

getAdvice();
