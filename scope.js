
let bonus = 20;

function sum(first, second) {
    let result = first + second + bonus;
    if (isNaN(result)) {
        console.log( "i will feed you sweet")
    }else{
        console.log('you  will feed me sweet')
    }
    console.log(result)
    console.log(bonus)
    return result;

}
const output  = sum(2, 8);
console.log(bonus)
console.log(output);