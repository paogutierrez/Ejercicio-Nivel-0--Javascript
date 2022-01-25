let fahrenheit;
let gradosCentigrados = '';

function convertir(gradosCentigrados){

    fahrenheit = (gradosCentigrados * 1.8) + 32;

    return fahrenheit;
}

 alert(convertir(30));