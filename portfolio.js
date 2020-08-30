//intro is the introduction
let intro = "Hello, I\'m Abdulfatai Mukhtar, a Front-end Developer.";
let love = "And i love what i do"
let i = 0;
typeForIntro = () =>{
    if(i < intro.length){
        document.getElementById('name').innerHTML += intro.charAt(i);
        //the div you'll be sending the text which is intro to
        i++;
        setTimeout(typeForIntro, 100)
}
};
typeForIntro();