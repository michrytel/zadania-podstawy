console.log("zad1")
/*
function foo(text) {
    console.info("liczba liter: " + ".".repeat(text.length))
}

foo("0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz")
*/
console.log("zad2")
/*function arrSum(arr) {
    let sum = 0;
    for (let i=0;i<arr.length;i++){
        sum = sum + arr[i]
    }
    console.log(sum)
}
let arr = [2,4,5,2,3];
arrSum(arr)*/

console.log("zad3")
/*function randomcapslock(text) {
    let newtext = "";
    for (let i = 0; i < text.length; i++) {
        let letter = text.charAt(i);
        if (i % 2 != 1) {
            newtext += letter.toUpperCase();
        } else {
            newtext += letter;
        }
    }
    return newtext;
}
console.log(randomcapslock("siemanko co tam slychac mordeczko"))*/


console.log("zad4")
/*function foo(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a * b;
    } else {
        return false;
    }
}
console.log(foo(2,14))*/
console.log("zad5")
/*function foo(name, month) {
    month = month.toLowerCase()
    if (month == "grudzien" || month == "styczen" || month == "luty") {
        return name + " " + "jezdzi na sankach"
    }
    if (month == "marzec" || month == "kwiecien" || month == "maj") {
        return name + " " + "chodzi po kaluzach"
    }
    if (month == "czerwiec" || month == "lipiec" || month == "sierpien") {
        return name + " " + "sie opala"
    }
    if (month == "wrzesien" || month == "pazdziernik" || month == "listopad") {
        return name + " " + "zbiera liscie"
    } else {
        return name + " " + "uczy sie JS"
    }
}
console.log(foo("michal", "wrzesien"))*/
console.log("zad6")
/*let str = "Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka";
function foo(text, space) {
    text = text.split(space);
    text = text.sort()
    text = text.join(space)
    return text;
}
console.log(foo(str,"|" ))*/
console.log("zad7")
/*
function foo(arr) {
    arr = arr.join(",")
    arr = arr.toUpperCase()
    arr = arr.split(",")
    return arr;
}
function foo2(arr) {
    arr = arr.join(",")
    let newtext = "";
    for (let i = 0; i < arr.length; i++) {
        let letter = arr.charAt(i);
        if (i % 2 != 1) {
            newtext += letter.toUpperCase();
        } else {
            newtext += letter.toLowerCase();
        }
    }
    arr = newtext.split(",")
    return arr;
}
array = ["Ania" , "Marcin" , "Bartek" , "Piotr"]
console.log(foo(array))
console.log(foo2(array))*/

console.log("zad8")
/*
function checkFemale(name) {
    if (name[name.length - 1] === "a") {
        return true;
    } else {
        return false;
    }
}
console.log(checkFemale("Marcin"))
*/

console.log("zad9")
/*
const users = [
    "Ania Nowak",
    "Piotr Kowalski",
    "Bartek Kosecki",
    "Natalia Nowak",
    "Weronika Piotrowska",
    "Agata Beatczak",
    "Tomasz Nowak",
    "Mateusz Kowalski",
    "Marcin Kotecki",
    "Betata Lecka",
    "Katarzyna Melecka",
    "Katarzyna Melecka",
    "Katarzyna Melecka",
    "Katarzyna Melecka",


]

function countWomanInTable(arr) {
    arr = arr.join(" ")
    arr = arr.split(" ")
    let arrname = []
    let result = []
    for (i = 0; i < arr.length; i++) {
        if (i % 2 != 1) {
            arrname.push(arr[i])
        }
    }

    {
        for (i = 0; i < arrname.length; i++) {
            if (arrname[i].charAt(arrname[i].length - 1) === "a") {
                result.push("a")
            }
        }
    }
    console.log(arrname)
    return result.length

}

console.log("There are " + countWomanInTable(users) + " womans")
*/

