// pair programming module 2 week 5
// partners: Mohammed Mahdi (github.com/MohammedMahdi21) Winston Limanto (github.com/wmlimanto)

const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (let l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }

    let verticalSentence = [];
    for (let x = 0; x < letters.length; x++) {
        let verticalLetters = [];
        for (let i = 0; i <= letters[x].length; i++) {
            verticalLetters.push(letters[i][x]);
        }
        verticalSentence.push(verticalLetters);
    }

    const verticalJoin = verticalSentence.map(ls => ls.join(''));
    for (let l of verticalJoin) {
        if (l.includes(word)) {
            return true;
        }

    }

    return false;
};

module.exports = wordSearch;