/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
    if (!people.length) {
        return [];
    }
    // 先按身高升序
    people.sort((a, b) => {
        return a[0] - b[0];
    });

    // 再插入排序
    let index = 0;
    for(let i = 0; i < people.length; i++){ // 代表
        for(let j = index; j < people.length; j++){
            if(index === people.length - 1) break;
            if(people[j][1] === i){
                [people[index], people[j]] = [people[j], people[index]];
                index++;
            }
        }
    }
    return people
};

console.log(reconstructQueue([[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]))