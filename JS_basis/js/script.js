const Input_1 = document.getElementById('inp_1');
const Output_1 = document.getElementById('res_1');
const Input_2 = document.getElementById('inp_2');
const Output_2 = document.getElementById('res_2');
const Input_3 = document.getElementById('inp_3');
const Output_3 = document.getElementById('res_3');
const Input_4 = document.getElementById('inp_4');
const Output_4 = document.getElementById('res_4');
const Input_5 = document.getElementById('inp_5');
const Output_5 = document.getElementById('res_5');

function getAge(age){
    return (age + 1).toString();
}

function getRemainder(a, b){
    return a%b;
}

function faceControl(age){
    if (age >= 18) return "Welcome";
    else return "Refused"; 
}

function canRide(height){
    return (height - 140) >= 0;
}

Input_1.addEventListener("input", (e) => {
    Output_1.textContent = getAge(e.target.value).toString();
})

Input_4.addEventListener("input", (e) => {
    var n = getAge(parseInt(e.target.value));
    if(isNaN(n))
        Output_4.textContent = "0"
    else
        Output_4.textContent = getAge(parseInt(e.target.value)).toString();
})

Input_2.addEventListener("input", (e) => {
    nums = e.target.value.replace(/\s+/g, ' ').trim().split(" ")

    if (nums.length != 2)
        Output_2.textContent = "Введено неверное число аргументов"
    else if (isNaN(nums[0])||isNaN(nums[1]))
        Output_2.textContent = "Аргументы не являются числами"
    else
        Output_2.textContent = getRemainder(parseInt(nums[0]), parseInt(nums[1])).toString()
})

Input_3.addEventListener("input", (e) => {
    var n = getAge(parseInt(e.target.value));
    if(isNaN(n))
        Output_3.textContent = "Введенные данные некорректны"
    else
        Output_3.textContent = faceControl(parseInt(e.target.value)).toString();
})

Input_5.addEventListener("input", (e) => {
    Output_5.textContent = canRide(e.target.value).toString();
})