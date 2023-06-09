function nextGreatestLetter(letters: string[], target: string): string {
    let alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
    for(let i=0; i<alphabet.length; i++) {
        let targetA: string;
        if(alphabet[i] == target) {
            targetA = alphabet[i];
            for(let j=0; j<letters.length; j++) {
                if(letters[j] > targetA) return letters[j];
            }
        }
    }
    
    return letters[0];
};