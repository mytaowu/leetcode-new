package _case

import "testing"

func Test_decodeAtIndex(t *testing.T) {
	type args struct {
		s string
		k int
	}
	tests := []struct {
		name string
		args args
		want string
	}{
		{
			name: "Test",
			args: args{
				s: "leet2code3",
				k: 10,
			},
			want: "0",
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := decodeAtIndex(tt.args.s, tt.args.k); got != tt.want {
				t.Errorf("decodeAtIndex() = %v, want %v", got, tt.want)
			}
		})
	}
}
