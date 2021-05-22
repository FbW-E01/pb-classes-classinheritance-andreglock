class Publication {
    constructor () {
        this.id = null;
        this.authors = null;
        this.name = null;
        this.content = null;
        this.created = new Date();
    }
    describe() {
        console.log(`${this.id} Publication ${this.name}, from ${this.authors}`);
    }
}

class Blogpost extends Publication {
    constructor() {
        super();
        this.edited = false;
        this.address = null;
    }
}

class Book extends Publication {
    constructor(isbn) {
        super();
        this.ISBN = isbn;
    }
}

class Score extends Publication {
    constructor(type) {
        super();
        this.type = type;
    }
}

const blogPost = new Blogpost();
const book = new Book('978-94-034-1424-9');
const score = new Score('leaf');

console.log(blogPost, book, score);
