function sumar(x, y) {
    if (x < y) {
        return x + y;
    } else {
        return x - y;

    }
}
console.log(sumar(6, 2));
//var myCar = {nombre: 'rex', edad: 5, vivo:true};
//console.log(myCar.vivo);
function Perro (nombre, edad, vivo){
    this.nombre = nombre;
    this.edad = edad;
    this.vivo = vivo;
};

var perro1 = new Perro("Rex", 5, true);

var perro2 = new Perro("Tyrus", 2, true);
console.log(perro2.nombre + " tiene " + perro2.edad + " años.");
var animal = [perro1, perro2];
console.log(animal);

var gatos =[
    {
        nombre: "felix",
        edad:"5 meses"
    },
    {
        nombre:"tommy",
        edad: "3 años"
    }
]