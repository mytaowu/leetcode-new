package _case

func decodeAtIndex(s string, k int) string {
	size := 0
	for i := 0; i < len(s); i++ {
		charItem := s[i]
		if isNumber(charItem - '0') {
			size = size * int(charItem-'0')
		} else {
			size += 1
		}
	}
	for i := len(s) - 1; i >= 0; i-- {
		charItem := s[i]
		k = k % size
		is := isNumber(charItem - '0')
		if k == 0 && !is {
			return string(charItem)
		}
		if is {
			size = size / int(charItem-'0')
		} else {
			size--
		}
	}
	return ""
}

func isNumber(data byte) bool {
	return data > 0 && data <= 9
}
