package tree

import "testing"

func TestRecursionPreorderTraversal(t *testing.T) {
	type args struct {
		node *BinaryTree
	}
	tests := []struct {
		name string
		args args
	}{
		{
			name: "test",
			args: args{node: rootNode},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			RecursionPreorderTraversal(tt.args.node)
		})
	}
}

func TestTraversal(t *testing.T) {
	type args struct {
		node *BinaryTree
	}
	tests := []struct {
		name string
		args args
	}{
		{
			name: "test",
			args: args{node: rootNode},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			Traversal(tt.args.node)
		})
	}
}
