// // let n = parseInt(gets());
let n = 148;
// let quantidadeNotas = 0;
// let cedulas = [100,50,20,10,5,2,1];

// let valor = n;
// // Função responsável por contar as notas a partir de um valor.
// function contaNotas(valor){
//   quantidadeNotas = parseInt(n/valor);
//  console.log(parseFloat(quantidadeNotas));
// // TODO Subtraia de "n" a "quantidadeNotas" multiplicada por seu respectivo "valor" (parâmetro).
//   n -= cedulas;

//   console.log(`${quantidadeNotas} nota(s) de R$ ${valor},00`);
  
// }

// console.log(n);

// for(let cedula in cedulas){
//     contaNotas(cedulas[cedula]);
// }


let valor_entrada = n;

const cedulas = [100, 50, 20, 10, 5, 2, 1];

console.log(valor_entrada);

for (let cedula of cedulas) {
    let qtd_cedula = parseInt(valor_entrada / cedula);

    console.log(qtd_cedula + " nota(s) de R$ " + cedula + ",00 ");

    valor_entrada = valor_entrada % cedula;

}