let menu = document.querySelector('.menu--items--mobile');
let intro = "Hello, I am Abdulfatai Mukhtar a backend engineer.";
let introDiv = document.querySelector('.my-intro');
let bar = document.querySelector('.fa-bars')
let i = 0;
let body = document.querySelector('.body--about')

bar.addEventListener('click', () =>{
    menu.classList.toggle('active');
})

typerForIntro = () =>{
    if(i < intro.length){
        introDiv.innerHTML += intro.charAt(i);
        i++
        setTimeout(typerForIntro, 100);
    }
}
typerForIntro()