var Suit;
(function (Suit) {
    Suit[Suit["Spades"] = 0] = "Spades";
    Suit[Suit["Clubs"] = 1] = "Clubs";
    Suit[Suit["Hearts"] = 2] = "Hearts";
    Suit[Suit["Diamonds"] = 3] = "Diamonds";
})(Suit || (Suit = {}));
;
class Card {
    constructor(rank, suit) {
        this.rank = rank;
        this.suit = suit;
    }
    get rankName() {
        return Card.rankNames[this.rank - 1];
    }
    get suitName() {
        return Suit[this.suit];
    }
    get name() {
        return this.rankName + ' of ' + this.suitName;
    }
}
Card.rankNames = [
    'Ace',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'Jack',
    'Queen',
    'King',
];
class Deck {
    constructor() {
        this.cards = [];
        for (let s = 0; s < 4; s++) {
            for (let r = 1; r <= 13; r++) {
                this.cards.push(new Card(r, s));
            }
        }
    }
    shuffle() {
        this.cards.sort(() => Math.floor(Math.random() * 3 - 1));
    }
    draw() {
        return this.cards.shift();
    }
}
let d = new Deck();
d.shuffle();
console.log(d.draw().name);
//# sourceMappingURL=app.js.map