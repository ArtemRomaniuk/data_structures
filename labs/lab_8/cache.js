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

    contains(key) {
        let index = this.#hashFunction(key);
        for (let pair of this.#hashTable[index]) {
            if (pair[0] === key) return true
        }
        return false;
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

let cache = new HashTable(10);

async function getAlbum(albumId) {
    const URL = `https://jsonplaceholder.typicode.com/albums?userId=${albumId}`;
    if (cache.getValue(URL) !== undefined) {
        console.log("Взято з кешу");
        cache.getValue(URL).forEach(photo => {
            console.log(`Номер: ${photo.id}, підпис: ${photo.title}`);
        });
    } else {
        let album = await fetch(URL).then(album => album.json())
            .catch(error => {
                console.error(error);
                return undefined;
            });
        if (album === undefined) return;

        cache.add(URL, album);
        album.forEach(photo => {
            console.log(`Номер: ${photo.id}, підпис: ${photo.title}`);
        });
    }
}

(async () => {
    await getAlbum(1);
    console.log();
    await getAlbum(1);

    cache.print();
})();