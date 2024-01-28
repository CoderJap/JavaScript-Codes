// sort() -> method is used to sort elements of an array in place.
//           Sorts elements as strings in lexicographic order , not alphabetical
//           lexicographic = ( alphabet + numbers + symbols) as strings


// ----EXAMPLE OF SORTING ARRAY OF NUMBERS----

/*
let numbers = [1,10,2,9,3,8,4,7,5,6];

numbers.sort( (a,b) => a-b );

console.log(numbers);
*/

// ---- Example With Objects----

const people = [{name:"Mark",age:30,gpa:3.0},
                {name:"Henry",age:67,gpa:7.0},
                {name:"Marie",age:78,gpa:9.0},
                {name:"Tom",age:3,gpa:1.0}
               ]

// people.sort((a,b) => a.age - b.age); // in incr order of ages 
// console.log(people);

// people.sort((a,b) => a.gpa - b.gpa) //in incr order of gpa 
// people.sort((a,b) => b.gpa - a.gpa) //in decr order of gpa (Reverse order of prev one) 
// console.log(people);

// to sort names 
// people.sort((a,b) => a.name.localeCompare(b.name)); 
people.sort((a,b) => b.name.localeCompare(a.name)); // Reverse order  
console.log(people);