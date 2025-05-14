class HashTable {

    #size;
    get size() { return this.#size };

    #hashTable;

    constructor(size) {
        this.#size = size;
        this.#hashTable = new Array(size).fill(null).map(() => []);
    }

    #hashFunction(key) {
        const multiplier = 31;
        let index = 0;
        key = key.toString();

        for (let i = 0; i < key.length; i++) {
            index += key.charCodeAt(i) * Math.pow(multiplier, i);
        }

        return index % this.#size;
    }

    add(key, value) {
        let index = this.#hashFunction(key);
        for (let pair of this.#hashTable[index]) {
            if (pair[0] === key) {
                pair[1] = value;
                return;
            }
        }
        this.#hashTable[index].push([key, value]);
    }

    remove(key) {
        let index = this.#hashFunction(key);
        for (let i = 0; i < this.#hashTable[index].length; i++) {
            if (this.#hashTable[index][i][0] === key) this.#hashTable[index].splice(i, 1);
        }
    }

    getValue(key) {
        let index = this.#hashFunction(key);
        for (let pair of this.#hashTable[index]) {
            if (pair[0] === key) return pair[1];
        }
    }

    clear() {
        this.#hashTable = new Array(this.#size).fill(null).map(() => []);
    }

    print() {
        console.log(this.#hashTable);
    }
}

let table = new HashTable(15);
table.add(3, 10)
table.add(3, "bananas")
table.add("3", 45)
table.remove("3")
table.add("apple", 50)
table.print()
console.log(table.getValue(3))