// Задание 1
console.log("Задание 1")
class User_1{
    constructor(user, email){
        this.user = user
        this.email = email
    }
}

function makeUser(name, email){
    return new User_1(name, email)
}

console.log(makeUser("John", "john@gmail.com"))

// Задание 2
console.log("Задание 2")
class User_2{
    constructor(id, type){
        this.id = id
        this.type = type
    }
    getId() {
        return "#" + this.id
    }
    isAdmin() {
        if (this.type === "Admin")
            return true
        else
            return false
    }
}

a = new User_2(120, "Admin")
console.log(a, a.isAdmin(), a.getId())

// Задание 3
console.log("Задание 3")
class AreaOfCircle{
    constructor(radius){
        this.radius = radius
    }
    area(){ return this.radius*this.radius*3.1415}
}

b = new AreaOfCircle(2)
console.log(b.area())
b.radius = 10
console.log(b.area())

// Задание 4
console.log("Задание 4")
class Course {
    constructor(grade){
        this.grade = grade
    }
    getGrade(){
        if (this.grade >= 4)
            return true
        else
            return false
    }
    getCertificate(){
        if (this.getGrade())
            return 'Выдать сертификат'
        else
            return 'Курс не пройден'
    }
}

c1 = new Course(3)
console.log(c1.getCertificate())

c2 = new Course(4)
console.log(c2.getCertificate())
