const cardSuits = ['hearts', 'diamonds', 'clubs', 'spades'];
const cardRanks = ['6', '7', '8', '9', 'Lesson10-1', 'J', 'Q', 'K', 'A'];
let cardDeck = [];
for (let currentSuit of cardSuits) {
    for (let currentRank of cardRanks) {
        if (currentSuit === 'hearts' || currentSuit === 'diamonds') {
            cardDeck.push({
                suitName: currentSuit,
                rankName: currentRank,
                cardColor: 'red'
            });
        } else {
            cardDeck.push({
                suitName: currentSuit,
                rankName: currentRank,
                cardColor: 'black'
            });
        }
    }
}
console.log(cardDeck);
let aceOfSpades = cardDeck.find(card =>
    card.rankName === 'A' && card.suitName === 'spades'
);
console.log(aceOfSpades);

let sixCards = cardDeck.filter(card => card.rankName === '6');
console.log(sixCards);

let redCards = cardDeck.filter(card => card.cardColor === 'red');
console.log(redCards);

let diamondCards = cardDeck.filter(card => card.suitName === 'diamonds');
console.log(diamondCards);

function getCardValue(cardObject) {
    if (
        cardObject.rankName === '6' ||
        cardObject.rankName === '7' ||
        cardObject.rankName === '8' ||
        cardObject.rankName === '9' ||
        cardObject.rankName === 'Lesson10-1'
    ) {
        return Number(cardObject.rankName);
    } else if (cardObject.rankName === 'J') {
        return 11;
    } else if (cardObject.rankName === 'Q') {
        return 12;
    } else if (cardObject.rankName === 'K') {
        return 13;
    } else if (cardObject.rankName === 'A') {
        return 14;
    }
}

let highClubsCards = cardDeck.filter(card =>
    card.suitName === 'clubs' && getCardValue(card) >= 10
);

console.log(highClubsCards);
