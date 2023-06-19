let pets = ['cat', 'dog', 'rat']

for ( i=0; i<pets.length; i++) {
     pets[i] = pets[i] + 's'  // pets[i] il valore che i avrà ad ogni iterazione pets[0], pets[1], pets[2]
    
}

console.log(pets) 

// pets.forEach (function (pet, i) {  //per ogni elemento lo passi in una funzione in cui viene passato un elemento che chiamiamo pet
//     pets[i] = pets[i] + 's'
// })

// console.log(pets)