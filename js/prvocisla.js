const input = document.querySelector('input')
const button = document.querySelector('button')
const output = document.querySelector('p')

function find (max) {
    const naturals = Array(max + 2).join('1').split('')
    const composites = (isPrime, index) => index > 1 && isPrime

    for (let i = 2; i <= Math.sqrt(max); i++) {
        if (!naturals[i]) continue

        for (let j = i * i; j <= max; j += i) {
            naturals[j] = 0
        }
    }

    return naturals.filter(composites)
}

function render () {
    const max = parseInt(input.value, 10)

    const startTime = performance.now()
    const primes = find(max)
    const stopTime = performance.now()

    output.textContent = `
        Found ${ primes.length } prime numbers
        in ${ ((stopTime - startTime) / 1000).toFixed(3) }s.
    `
}

button.addEventListener('click', render)