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
    console.log(pin);
    
    document.getElementById('pin-gen-input').value = pin;
}