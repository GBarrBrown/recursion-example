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