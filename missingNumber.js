
const miss = (arr) => {
    let missNumber = [];
    let max = Math.max(...arr)
    for (let i = 1; i < max; i++) {
        if (arr.indexOf(i) === -1) {
            missNumber.push(i)
        }
    }
    return missNumber
}
console.log(miss([3, 4, 1, 2, 6, 8, 12]));