package _case

/*
https://leetcode.cn/problems/fei-bo-na-qi-shu-lie-lcof/?envType=study-plan-v2&envId=coding-interviews
*/
func fib(n int) int {
	if n < 2 {
		return n
	}
	var f1 int64 = 0
	var f2 int64 = 1
	for i := 2; i <= n; i++ {
		temp := f1
		f1 = f2
		f2 = f1 + temp

		f1 %= 1000000007
		f2 %= 1000000007
	}
	return int(f2)
}
