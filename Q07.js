let products = [
    {name: "Camisa Xadrez", price: 49.90},
    {name: "Tênis Nike", price: 399.90},
    {name: "Calça Jeans", price: 150},
    {name: "Moletom", price: 99.90},
    {name: "Boné", price: 70}
]

let secondArray = []

function ordenar(lista) {
    
    secondArray = [...lista]

    return secondArray
        .sort((a, b) => a.price - b.price)
        .map(products => products.name)  

}

console.log(ordenar(products))


