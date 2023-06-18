// https://leetcode.cn/problems/ti-huan-kong-ge-lcof/?envType=study-plan-v2&envId=coding-interviews
// var replaceSpace = function(s) {
//     return s.replaceAll(" ", '%20');
// };

var replaceSpace = function(s) {
    return s.split(" ").join("%20")
};