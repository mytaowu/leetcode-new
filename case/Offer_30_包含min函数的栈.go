package _case

/*
https://leetcode.cn/problems/bao-han-minhan-shu-de-zhan-lcof/?envType=study-plan-v2&envId=coding-interviews
*/
type MinStack struct {
	data     []int
	minQueue []int
}

func ConstructorMinStack() MinStack {
	return MinStack{
		data:     make([]int, 0),
		minQueue: make([]int, 0),
	}
}

func (this *MinStack) Push(x int) {
	this.data = append(this.data, x)
	if len(this.minQueue) == 0 {
		this.minQueue = append(this.minQueue, x)
		return
	}
	if x <= this.minQueue[len(this.minQueue)-1] {
		this.minQueue = append(this.minQueue, x)
	}
}

func (this *MinStack) Pop() {
	val := this.data[len(this.data)-1]
	this.data = this.data[:len(this.data)-1]

	if val == this.minQueue[len(this.minQueue)-1] {
		this.minQueue = this.minQueue[:len(this.minQueue)-1]
	}
}

func (this *MinStack) Top() int {
	return this.data[len(this.data)-1]
}

func (this *MinStack) Min() int {
	return this.minQueue[len(this.minQueue)-1]
}
