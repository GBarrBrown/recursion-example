// index.js

// Max num of recursive calls
var max = 10
var count = 0


// addOne Recursively
count = 0

function addOne() {
    count === 0 ? console.log('-- addOne --') : null
    count++
    console.log(count)
    count < max ? addOne() : console.log('done')
}
addOne()


// square numbers recursively
count = 0

function sqrNums() {
    count === 0 ? console.log('-- sqrNums --') : null
    count++
    console.log(`${count}: ${count*count}`)
    count < max ? sqrNums() : console.log('done')
}
sqrNums()


// factorials Recursively
count = 0

function factorials() {
    count === 0 ? console.log('-- factorials --') : null
    count++
    let curFactorial = factorialSum(count)
    console.log(`${count}!: ${curFactorial}`)
    count < max ? factorials() : console.log('done')
}

function factorialSum(num) {
    const factorialReducer = (acc, cur) => acc * cur
    let cur = num
    let factorialArr = []
    while(cur > 0){
        factorialArr.push(cur)
        cur--
    }
    return factorialArr.reduce(factorialReducer)
}
factorials()