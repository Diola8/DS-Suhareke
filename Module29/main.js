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

