// Задание 1
etherium = {
    rub:200612,
    eur:2666,
    usd:2811
}

op = document.getElementsByTagName("select")[0]
function selectChanged(){
    console.log(etherium[op.options[op.selectedIndex].value] + " " + op.options[op.selectedIndex].value)
}

op.addEventListener("change", selectChanged)

// Задание 2
console.log("Задание 2")
const getValues = arr => {
    return Object.values(arr)
}

console.log(getValues({lang: 'JS', course: 'Third'}))

// Задание 3
console.log("Задание 3")
const getInfo = (street, building, flat) => {
    return {
        street,
        building,
        flat
    }
}

console.log(getInfo('Lenina', 1, 40))

// Задание 4
console.log("Задание 4")
const joinArrays = (obj1, obj2) => {
    return {...obj1, ...obj2}
}

console.log(joinArrays(
    {
        name: "John",
        surname: "Smith"
    }, {
        street: 'Lenina',
        building: 1,
        flat: 40
    }
))