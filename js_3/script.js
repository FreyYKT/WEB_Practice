//Задание 1
function sumArray(array){
    sum = 0
    array.forEach(element => {
        sum += element
    });
    return sum
}
console.log(sumArray([4, 6, 16, 73, 5]))

//Задание 2
function getAboveZero(array){
    newArray = []
    array.forEach(element => {
        if (element > 0) newArray.push(element)
    });
    return newArray
}
console.log(getAboveZero ([1, -3, -2, 4, 10]))

//Задание 3
function getPonies(array, pony){
    if (array.includes(pony)) return pony
    else return false
}
console.log(getPonies(["TwilightSparkle", "RainbowDash", "AppleJack", "Rarity", "Pinkie Pie", "Fluttershy"], "AppleJack"))

//Задание 4
function isTxIncluded(array, tr){
    return array.includes(tr)
}
console.log(isTxIncluded(["0xaea0", "0x8f80", "0xf3ad", "0x17ec"], "0x9e0a"))

//Задание 5
function getSizes(array){
    newArray = []
    array.forEach(element => {
        newArray.push(element.length)
    });
    return newArray
}
console.log(getSizes(["Moscow","Coding", "School"]))

//Задание 6
function getWithSpaces(array){
    str = array.join(" ")
    return [str, str.length]
}
console.log(getWithSpaces(["Moscow", "never", "sleep"]))

//Задание 7
//Этот номер в задании пропущен

//Задание 8
function getEpisodes(anime){
    return `Аниме ${anime.title} включает ${anime.episodes} серий`
}
console.log(getEpisodes({title:"DxD", episodes:"12"}))

//Задание 9
const triple = (n) => {
    return 3*n
}
console.log(triple(2))

//Задание 10
getAvgGlucose = (array) => {
    return sumArray(array)/array.length
}
console.log(getAvgGlucose([5.4, 8.1, 6.3, 4.9]))