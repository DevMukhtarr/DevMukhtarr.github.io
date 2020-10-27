change = () =>{
    let content = document.getElementById('text').value;
    //regex are the vowels
    const regex = /a|e|i|o|u/ig
    let gotten = content.match(regex)
    let newChange = document.getElementById('tochange')
                            if(gotten.length > 1){
                        newChange.innerHTML = `${gotten} are the vowels seen in this word`;
                             }else{
                                    newChange.innerHTML = `${gotten} is the vowel seen in this word`;
                                    }
    const number = document.getElementById('number')
            if(gotten.length > 1){
                    number.innerHTML = gotten.length+" Vowels in the word";
             }else{
                number.innerHTML = gotten.length+" Vowel in the word";
                    }
    
    text.value = '';
}