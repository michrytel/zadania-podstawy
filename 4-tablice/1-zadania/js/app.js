console.log("zad1")
/*
let chars = "abcdefghijklmnoprstuvwzx";
let tab = [];
while (tab.length <5) {
    let result="";
    for (let j = 0; j <5 ; j++) {
        result += chars[Math.floor(Math.random() * (chars.length - 1)) + 1];
    }
    tab.push(result)
}
console.log(tab);
console.log(tab.length)
console.log(tab[0] + "\n" + tab[0].length + "\n" + tab[tab.length - 1] + "\n" + tab[tab.length - 1].length)
for (let element of tab) {
    element = element.toUpperCase()
    console.log(element)
    console.log(element.length)
}
*/


console.log("zad2")
/*let chars = "abcdefghijklmnoprstuvwzx";
let tab = [];
while (tab.length <5) {
    let result="";
    for (let j = 0; j <5 ; j++) {
        result += chars[Math.floor(Math.random() * (chars.length - 1)) + 1];
    }
    tab.push(result)
}
console.log(tab);
tab.push("siema")
tab.unshift("co tam")
console.log(tab)
console.log(tab.length)*/


console.log("zad3")
/*function tabdeleting(tab){
    if (tab.length >= 3){
        tab.splice(2, 1)
        return tab;
    } else {
        return tab;
    }
}
let tab = ["a", "ab", "ac"]
console.log(tabdeleting(tab))*/
console.log("zad4")
/*let names = [
    "Marcin",
    "Ania",
    "Monika",
    "Piotrek",
    "Beata"
]
names.sort()
console.log(names)*/
console.log("zad5")
/*
const tab = [
    "xloremipsumdolor",
    "kloremipsum",
    "aloremipsumdol",
    "blor",
    "cloremipsu",
    "gloremip",
]
tab.sort((a, b) => a.length - b.length)
console.log(tab)
str = tab.join("")
console.log(str.length)
*/

console.log("zad6")
/*const tabUsers = [
    {name : "Marcin", age: 14},
    {name : "Piotr", age: 18},
    {name : "Agnieszka", age: 13},
    {name : "Weronika", age: 20}
]
for (i=0;i<tabUsers.length;i++) {
    if (tabUsers[i].age >= 18) {
        console.log(tabUsers[i].name)
    }
}*/
console.log("zad7")
/*
function checkPalindrom(text) {
    text = text.toLowerCase()
    console.log(text)
    return text === text.split("").reverse().join("")
}
console.log(checkPalindrom("AmanaplanacanalPanama"))
*/

console.log("zad8")
/*const min = 1;
const max = 100;
let arr = []
const number = Math.floor(Math.random() * (max - min + 1) + min);
arr.push(number);
console.log(arr)*/
console.log("zad9")
/*function generateRandomTable(min, max, count) {
    let arr = []
    for (let i=0; i<count; i++) {
        const number = Math.floor(Math.random() * (max - min + 1) + min);
        arr.push(number);
    }
    return arr;
}
let arr = generateRandomTable(5, 1000, 10)

console.log(arr)
console.log(Math.max(...arr));*/
console.log("zad10")
/*
function monthName(nr) {
    let months = ["","styczen","luty","marzec","kwiecien","maj","czerwiec","lipiec","sierpien","wrzesien","pazdziernik","listopad","grudzien"]
    if (nr >=1 && nr <= 12) {
        months = months[nr]
    } else {
        months = "taki miesiac nie istnieje"
    }
    return months;
}
console.log(monthName(9))
*/
