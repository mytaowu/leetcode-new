
/**
 * https://leetcode.cn/problems/min-stack/?envType=study-plan-v2&envId=top-100-liked
 */

var MinStack = function () {
  this.data = [];
  this.minQueue = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.data.push(val)
  if (this.minQueue.length === 0) {
    this.minQueue.push(val);
    return;
  }
  if (val <= this.minQueue[this.minQueue.length - 1]) {
    this.minQueue.push(val);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  const val = this.data.pop();
  if (val === this.minQueue[this.minQueue.length - 1]) {
    this.minQueue.pop();
  }
  return val;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.data[this.data.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minQueue[this.minQueue.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */