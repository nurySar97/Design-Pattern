class Complaints {

    constructor() {
        this.complaints = [];
    }

    reply(complaint) {

    }

    add(complaint) {
        this.complaints.push(complaint);
        return this.reply(complaint);
    }

}


class ProductComplaint extends Complaints {

    reply({ id, customer, details }) {
        return `Product: ${id}: ${customer}: (${details})`
    }

}


class ServiceComplaint extends Complaints {

    reply({ id, customer, details }) {
        return `Service: ${id}: ${customer}: (${details})`
    }

}


class ComplaintRegistry {

    register(customer, type, details) {

        const id = Date.now();

        let complaint;

        if (type === 'service') {

            complaint = new ServiceComplaint();

        } else {

            complaint = new ProductComplaint();

        }

        return complaint.add({ id, customer, details });

    }
}


const registry = new ComplaintRegistry();

let comp1 = registry.register('Muhammet', 'service', 'Not Available!');
let comp2 = registry.register('Elena', 'product', 'Some Error...!');


console.log(comp1);
console.log(comp2);