function memoize(fn) {
    const cache = new Map()

    return function(...args) {
        const key = JSON.stringify(args)

        if(cache.has(key)) {
            return cache.get(key)
        }

    const result = fn.apply(this, args)
    cache.set(key, result)
    return result
    }
    
}

const memoizeFibonacci = memoize(function fib(n) {
    if (n === 0) {
        return 0
    } if (n === 1){
        return 1
    } else {
        return memoizeFibonacci(n - 1) + memoizeFibonacci(n - 2)
    }
})

console.log(memoizeFibonacci(1000))
console.log(memoizeFibonacci(1000))
