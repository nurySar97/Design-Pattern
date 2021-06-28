class MyIterator {

    constructor(data) {

        this.index = 0;

        this.data = data;

    }

    [Symbol.iterator]() {
        return {
            next: () => {
                if (this.index < this.data.length) {
                    return {
                        value: this.data[this.index++],
                        done: false
                    }
                } else {
                    this.index = 0;
                    return {
                        done: true,
                        value: void 0
                    }
                }
            }
        }
    }

}

const iterator = new MyIterator(['This', 'Is', 'Iterator!']);

function* generator(collection) {

    let index = 0;

    while (index < collection.length) {

        yield collection[index++];

    }

}

// for (const val of iterator) {

//     console.log('Value: ', val);

// }

let gen = generator(['This', 'Is', 'Iterator!']);

// for(let val of gen){
//     console.log(val)
// }

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());