package tree

import "fmt"

type BinaryTree struct {
	val   int
	left  *BinaryTree
	right *BinaryTree
}

var rootNode = &BinaryTree{
	val: 1,
	left: &BinaryTree{
		val: 2,
		left: &BinaryTree{
			val: 4,
			right: &BinaryTree{
				val: 6,
				left: &BinaryTree{
					val: 7,
				},
				right: &BinaryTree{
					val: 8,
				},
			},
		},
	},
	right: &BinaryTree{
		val:   3,
		right: &BinaryTree{val: 5},
	},
}

// RecursionPreorderTraversal 先序遍历
func RecursionPreorderTraversal(node *BinaryTree) {
	if node == nil {
		return
	}
	// 先序遍历
	fmt.Printf("%v", node.val)
	RecursionPreorderTraversal(node.left)
	RecursionPreorderTraversal(node.right)

	// 中序遍历
	RecursionPreorderTraversal(node.left)
	fmt.Printf("%v", node.val)
	RecursionPreorderTraversal(node.right)

	// 后续遍历
	RecursionPreorderTraversal(node.left)
	RecursionPreorderTraversal(node.right)
	fmt.Printf("%v", node.val)
}

// Traversal 层序遍历
func Traversal(node *BinaryTree) {
	// 初始化切片
	list := make([]*BinaryTree, 0)
	// 根节点进入切片
	list = append(list, node)
	// 为空时跳出循环
	for len(list) != 0 {
		tempNode := list[0]
		list = list[1:]
		fmt.Printf("%v", tempNode.val)
		if tempNode.left != nil {
			list = append(list, tempNode.left)
		}
		if tempNode.right != nil {
			list = append(list, tempNode.right)
		}
	}
}

// BuildTree 知道前序遍历/中序遍历的结果，构建二叉树
func BuildTree(preorder []int, inorder []int) *BinaryTree {
	root := preorder[0]
	rootNode = &BinaryTree{val: root}

	i := 0
	for ; i < len(inorder); i++ {
		if root == inorder[i] {
			break
		}
	}
	rootNode.left = BuildTree(preorder[1:len(inorder[:i])+1], inorder[:i])
	rootNode.right = BuildTree(preorder[len(inorder[:i])+1:], inorder[i+1:])
}
