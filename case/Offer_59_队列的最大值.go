package _case

/*
	https://leetcode.cn/problems/dui-lie-de-zui-da-zhi-lcof/?envType=study-plan-v2&envId=coding-interviews
*/

type MaxQueue struct {
	data  []int
	deque []int
}

func Constructor() MaxQueue {
	return MaxQueue{
		data:  make([]int, 0),
		deque: make([]int, 0),
	}
}

func (this *MaxQueue) Max_value() int {
	if len(this.deque) == 0 {
		return -1
	}
	return this.deque[0]
}

func (this *MaxQueue) Push_back(value int) {
	this.data = append(this.data, value)
	if len(this.deque) == 0 {
		this.deque = append(this.deque, value)
		return
	}
	i := len(this.deque) - 1
	for ; i >= 0; i-- {
		if value <= this.deque[i] {
			break
		}
	}
	this.deque = append(this.deque[0:i+1], value)
}

func (this *MaxQueue) Pop_front() int {
	if len(this.data) == 0 {
		return -1
	}
	maxVal := this.data[0]
	this.data = this.data[1:]
	if maxVal == this.deque[0] {
		this.deque = this.deque[1:]
	}

	return maxVal
}
