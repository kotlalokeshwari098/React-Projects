const nums=[1,2,3,4,5];
const doubled=nums.map((num)=> num*num);
console.log(doubled);

const names=['alice','bob','charlie','danielle']
const nameCapital=names.map((name) =>
  name.charAt(0).toUpperCase()+name.slice(1)
)
console.log(nameCapital);

const pokemon=['Bulbasaur','Charmander','Squirtle']
const wrap=pokemon.map((item)=>
    `<p>${item}</p>`
)
console.log(wrap)