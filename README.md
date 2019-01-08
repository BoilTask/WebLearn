## 20190104

### 知识点

`HTML` hyper text markup language 超文本标记语言

`meta charset`用于设置页面字符编码格式：
```html
<meta charset="utf-8">
```

`CSS` cascading style sheet 层叠样式表
### 重点

#### margin
`margin`

#### position
`position`

#### animation
`animation`

#### radial-gradient
`radial-gradient`

#### display
`display` 属性规定元素应该生成的框的类型。

|值 |描述 |
|-- |-- |
|none				|此元素不会被显示。													|
|block				|此元素将显示为块级元素，此元素前后会带有换行符。					|
|inline				|默认。此元素会被显示为内联元素，元素前后没有换行符。				|
|inline-block		|行内块元素。（`CSS2.1`新增的值）									|
|list-item			|此元素会作为列表显示。												|
|run-in				|此元素会根据上下文作为块级元素或内联元素显示。						|
|compact			|`CSS`中有值`compact`，不过由于缺乏广泛支持，已经从`CSS2.1`中删除。	|
|marker				|`CSS`中有值`marker`，不过由于缺乏广泛支持，已经从`CSS2.1`中删除。	|
|table				|此元素会作为块级表格来显示（类似`<table>`），表格前后带有换行符。	|
|inline-table		|此元素会作为内联表格来显示（类似`<table>`），表格前后没有换行符。	|
|table-row-group	|此元素会作为一个或多个行的分组来显示（类似`<tbody>`）。				|
|table-header-group	|此元素会作为一个或多个行的分组来显示（类似`<thead>`）。				|
|table-footer-group	|此元素会作为一个或多个行的分组来显示（类似`<tfoot>`）。				|
|table-row			|此元素会作为一个表格行显示（类似`<tr>`）。							|
|table-column-group	|此元素会作为一个或多个列的分组来显示（类似`<colgroup>`）。			|
|table-column		|此元素会作为一个单元格列显示（类似`<col>`）							|
|table-cell			|此元素会作为一个表格单元格显示（类似`<td>`和`<th>`）				|
|table-caption		|此元素会作为一个表格标题显示（类似`<caption>`）						|
|inherit			|规定应该从父元素继承`display`属性的值。							|

#### justify-content
在弹性盒对象的各项周围留有空白，如：
```css
div{
    display: flex;
    justify-content: space-around;
}
```

|值 |描述 |
|--	|--	|
|flex-start | 默认值。项目位于容器的开头。 |
|flex-end |项目位于容器的结尾。 |
|center |项目位于容器的中心。 |
|space-between |项目位于各行之间留有空白的容器内。 |
|space-around |项目位于各行之前、之间、之后都留有空白的容器内。	|
|initial |设置该属性为它的默认值。请参阅 initial。 |
|inherit |从父元素继承该属性。请参阅 inherit。 |

[Flex 布局教程：实例篇（骰子）](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html?bsh_bid=683103006)

#### align-items
`align-items` 属性定义flex子项在flex容器的当前行的侧轴（纵轴）方向上的对齐方式。

|值 |描述 |
|-- |-- |
|stretch |默认值。<br>元素被拉伸以适应容器。<br>尺寸尽可能接近所在行的尺寸，但同时会遵照'min/max-width/height'属性的限制。 |
|center |元素位于容器的中心。<br>弹性盒子元素在该行的侧轴（纵轴）上居中放置。<br>（如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度）。 |
|flex-start |元素位于容器的开头。<br>弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界。 |
|flex-end |元素位于容器的结尾。<br>弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界。 |
|baseline |元素位于容器的基线上。<br>如弹性盒子元素的行内轴与侧轴为同一条，则该值与'flex-start'等效。<br>其它情况下，该值将参与基线对齐。 |
|initial |设置该属性为它的默认值。请参阅 initial。 |
|inherit |从父元素继承该属性。请参阅 inherit。 |

#### border
`border` 设置边框

solid

```css
border: solid 1px red;
```

#### border-radius
`border-radius` 设置边框圆角

#### box-shadow
`box-shadow` 设置阴影

## 20190107

### 知识点

#### 让子元素居中
- 使用flex布局
```CSS
display: flex;
justify-content: center;
align-items: center;
```

- 2使用flex布局
 ```CSS
display: flex;
justify-content: center;
align-items: center;
```

#### 显示圆形
为正方形设置圆角边框
```CSS
#pannel{
	width: 800px;
	height: 800px;
	border: solid 1px #000;
	border-radius: 50%;
}
```

#### 文本居中
水平居中：

使用text-align
```CSS
text-align: center;
```
垂直居中：

设置行号，将行号和元素设置一样可以实现单行文本的垂直居中
```CSS
line-height: [div高度];
```

#### 设置定时器
使用`setInterval`并传入参数
```JS
setInterval(function(){
	//处理语句
}, 1000);
```
可直接传入函数名
```JS
setInterval(timeUpdate, 1000);
```
#### 设置某一块文字
获取组件，设置内容
```JS
var charBox = document.getElementById("char-box");
charBox.textContent = c;
```
### 重点
#### font-weight
设置字体粗细

#### Math.random
`Math.random`用于生成一个`[0,1)`的随机数

#### 监听事件
监听键盘的按下事件，为事件绑定一个函数。函数的参数e标识本次事件的事件对象。
```JS
document.body.onkeydown
……
```
## 20190108
### 知识点
#### CSS设置某一属性样式
设置state为blank的元素样式：
```CSS
[state=blank]{
	background-image: url(img/blank.png);
	background-size: 100% 100%;
}
```
### 重点


