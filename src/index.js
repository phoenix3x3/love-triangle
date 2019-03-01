/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
   let n = 0;
    for (let i = 0; i < preferences.length; i++) {
        const condition1 = preferences[preferences[preferences[i] - 1] - 1] === i + 1;
         const condition2 = i + 1 !== preferences[i];
        if (condition1 && condition2) {
            n++;
        }
    }   
    return n / 3;
};
