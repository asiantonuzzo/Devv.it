const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  
const filtered = numbers.filter(function evenNumbers (number) {  
    return number % 2 === 0  
})

//funzione che per ogni numero che viene passato ne calcola il modulo di 2 strettamente uguale a zero. Divide tutti i
//numeri per due, e se il resto sarà zero verrà restituito il valore booleano true e quindi la condizione sarà vera
// di conseguenza l'array terrà conto di quel elemento nella stampa

console.log(filtered)

//const filtered = numbers.filter (numbers => numbers % 2 === 0)