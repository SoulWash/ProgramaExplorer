/*
Capture 10 items para compor a lista de um supermercado
Após capturar os 10 items, imprima-os, separando por vírgula.
*/

let produtos = [];

for(let item = 0; item <= 2; item++){
    let itemName = prompt("Digite o item " + (item))
    produtos[item] = itemName;
}

alert(produtos[0])
alert(produtos[11])
