const PRECIO_HAMBURGUESA = 16;
const PRECIO_RAVIOLES = 20;
const PRECIO_VITTELTONNE = 15;
const PRECIO_RISOTTO = 14;

let total = 0;
let vuelveAPreguntar = true;

function sumarMenu(articulo){
   
  if (articulo == 1) {
    total = total + PRECIO_HAMBURGUESA;
    console.log("SUMASTE HAMBURGUESA");
  } else if (articulo == 2) {
    total = total + PRECIO_RAVIOLES;
    console.log("SUMASTE RAVIOLES");
  } else if (articulo == 3) {
    total = total + PRECIO_VITTELTONNE;
    console.log("SUMASTE VITTEL TONNE");
  } else if (articulo == 4) {
    total = total + PRECIO_RISOTTO;
    console.log("SUMASTE RISOTTO");
  } else if (articulo == 0) {
    vuelveAPreguntar = false;
  } else {
    alert("Valor invalido");
  }
  alert("el total es: " + total);

}


while (vuelveAPreguntar) {
  let mensaje =
    "INGRESAR LO QUE QUIERAS COMER Y TOCA 0 PARA FINALIZAR Y VER EL TOTAL  MENU  1.Hamburguesa  2.Ravioles  3.Vittel Tonne  4. Risotto";
  if (total > 0) {
    mensaje =
      "INGRESAR SIGUIENTE PRODUCTO TOCA 0 PARA FINALIZAR Y VER EL TOTAL  MENU  1.Hamburguesa  2.Ravioles  3.Vittel Tonne  4. Risotto";
  }
  
  sumarMenu(prompt(mensaje))
}


