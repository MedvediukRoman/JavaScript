const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
const ranks = ['6', '7', '8', '9', 'Lesson10-1', 'J', 'Q', 'K', 'A'];

const deck = [];

for (let suit of suits) {
    for (let rank of ranks) {
        deck.push({
            suit: suit,
            rank: rank,
            color: (suit === 'hearts' || suit === 'diamonds') ? 'red' : 'black'
        });
    }
}

const deckBySuits = deck.reduce((acc, card) => {
    acc[card.suit].push(card);
    return acc;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});

console.log(deckBySuits);
