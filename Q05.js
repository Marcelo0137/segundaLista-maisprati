function debounce(fn, delay) {
    let timeOut;

    return function(...args) {
        clearTimeout(timeOut)

        timeOut = setTimeout(() => {
            fn.apply(this,  args)
        }, delay)
    }
}

function firstCall(){
    console.log("Primeira função")
}

const debounced = debounce(firstCall, 500)

debounced()
debounced()
debounced()
debounced()
debounced()
