第一章 面试题基础篇
1.1 HTML面试题
面试题：行内元素有哪些？块级元素有哪些？ 空(void)元素有哪些？
```
行内元素：span、img、input...
块级元素：div、footer、header、section、p、h1...h6...
空元素：br、hr...


元素之间的转换问题：
display: inline;  把某元素转换成了行内元素      ===>不独占一行的，并且不能设置宽高
display: inline-block; 把某元素转换成了行内块元素 ===>不独占一行的，可以设置宽高
display: block;把某元素转换成了块元素   ===>独占一行，并且可以设置宽高
```

面试题：页面导入样式时，使用link和@import有什么区别？

```
区别一：link先有，后有@import（兼容性link比@import兼容）；
区别二：加载顺序差别，浏览器先加载的标签link，后加载@import
```

面试题：title与h1的区别、b与strong的区别、i与em的区别？

```
title与h1的区别：

定义：
title：概括了网站信息，可以告诉搜索引擎或者用户关于这个网站的内容主题是什么
h1：文章主题内容，告诉蜘蛛我们的网站内容最主要是什么
区别：
title他是显示在网页标题上、h1是显示在网页内容上
title比h1添加的重要 (title > h1 ) ==》对于seo的了解
场景：
网站的logo都是用h1标签包裹的
```

```
b与strong的区别：

定义：
b：实体标签，用来给文字加粗的。
strong：逻辑标签，用来加强字符语气的。
区别：
b标签只有加粗的样式，没有实际含义。
strong表示标签内字符比较重要，用以强调的。
题外话：为了符合css3的规范，b尽量少用该用strong就行了。
```

```
i与em的区别：

定义：
i:实体标签，用来做文字倾斜的。
em：是逻辑标签，用来强调文字内容的
区别：
i只是一个倾斜标签，没有实际含义。
em表示标签内字符重要，用以强调的。
场景：
i更多的用在字体图标，em术语上（医药，生物）。
```

面试题：img标签的title和alt有什么区别？

```
区别一：
title ： 鼠标移入到图片显示的值
alt   ： 图片无法加载时显示的值
区别二：
在seo的层面上，蜘蛛抓取不到图片的内容，所以前端在写img标签的时候为了增加seo效果要加入alt属性来描述这张图是什么内容或者关键词。
```

面试题：png、jpg、gif 这些图片格式解释一下，分别什么时候用？

```
png:无损压缩，尺寸体积要比jpg/jpeg的大，适合做小图标。
jpg:采用压缩算法，有一点失真，比png体积要小，适合做中大图片。
gif:一般是做动图的。
webp：同时支持有损或者无损压缩，相同质量的图片，webp具有更小的体积。兼容性不是特别好。
```

1.2 CSS面试题

面试题：介绍一下CSS的盒子模型

```
CSS的盒子模型有哪些：标准盒子模型、IE盒子模型
CSS的盒子模型区别：
标准盒子模型：margin、border、padding、content
IE盒子模型 ：margin、content（ border +  padding  + content ）
通过CSS如何转换盒子模型：
box-sizing: content-box;/*标准盒子模型*/
box-sizing: border-box;  /*IE盒子模型*/
```

面试题：line-height和heigh区别【大厂】

```
line-height是每一行文字的高，如果文字换行则整个盒子高度会增大（行数*行高）。
height是一个死值，就是这个盒子的高度。
```

面试题：CSS选择符有哪些？哪些属性可以继承？

```
CSS选择符：
    通配（*）
    id选择器（#）
    类选择器（.）
    标签选择器（div、p、h1...）
    相邻选择器(+)
    后代选择器(ul li)
    子元素选择器（ > ）
    属性选择器(a[href])
    
CSS属性哪些可以继承：
文字系列：font-size、color、line-height、text-align...
***不可继承属性：border、padding、margin...
```

原型链:
- 1、每个对象都有一个原型，通过Obj.__proto__获取
- 2、获取对象的属性和方法会沿着原型链获取, 顶层的原型是Object.prototype, null
- 3、可以通过原型实现继承、属性覆盖等高级的功能，是ES6 class关键词的基石

针对对象，可以直接通过字面量的方式指定原型，比如
```
var a = {
    a: 1,
    __proto__: {
        b: 2
    }
}
```
可以方便的获取到原型对象上的内容

针对构造函数，可以通过new关键字创建一个对象。
```
function Bar(value) {
    this.value = value;
}
通过prototype的形式添加公共的方法。
Bar.prototype.GetValue = function() {
    return this.value;
}
```
这里的GetValue方法就是new出来的对象所共享的

存在以下的规则:
```
var bar = new Bar();
bar.__proto__ = Bar.prototype;
Bar.prototype.constructor = Bar;
```
可以通过原型上的constructor找到构造函数