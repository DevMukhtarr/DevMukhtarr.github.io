let button = document.getElementsByClassName('button');
let number =document.getElementById('number');
let counter = 0;

Add = () =>{
         counter++
         console.log(counter);
         number.innerHTML = counter;
}
reset = () =>{
    number.innerHTML = 0;
    counter = 0;
}

