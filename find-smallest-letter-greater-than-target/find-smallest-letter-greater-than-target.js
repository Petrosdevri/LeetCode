/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for(let i=0; i<alphabet.length; i++) {
        let targetA;
        if(alphabet[i] == target) {
            targetA = alphabet[i];
            for(let j=0; j<letters.length; j++) {
                if(letters[j] > targetA) return letters[j];
            }
        }
    }
    return letters[0];
};