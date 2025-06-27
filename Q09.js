function paresParaObjeto(pairs) {
  return Object.fromEntries(pairs);
}

function objetoParaPares(obj) {
  return Object.entries(obj);
}

const pairsArray = [['nome', 'João'], ['idade', 30], ['cidade', 'Recife']];

const objectConverted = paresParaObjeto(pairsArray);
console.log('Objeto convertido a partir dos pares:');
console.log(objectConverted);

const pairsConverted = objetoParaPares(objectConverted);
console.log('\nArray de pares convertido a partir do objeto:');
console.log(pairsConverted);
