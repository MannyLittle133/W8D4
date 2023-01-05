// setTimeout/setInterval

class Dog {
    constructor(name, owner) {
        this.name = name
        this.owner = owner
    }


    cuteStatement() {
        console.log(`${this.owner} love's his dog ${this.name}`)
    }

    bark() {
        console.log("Woof")
    }
}

cassie = new Dog("Cassie", "Manny")

cassie.cuteStatement()
cassie.bark()