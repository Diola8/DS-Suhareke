var programingLanguages=['JavaScript','PHP','Python'];

console.log(programingLanguages);

console.log(programingLanguages[0]);


programingLanguages.push('Java');

console.log(programingLanguages);

programingLanguages.pop('Java');

console.log(programingLanguages);



programingLanguages.unshift('c++');
console.log(programingLanguages);

programingLanguages.shift();
console.log(programingLanguages);



programingLanguages.splice(0,2,'HTML');
console.log(programingLanguages);


console.log(Math.random()*5);
console.log(Math.floor(Math.random()*5));

var students=["John","Doe"]
var [s1,s2]=students;

console.log(s1);
console.log(s2);

var places=["London","Paris","New York","Berlin"]
var[firstPlace,secondPlace]= places;

console.log(secondPlace);

var numbers=[1,2,3,4,5,6,7,8,9,10]
var[first,second, ...otherNumbers]= numbers;

console.log(first);
console.log(second);
console.log(otherNumbers.toString());