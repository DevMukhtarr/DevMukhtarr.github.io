const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.calculator_keys');
let display = document.getElementById('display');

    keys.addEventListener('click', e =>{
    if(e.target.matches('button')){
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        let firstNum = display.textContent;
        // const secondNum = display.textContent;

       if(!action){
           if(display.textContent == '0'){
            display.innerHTML = key.textContent
           }else{
            firstNum = display.innerHTML += keyContent
            calculator.dataset.firstNum = firstNum
            // console.log(firstNum)
           }
       }
       if(action == 'clear'){
        // display.textContent = ''
        display.textContent = '0'
        
        // console.log(removed.valueOf(arr))
       }
       if(action == 'dot'){
        display.textContent = firstNum+'.'
       }
       if(action == 'add'){
           let num = firstNum+=keyContent;
           display.textContent = num;
        //    console.log(num)
       }
       if(action == 'minus'){
        let num = firstNum+=keyContent;
        display.textContent = num;
        // console.log(num)
    }if(action == 'divide'){
        let num = firstNum+=keyContent;
        display.textContent = num;
        // console.log(num)
    }if(action == 'multiply'){
        let num = firstNum+=keyContent;
        display.textContent = num;
        // console.log(num)
    }
       if(action == 'equal'){
           if(display.textContent != 0 && display.textContent !='' && display.textContent.includes('+')){
               let array = display.textContent.split('+')
               display.textContent = parseFloat(array[0])+parseFloat(array[1])
           }
           if(display.textContent != 0 && display.textContent !='' && display.textContent.includes('-')){
            let array = display.textContent.split('-')
            display.textContent = parseFloat(array[0])-parseFloat(array[1])
        }if(display.textContent != 0 && display.textContent !='' && display.textContent.includes('÷')){
            let array = display.textContent.split('÷')
            display.textContent = parseFloat(array[0])/ parseFloat(array[1])
        }if(display.textContent != 0 && display.textContent !='' && display.textContent.includes('x')){
            let array = display.textContent.split('x')
            display.textContent = parseFloat(array[0]) * parseFloat(array[1])
        }
       }
    }
    }) 