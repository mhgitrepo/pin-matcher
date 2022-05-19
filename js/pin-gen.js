function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinStr = pin + '';
    if(pinStr.length === 4){
        return pin
    } else{
        //console.log('got 3 digit and calling the function again', pin);
        return getPin();
    }
}
function generatePin(){
    const pin = getPin();
    // console.log(pin);
    
    document.getElementById('pin-gen-input').value = pin;
}

//type your pin
document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    //check number or not
    if(isNaN(number)){
        // console.log(number);
        if(number === 'C'){
            calcInput.value = '';
        }
    }
    else{
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
});

//verify pin
function verifyPin(){
    const generatedPin = document.getElementById('pin-gen-input').value;
    const typedNumbers = document.getElementById('typed-numbers').value;

    const verificationSuccess = document.getElementById('verification-success');
    const verificationFail = document.getElementById('verification-fail');

    if(generatedPin === typedNumbers){
        verificationSuccess.style.display = 'block';
        verificationFail.style.display = 'none';
    } else{
        verificationSuccess.style.display = 'none';
        verificationFail.style.display = 'block';
    }
}