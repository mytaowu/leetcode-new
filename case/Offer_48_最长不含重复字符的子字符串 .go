package _case

/*
https://leetcode.cn/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/
*/

func lengthOfLongestSubstringOffer(s string) int {
	maxLen := 0
	deque := make([]byte, 0)

	for i := 0; i < len(s); i++ {

		if !contains(deque, s[i]) {
			deque = append(deque, s[i])
		} else {
			j := 0
			for ; j < len(deque); j++ {
				if deque[j] == s[i] {
					break
				}
			}
			deque = append(deque[j+1:], s[i])
		}

		maxLen = max(maxLen, len(deque))
	}
	return maxLen
}

func contains(list []byte, item byte) bool {
	for _, val := range list {
		if val == item {
			return true
		}
	}
	return false
}
