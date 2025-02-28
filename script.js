/* Condicionales
1 - Simple
2 - Compuesto
3 - Anidado
4 - Multiple
5 - Operador ternario
*/

// if (true) {
//   console.log('Esto es verdad');
// }
// if (false) {
//   console.log('Esto es verdadero');
// } else {
//   console.log('Esto es falso');
//   console.log('No se puede ejecutar');
//   console.log(34+6);
// }
// if (false) {
//   console.log('Esto es verdadero');
// } else if (false) {
//   console.log('Esto es falso');
// } else if (false) {
//   console.log('Esto es falso');
// } else {
//   console.log('No se cumple ninguna codición');
// }

// let opcion = Number(prompt('Ingrese un numero:  \n1 - Caso 1\n2 - Caso 2\n3 - Caso 3\n4 - Caso 4'))
// switch (opcion) {
//   case 1:
//     console.log('Caso 1');
//     break
//   case 2:
//     console.log('Caso 2');
//     break
//   case 3:
//     console.log('Caso 3');
//     break
//   case 4:
//     console.log('Caso 4');
//     break
//   default:
//     console.log('No existe');
//     break;
// }

// (? :)

// let edad = 18
// let mensaje = (edad > 18) ? 'Es mayor de edad' : 'Es menor de edad'
// console.log(mensaje);


/* 
  Simular un cajero electrónico
  1 - Validar un inicio de sesión (usuario y contraseña)
  2 - Consultar saldo
  3 - Retirar dinero
  4 - Consignacion (cuenta propia)
  5 - Consigación a otras cuentas (quemadas)
  6 - Salir
*/

let usuario = prompt('Ingrese su usuario: ')
if (usuario === "admin") {
  let contrasena = prompt('Ingrese su contraseña: ')
  if (contrasena === '123456') {
    console.log('Bienvenido ' + usuario);
    let saldoCuenta = 0
    let opcion = 0
    let cuentaUno = 123456789
    let cuentaDos = 987654321
    let valorOperacion = 0
    opcion = parseFloat(prompt('Seleccioe: \n1 - Consultar saldo\n2 - Retirar dinero\n3 - Consignar dinero (cuenta propia)\n4 - Transferir dinero (otras cuentas)\n5 - Salir'))
    switch (opcion) {
      case 1:
        console.log(`Su saldo es: ${saldoCuenta}`); /* Interpolación de datos backticks */
        console.log('Su saldo es: ' + saldoCuenta); /* Concatenación */
        break;
      case 2:
        break
      default:
        break;
    }
  } else {
    console.log('Contraseña Incorrecta');
  }
} else {
  console.log('Usuario no existe');
}