let menu = document.querySelector('.menu--items--mobile');
let ball = document.querySelector('#ball');
let text = document.querySelector('.my-intro');
let intro = "Hello, I am Abdulfatai Mukhtar a software developer.";
let introDiv = document.querySelector('.my-intro');
let i = 0;

toggle.addEventListener('click', () =>{
    menu.classList.toggle('active');
})
ball.onclick = () =>{
    document.body.classList.toggle('dark');
    ball.classList.toggle('move');
    text.classList.toggle('color-change');
}
typerForIntro = () =>{
    if(i < intro.length){
        introDiv.innerHTML += intro.charAt(i);
        i++
        setTimeout(typerForIntro, 100);
    }
}
typerForIntro()