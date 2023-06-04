"use strict";
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
//MY SOLUTION
const returnCommonPrefix = function (strs) {
    if (strs.length === 1) {
        return strs[0];
    }
    //GET THE SHORTEST WORD
    let wordLength = 0;
    let shortestWord = "";
    for (let i = 0; i < strs.length; i++) {
        const currentWordLength = strs[i].length;
        if (!wordLength) {
            wordLength = currentWordLength;
            shortestWord = strs[i];
        }
        if (wordLength) {
            if (currentWordLength < wordLength) {
                wordLength = currentWordLength;
                shortestWord = strs[i];
            }
        }
    }
    //GET THE SAME LETTERS OF ALL WORDS BASED ON THE SHORTED WORD
    let sameLetters = [];
    const checkArr = [...strs].filter((ele) => ele !== shortestWord);
    const letterArrOfShortestWord = shortestWord.split("");
    for (let a = 0; a < checkArr.length; a++) {
        const currentWord = checkArr[a];
        const wordLetterArr = currentWord.split("");
        //COMPARE EACH LETTER OF THE SHORTEST WORD WITH LETTERS OF CURRENT WORD
        for (let b = 0; b < letterArrOfShortestWord.length; b++) {
            const currentLetterOfShortestWord = letterArrOfShortestWord[b];
            for (let c = 0; c < wordLetterArr.length; c++) {
                const currentLetterOfWord = wordLetterArr[c];
                if (currentLetterOfShortestWord === currentLetterOfWord &&
                    !sameLetters.includes(currentLetterOfShortestWord)) {
                    sameLetters.push(currentLetterOfShortestWord);
                }
            }
        }
    }
    if (sameLetters.length === 0) {
        return "";
    }
    const newSameLetter = [];
    for (let k = 0; k < sameLetters.length; k++) {
        const currentLetter = sameLetters[k];
        newSameLetter.push(currentLetter);
        for (let j = 0; j < strs.length; j++) {
            if (!strs[j].includes(currentLetter)) {
                newSameLetter.pop();
                break;
            }
        }
    }
    if (newSameLetter.length === 1) {
        return newSameLetter[0];
    }
    if (newSameLetter.length === 0) {
        return "";
    }
    //CHECK TO SEE WHAT LETTERS ARE POSITIONED NEXT TO EACH OTHER IN THE LETTER ARRAY OF THE SHORTEST WORD
    const commonLetterArr = [];
    for (let d = 0; d < newSameLetter.length - 1; d++) {
        const currentLetter = newSameLetter[d];
        //COMPARE THE INDEX OF THE CURRENT LETTER WITH THE INDEX OF THE OTHER LETTER IN THE LETTER ARRAY OF THE SHORTEST WORD
        for (let e = d + 1; e < newSameLetter.length; e++) {
            const nextLetter = newSameLetter[e];
            if (Math.abs(letterArrOfShortestWord.indexOf(currentLetter) -
                letterArrOfShortestWord.indexOf(nextLetter)) === 1) {
                commonLetterArr.push(currentLetter);
                commonLetterArr.push(nextLetter);
            }
        }
    }
    if (commonLetterArr.length > 0) {
        return commonLetterArr.join("");
    }
    else {
        return newSameLetter[0];
    }
};
