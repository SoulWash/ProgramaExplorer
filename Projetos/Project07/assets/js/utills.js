export function IMC(iW, iH) {
    return (iW / ((iH/100) ** 2)).toFixed(2);
  }
  
export function notNumber(value){
    return isNaN(value) || value == "";
  }