/* mensajes de bienvenida */

alert("Bienvenido al simulador del seguro de tu auto");
alert("a continuacion te pediremos unos datos");

/* Se piden datos al usuario */

let name = prompt("ingrese su nombre y apellido");
let email = prompt("Ingrese su Email");
let city = prompt("ingrese su ciudad");
let brandCar = prompt("Ingrese la marca de su auto");
let yearCar = parseInt(prompt("Ingrese el año de su auto"));



function brand(brandCar){ /* En funcion a la marca del auto se le asigna un valor */
    let price = "";
    switch(brandCar){
        case "chevrolet":
            price = 12000;
            break;
        case "ford":
            price = 13500;
            break;
        case "peugeot":
            price = 15750;
            break;
        case "renault":
            price = 11200;
            break;
        case "fiat":
            price = 10000;
            break;
        case "nissan":
            price = 14000;
            break;
        case "honda":
            price = 16000;
            break;
        case "audi":
            price = 21000;
            break;
        case "bmw":
            price = 25000;
            break;
    }
    return(price);
}

function year(yearCar){ /* en funcion del año del auto se le suma un porcentaje al valor de la funcion brand */
    let priceYear="";
    if(yearCar==2022){
        priceYear=brand(brandCar);
    }else{
        let year = (2022-yearCar)*2; /* cada año de antiguedad el auto se le suma un 2% al valor del seguro */
        priceYear = brand(brandCar)-((brand(brandCar)*year)/100); /* aumento del 2% del valor del seguro dependiendo la antiguedad */;
    }
    return(priceYear);
}

console.log(brand(brandCar));
console.log(year(yearCar));

alert("Señor/a: " + name + ", En base a los datos ingresados el costo del seguro para su auto es de: $ " + year(yearCar));
alert("La cotizacíon fue envidada al Email: " + email);