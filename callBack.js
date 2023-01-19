function first(callback) {
    setTimeout(() => {
        console.log(1)
        callback()
    }, 500)
}

function second() {
    console.log(2)
}

first(second);