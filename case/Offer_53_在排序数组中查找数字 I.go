package _case

/*
	https://leetcode.cn/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/?envType=study-plan-v2&envId=coding-interviews
*/

func search(nums []int, target int) int {
	count := 0
	for i := 0; i < len(nums); i++ {
		if target == nums[i] {
			count++
		}
		if nums[i] > target {
			break
		}
	}
	return count
}

func search2(nums []int, target int) int {
	return searchBack(nums, target)
}

func searchBack(nums []int, target int) int {
	if len(nums) == 0 {
		return 0
	}
	if nums[0] > target {
		return 0
	}
	if len(nums) == 1 && nums[0] == target {
		return 1
	}

	mid := len(nums) / 2
	addCount := 0
	if nums[mid] == target {
		addCount = 1
	}
	return searchBack(nums[:mid], target) + searchBack(nums[mid+1:], target) + addCount
}
