let input = 4
let count = 0
let accumulator = 0

// WHILE

while (accumulator < 9999) {
    accumulator = accumulator + input
    //accumulator += input
    count = count + 1
    //count++
}

console.log(count)

// IN QUESTO CASO ABBIAMO UTILIZZATO UN WHILE PERCHE' NON SAPPIAMO QUANTE VOLTE IL NUMERO 4 STA DENTRO IL 9999

// DO WHILE

// do {
//     accumulator += input
//     count++
// } while (accumulator < 9999)