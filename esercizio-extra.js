let people = 5
let seatsInRow = 2

let totalRow = Math.ceil(people/seatsInRow) // arrotondamento per eccesso di 5/2

let emptySeats = (totalRow * seatsInRow) - people // (3 * 2) - 5

console.log(`Le file occupate anche in parte sono: ${totalRow}`)
console.log(`I posti rimanenti sono: ${emptySeats}`)

