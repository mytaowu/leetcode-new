package _case

import "testing"

func Test_maxProfit3(t *testing.T) {
	type args struct {
		prices []int
	}
	tests := []struct {
		name string
		args args
		want int
	}{
		{
			name: "test",
			args: args{
				prices: []int{1, 4, 2, 3},
			},
			want: 4,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := maxProfit3(tt.args.prices); got != tt.want {
				t.Errorf("maxProfit3() = %v, want %v", got, tt.want)
			}
		})
	}
}
