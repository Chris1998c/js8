function multiplyByTwo(value) {
  let number = 2;

  function inner(){
    return value * number;
  }
    
  return inner;
  }


const risultatoFunzione = multiplyByTwo(18);
const risultato = risultatoFunzione();
console.log(risultato);