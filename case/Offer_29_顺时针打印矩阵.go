package _case

/*
https://leetcode.cn/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/?envType=study-plan-v2&envId=coding-interviews
*/

func spiralOrder(matrix [][]int) []int {
	if len(matrix) == 0 || len(matrix[0]) == 0 {
		return []int{}
	}
	row := len(matrix)
	col := len(matrix[0])
	total := row * col
	visited := make([][]int, row)
	for i := 0; i < row; i++ {
		visited[i] = make([]int, col)
	}
	res := make([]int, 0)

	curRow := 0
	curCol := 0
	direction := [][]int{{0, 1}, {1, 0}, {0, -1}, {-1, 0}}
	directionIndex := 0
	for i := 0; i < total; i++ {
		res = append(res, matrix[curRow][curCol])
		nextRow := curRow + direction[directionIndex][0]
		nextCol := curCol + direction[directionIndex][1]
		if nextRow >= row || nextRow < 0 || nextCol >= col || nextCol < 0 || visited[nextRow][nextCol] == 1 {
			directionIndex = (directionIndex + 1) % 4
		}
		visited[curRow][curCol] = 1
		curRow = curRow + direction[directionIndex][0]
		curCol = curCol + direction[directionIndex][1]
	}

	return res
}
