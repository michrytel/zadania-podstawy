console.log("zad1")
let text = "Koty to fajne zwierzaki"
console.log(text.length)

console.log("zad2")
/*let name = window.prompt("whats your name?")*/
let name = "marcin"
function titleCase(string){
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}
/*alert(titleCase(name));*/
console.log(titleCase(name))

console.log("zad3")
const zad3 = "Ala ma kota";
if (zad3.includes("kot")) {
    console.log("zdanie zawiera slowo kot")
} else {
    console.log("zdanie nie zawiera")
}

console.log("zad4")
const zad4 = "Ala ma kota";
console.log(zad4.toLowerCase())
console.log(zad4.toUpperCase())
console.log(zad4.split("").reverse().join(""))
console.log(zad4.replace("Ala", "Michal"))


console.log("zad5")
let min = 10
let max = 1000000

for (i=1; i<6; i++){
    let wylosowany_numer = Math.floor(Math.random()*(max-min+1)+min)
    console.log(wylosowany_numer.toString().padStart(10, "."))

}

console.log("zad6")
let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
let stringLength = 20;
let result="";
for(let i=0; i < stringLength; i++ )
    result += chars[Math.floor(Math.random() * (chars.length - 1)) + 1];
console.log(result);




console.log("zad7")
let x = 72
console.log("Liczba x * x da w wyniku" + " " + x * x)

