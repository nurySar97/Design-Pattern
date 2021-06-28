class Employee {

    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    responsibilities() {

    }

    work() {
        return `${this.name} performs ${this.responsibilities()}`
    }

    getPaid(){
        return `${this.name} has a salary ${this.salary}`
    }

}

class Developer extends Employee {

    constructor(name, salary){
        super(name, salary)
    }

    responsibilities(){
        return `Proccess creating programm!`
    }

}

class Tester extends Employee {

    constructor(name, salary){
        super(name, salary)
    }

    responsibilities(){
        return `Proccess testing!`
    }

}


const developer = new Developer('Muha', 10000);

const tester = new Tester('Andrey', 8000);

console.log(developer);
console.log(developer.work());

console.log(tester);
console.log(tester.work());