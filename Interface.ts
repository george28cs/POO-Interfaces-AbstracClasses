interface Person  {
    name: string
    lastName: string
    age: number
    mail: string

    walk(): any
    eat(): any
    work(): any
}

interface Student extends Person {
    school: string
    career: string

    study(): any
}

const Raul: Student = {
    name: "Raul",
    lastName: "Sanchez",
    age: 31,
    mail: "mail@domain.com",
    school: "UV",
    career: "chemical engineering",
    walk() {
        console.log("Walk")
    },
    eat(){
        console.log("Eat")
    },
    work(){
        console.log("Work")
    },
    study(){
        console.log("Study")
    }
}

console.log(Raul)
Raul.walk()