/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

// var mergeAlternately = function (word1, word2) {
//     let i = 0;
//     let j = 0;
//     let result = [];

//     while(i<word1.length && j<word2.length){
//         result.push(word1[i]);
//         result.push(word2[j]);
//         i=i+1
//         j=j+1
//     }
//     result.push(word1.slice(i))
//     result.push(word2.slice(j))

//     return result.join("");
// };

// here the time complexity is O(max(word1,word2)+n) = > where n is due to the join operation which takes O(n)

// var mergeAlternately = function (word1, word2) {
//     let i = 0;
//     let j = 0;
//     let result = "";

//     while(i<word1.length && j<word2.length){
//         result  = result.concat(word1[i]);
//         result  = result.concat(word2[j]);
//         i=i+1
//         j=j+1
//     }
//     result  = result.concat(word1.slice(i))
//     result  = result.concat(word2.slice(j))

//     return result;
// };

// this is more worse due to the concat operation of js


// the best approach would be of 

// var mergeAlternately = function(word1, word2) {
//     const minLength = Math.min(word1.length, word2.length);
//     let result = "";

//     for (let i = 0; i < minLength; i++) {
//         result += word1[i] + word2[i];
//     }

//     result += word1.slice(minLength) + word2.slice(minLength);

//     return result;
// };

// the simplest approach would be 
var mergeAlternately = function (word1, word2) {

    let result = "";
    let maxLength = Math.max(word1.length, word2.length);

    for (let i = 0; i < maxLength; i++) {
        if (word1[i]) result += word1[i]
        if (word2[i]) result += word2[i]
    }
    return result
}

// this has the simplest time complexity of O(n)
console.log(mergeAlternately("ati","shdjk"))
