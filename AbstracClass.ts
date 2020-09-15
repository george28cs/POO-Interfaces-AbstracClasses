class Person  {
    name: string
    lastName: string
    age: number
    mail: string

    constructor(name, lastName, age, mail) {
        this.name = name
        this.lastName = lastName
        this.age = age
        this.mail = mail
    }
    walk(){
        return console.log("Walk")
    }
    eat(){
        console.log("Eat")
    }
    work(){
        console.log("Work")
    }
}

class Student extends Person {
    school: string
    career: string
    constructor(name, lastName, age, mail, school, career){
        super(name, lastName, age, mail )
        this.school = school
        this.career = career
    }
    study(){
        console.log("Study")
    }
}

const Peter = new Student("Peter","Perez",31,"mail@domain.com","UV","chemical engineering")
console.log(Peter)
Peter.walk()