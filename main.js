let inputValue = document.getElementById('value');


//funcion para escribir numero en el input
let writeN = (number) =>{
    inputValue.value = inputValue.value + number;
}


let clearNumber = () =>{
    inputValue.value = '';
}


let total = (inputVal) =>{
    inputValue.value = eval(inputVal);
}


let potencia = (value) =>{
   inputValue.value = Math.pow(value,prompt('Ingrese el exponente',''))
}

let raiz = (value) =>{
    inputValue.value = Math.pow(value,(1/(prompt('Ingrese el indice','2'))))
}

let porcentaje = (value) =>{
    inputValue.value = value/100;
}

let abs = (value) => {
    inputValue.value = Math.abs(parseFloat(value));
}

let trigonometria = (operacion) =>{
    inputValue.value = eval(operacion((parseFloat(inputValue.value) * Math.PI) / 180))
}

let logF = (value) =>{
    inputValue.value = ((Math.log(inputValue.value))/(Math.log(parseFloat(prompt('Ingrese la base','10')))))
}