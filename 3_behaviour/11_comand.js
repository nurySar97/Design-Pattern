class MyMath {

    constructor(initValue = 0) {

        this.num = initValue;

    }

    square() {
        return this.num ** 2;
    }

    cube() {
        return this.square() * this.num;
    }

}

class Command {

    constructor(subject) {
        this.subject = subject;
        this.commandsExecuted = [];
    }

    execute(command) {

        this.commandsExecuted.push(command);

        return this.subject[command]();

    }
}

const X = new Command(new MyMath(2));

console.log(X.execute(`square`));

console.log(X.execute(`cube`));