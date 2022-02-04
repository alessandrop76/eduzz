//Desafio 1/3
let valor1 = parseInt(gets());
let valor2 = parseInt(gets());

print( valor1 - valor2     );

//.........................................................................................
//Desafio 2/3
let lines = //gets().split('\n');
let valor1 =  lines;
print(  lines - 2 );

//Escreva a sua lógica acima


//.........................................................................................
//Desafio 3/3
let lines =   18 //gets().split("\n");
let num = parseInt(lines);
let init = num % 2 === 0 ? num + 1 : num;
//          9 / 2           9  + 1  : 9

for(let i = 0  ; i < 6; i++){
    console.log(init)
    init =+ init+2         
    }
    

var passo;
for (passo = 0; passo < 5; passo++) {
  // Executa 5 vezes, com os valores de passos de 0 a 4.
  console.log('Ande um passo para o leste');
}