// https://leetcode.cn/problems/kids-with-the-greatest-number-of-candies/?envType=study-plan-v2&envId=leetcode-75

var kidsWithCandies = function(candies, extraCandies) {
    let max = 0;
    candies.forEach(item => {
        if (item > max) {
            max = item;
        }
    })
    return candies.map(item => item + extraCandies >= max)
};