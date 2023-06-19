/** let fruit = 'orange'

if (fruit.length > 5) {
 console.log('The fruit name has more than five characters.')
} else {
 console.log('The fruit name has five characters or less.')
} */

let fruit = 'orange'
if (fruit.length > 5) {
    console.log('The fruit name has more than five characters.')


    if (fruit.length < 10) {
        console.log('The fruit name has less than 10 characters.')
    } // CONDIZIONE NESTATA in cui il ramo else può essere opzionale.



} else {
    console.log('The fruit name has five characters or less.')
}