
function pedirPrecio() {
  precio = Number(prompt(`Ingrese el precio del producto`));
};

function calculoIva() {

  // 100%----- precio
  //21% ----- precioIva
  precioIva = (21 * precio) / 100;
};

function costoFinal() {
  return precio + precioIva;
};

let precioIva;
let precio;
let precioFinal;

pedirPrecio();
calculoIva();
alert(`El precio final es ${costoFinal()} $`);