

function fatorial(n) {
    if (n === 0) {
        return 1
    } else if (n < 0) {
        throw new Error("O valor não pode ser negativo")
    } else {
        return n * fatorial(n - 1)
    }
}

console.log(fatorial(-1))


