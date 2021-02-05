import users from "./modules/data.js"


console.log("zad1")
{
    for (let element of users) {
        console.log(element.name + " --> " + element.email)
    }
}


console.log("zad2")
{
    for (let element of users) {
        if (element.age >= 18) {
            console.log(element.name)
        }
    }
}
console.log("zad3")
{
    for (let element of users) {
        im
        if (element.gender === "female") {
            console.log(element.name)
        }
    }
}
console.log("zad4")
{
    for (i = 0; i < users.length; i++) {
        for (let tags in users[i]) {
            for (j = 0; j < users[i].tags.length; j++) {
                if (users[i].tags[j] == "dolor") {
                    console.log(users[i])
                }
            }
        }
    }
}

console.log("zad5")
{
    const allAdult = users.every(el => {
        return el.age >= 18;
    });
    console.log(allAdult)

}
console.log("zad6")
{
    const allAdult = users.some(el => {
        return el.age >= 18;
    })
    console.log(allAdult)
}
console.log("zad7")
{
    let newtab = []
    for (let element of users) {
        newtab.push(element.name.toUpperCase())
    }
    console.log(newtab)
}
console.log("zad8")
{
    let k = 0;
    let m = 0;
    for (let element of users) {
        if (element.gender === "female") {
            k++
        } else {
            m++
        }
    }
    console.log(k + " " + m)

    if (k > m) {
        console.log("kobiety wygrywaja")
    } else {
        console.log("mezczyzni wygrywaja")
    }
}