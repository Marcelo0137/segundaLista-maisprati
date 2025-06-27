let sales = [
    {client: "Maria", total: 150},
    {client: "João", total: 200},
    {client: "Ana", total: 30},
    {client: "Maria", total: 200},
    {client: "Carlos", total: 100},
    {client: "Ana", total: 40},
    {client: "Carlos", total: 100},
    {client: "Jacques", total: 400}
]

const totalClient = sales.reduce((acc, sale) => {
    const {client, total} = sale
    acc[client] = (acc[client] || 0) + total
    return acc
}, {})

console.log(totalClient)