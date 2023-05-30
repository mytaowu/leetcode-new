package _case

/*
https://leetcode.cn/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/?envType=study-plan-v2&envId=coding-interviews
*/

func reverseLeftWords(s string, n int) string {
	return s[n:] + s[:n]
}

func reverseLeftWords2(s string, n int) string {
	b := make([]byte, len(s))
	curIndex := 0
	for i := n; i < len(s); i++ {
		b[curIndex] = s[i]
		curIndex++
	}

	for i := 0; i < n; i++ {
		b[curIndex] = s[i]
		curIndex++
	}
	return string(b)
}
