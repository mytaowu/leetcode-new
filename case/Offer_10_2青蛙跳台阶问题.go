package _case

/*
https://leetcode.cn/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/?envType=study-plan-v2&envId=coding-interviews
*/

func numWays(n int) int {
	if n == 0 {
		return 1
	}
	if n <= 2 {
		return n
	}
	var f1 int64 = 1
	var f2 int64 = 2
	for i := 3; i <= n; i++ {
		temp := f1
		f1 = f2
		f2 = f1 + temp

		f1 %= 1000000007
		f2 %= 1000000007
	}
	return int(f2)
}
