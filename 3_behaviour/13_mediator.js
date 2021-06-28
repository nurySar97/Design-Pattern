class User {

    constructor(name) {
        this.name = name;
        this.room = null;
    }

    send(message, to) {

        this.room.send(message, this, to);

    }

    recieve(message, from) {

        console.log(`${from.name} => ${this.name}: ${message}`);
        
    }

}

class ChatRoom {

    constructor() {
        this.users = {}
    }

    register(user) {

        this.users[user.name] = user;

        user.room = this

    }

    send(message, from, to) {

        if (to) {

            to.recieve(message, from);

        } else {
            Object.keys(this.users).forEach(key => {

                if (this.users[key] !== from) {

                    this.users[key].recieve(message, from);

                }

            })
        }

    }

}


const Muha = new User('Muhammet');

const Aypara = new User('Aypara');

const Andrey = new User('Andrey');


const room = new ChatRoom();

room.register(Muha);
room.register(Aypara);
room.register(Andrey);

Muha.send('Hello!', Aypara);
Andrey.send('Hello!', Aypara);
Muha.send('Hello!', Andrey);