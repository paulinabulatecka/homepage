console.log("STRONA DO EDUKACJI");
const firstName = "Paulina";
const age = 23;

console.log(firstName);
console.log(age);
console.log(`Cześć nazywam się ${firstName} i mam ${age} lata`);

 const heading = document.querySelector('.headerFirst--js');
 
 heading.innerHTML=`Cześć nazywam się ${firstName} i mam ${age} lata`;

