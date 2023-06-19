// https://leetcode.cn/problems/dui-lie-de-zui-da-zhi-lcof/?envType=study-plan-v2&envId=coding-interviews

var MaxQueue = function() {
    this.deque = [];
    this.data = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
    return this.deque[0] || -1;
};

/**
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
    this.data.push(value);
    while(this.deque.length > 0) {
        if (value > this.deque[this.deque.length - 1]) {
            this.deque.pop();
        } else  {
            break;
        }
    }
    this.deque.push(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
    let res = this.data.shift();
    if (res === this.deque[0]) {
        this.deque.shift();
    }
    return res || -1;
};