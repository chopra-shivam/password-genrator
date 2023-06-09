
const resultEl = document.getElementById("result");
const upperEl = document.getElementById("uppercase");
const lowerEl = document.getElementById("lowercase");
const numberEl = document.getElementById("numbers");
const symbolEl = document.getElementById("symbols");
const copyEl = document.getElementById("clipboard");

const lengthEl = document.getElementById("pass");
const genEl = document.getElementById("gen");



const randomFunc={
    lower:getRandomLower,
    upper:getRandomUpper,
    number:getRandomNumber,
    symbols:getRandomSymbols

};
genEl.addEventListener('click',function ready()
{ const length = +lengthEl.value;
  const hasLower = lowerEl.checked;
  const hasUpper = upperEl.checked;
  const hasnumber = numberEl.checked;
  const hassymbol = symbolEl.checked;

    resultEl.innerText= 
    genratepassword(
        length,
        hasLower,
        hasUpper,
        hasnumber,
        hassymbol);
});
function genratepassword(length,lower,upper,number,symbols){
    let genratepassword = '';
    const counting =lower + upper + number + symbols;
    const arrcount= [{lower},{upper},{number},{symbols}].filter(
        item => Object.values(item)[0]

    );

    if(counting===0){
        return ' ';
    }
    for(let i =0 ;i <length;i +=counting){
        arrcount.forEach(type =>{
            const funcName = Object.keys(type)[0];
            genratepassword += randomFunc[funcName]();
        });
    }
    const final = genratepassword.slice(0,length);
    return final;

}


function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
}
function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
}
function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
}
function getRandomSymbols(){
    const symbols="!@#$%&*(){}[]<>?/"
    return symbols[Math.floor(Math.random()*symbols.length)];
}
