package main

import "fmt"

//import "fmt"
//
//func Append(s []int) {
//	s = append(s, 5)
//}
//
//func Add(s []int) {
//	for i := range s {
//		s[i] = s[i] + 5
//	}
//}
//
//func main() {
//	s := []int{1, 2, 3, 4, 5}
//	Append(s)
//	fmt.Println("s:", s)
//
//	Add(s)
//	fmt.Println("s:", s)
//}

type T interface{}

func main() {
	var (
		t  T
		p  *T
		i1 interface{} = t
		i2 interface{} = p
	)
	fmt.Println(i1 == t, i1 == nil)
	fmt.Println(i2 == p, p == nil, i2 == nil)

	//var a interface{} = 1
	//var b interface{} = 1
	//var c interface{} = 2
	//var d interface{} = 1.0
	//fmt.Println(a == b) // false
	//fmt.Println(a == c) // true
	//fmt.Println(a == d) // false
}

//func foo() (err error) {
//	defer func() {
//		fmt.Println(err)
//
//		err = errors.New("a")
//	}()
//
//	defer func(e error) {
//		fmt.Println(err)
//
//		err = errors.New("b")
//	}(err)
//	return errors.New("c")
//}
//
//func main() {
//	fmt.Println(foo())
//}
