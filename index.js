// Code your solutions in this file
let thanks = [] 
function writeCards(names, string) {
  for (let i = 0; i < names.length; i++) {
    thanks.push(`Thank you, ${names[i]}, for the wonderful surprise gift!` );
  }

  return thanks;
}

function countDown(number) {
  while (number>= 0){
    console.log(number--)
  }
}