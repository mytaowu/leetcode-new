// https://leetcode.cn/problems/can-place-flowers/?envType=study-plan-v2&envId=leetcode-75

var canPlaceFlowers = function(flowerbed, n) {

    if (flowerbed.length === 1 && flowerbed[0] === 0) {
        return true;
    }

    let count = n;
    if (flowerbed[0] === 0 && flowerbed[1] === 0){
        flowerbed[0] = 1;
        count--;
    };
    if (count <= 0) return true;
    for (let i = 1; i < flowerbed.length; i++) {
        if (flowerbed[i] === 1) {
            continue;
        } else {
            if (flowerbed[i - 1] === 0 && (i + 1 === flowerbed.length || flowerbed[i + 1] === 0)) {
                flowerbed[i] = 1;
                count--;
                if (count <= 0) break;
            }
        }
    }
    return count === 0;
};