class MySum {

    constructor(initValue = 42) {
        this.sum = initValue;
    }

    add(value) {

        this.sum+=value;

        return this;
    }

}

const sum1 = new MySum();

console.log(sum1.add(10).add(20).add(30).add(40).add(50));

const sum2 = new MySum(0);

console.log(sum2.add(1).add(2).add(3));