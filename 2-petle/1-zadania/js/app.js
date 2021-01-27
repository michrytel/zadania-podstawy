console.log("zad1")
/*let x = ""
for (let i = 1; i <= 10; i++) {
    x = x + i
}
console.log(x)*/

console.log("zad2")
/*let n = 9
let txt = "siema"
let text = ""
if (n > 0) {
    for (let i = 1; i <= n; i++) {
        text = text + txt
    }
    console.log(text)
} else {
    console.log("liczba mniejsza od 0")
}*/

console.log("zad3")
/*let zad3 = window.prompt("podaj tekst")

let rg = "╔═══════════════════════╗"
let rd =  "╚═══════════════════════╝"
let rb = "║"

for (i=0; zad3.length + 2 < rg.length; i++) {
    rg = rg.slice(0, 2) + rg.slice(3)
    rd = rd.slice(0, 2) + rd.slice(3)
}
for (i=0; zad3.length + 2 > rg.length; i++) {
    rg = rg.slice(0, 2) + "═" + rg.slice(2)
    rd = rd.slice(0, 2) + "═" + rd.slice(2)
}

console.log(rg)
console.log(rb + zad3 + rb)
console.log(rd)
console.log("zad3 wariant 2")
let zad3 = window.prompt("podaj tekst")
console.log("╔" + "=".repeat(zad3.length) + "╗")
console.log("║" + zad3 + "║")
console.log("╚" + "=".repeat(zad3.length) + "╝")*/


console.log("zad4")
/*
const min = 1;
const max = 10;
howmany = 10;

let arr = []
let arr2 = []
for (let i=0; i<howmany; i++) {
    const number = Math.floor(Math.random() * (max - min + 1) + min);
    arr.push(number);
}
for (let i=0; i<arr.length; i++) {
    if (arr[i] > 5) {
        arr2.push(arr[i])
    }
}
console.log(arr)
console.log(arr2)

if (arr2.length >= 5) {
    console.log("udalo sie")
} else {
    console.log("nie udalo sie")
}
*/


console.log("zad5")
/*
let n = 7
let m = "0"
for (let i=1; i<=n; i++) {
    m = m + i + "-".repeat(i)

}
console.log(m)
*/

console.log("zad6")
/*
let min = 1
let max = 1000
let count = 0
number = window.prompt("dowolna liczba z przedzialu" + " " + min + " " + "do" + " " + max)
if (number >= min && number <= max) {
    number = Number(number)
    let randomNumber = 0
    while (randomNumber != number) {
        randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        console.log(randomNumber);
        count++;
    }

    console.log(count);
} else {
    alert("podaj liczbe z przedzialu")
}
*/
