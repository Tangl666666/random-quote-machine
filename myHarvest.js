//写点关于本项目Random Quote的收获
/*
1. 块级元素：div  , p  , form,   ul,  li ,  ol, dl,    form,   address,  fieldset,  hr, menu,  table
   行内元素：span,   strong,   em,  br,  img ,  input,  label,  select,  textarea,  cite
   如果想让一个图标和一段文字在一行上，别再图标<i>后面加div，因为div会换行，应该接span
2.	坑！jquery一定要在script.js前加载，否则会出错！
3.加载了jquery-ui.js后使用animate不用添加position:absolute/relative等，但仅限jquery-ui新增的属性，要用原来jquery支持的属性还是要设置position属性

*/

//4.jquery 调用 click 事件 的 三种 方式
//第一种
$(document).ready(function(){
  $("#clickme").click(function(){
       alert("Hello World  click");
  });
//第二种
 $('#clickmebind').bind("click", function(){
  alert("Hello World  bind");
 });
//第三种
$('#clickmeon').on('click', function(){
 alert("Hello World  on");
});
});
/*
5.css的@import url用法简单介绍:
  一.在<style>标签中使用:
@import url可以在<style>标签中使用，看如下代码片段:
<style>
@import url("softwhy.com");
div{font-size:14px;}
</style>


二.在外部css文件中使用:
@import url也可以在a.css文件中引入外部的b.css文件，看如下代码:
@import url("softwhy.css");
div{color:red}

本项目中可根据调整url参数family的值来改变字体，字体Raleway很好看！！


*/

/*
6.很多时候如果将一个div的width和height都设置了，那么里面的内容一多就会造成溢出，所以一般只会设置width，而height设置为auto(这个不设置也可以)
7.如果要将一个div设置到窗口中间，margin的左右部分可以设置为auto！，距离上窗口的距离可用margin-top调
8.如果不用bootstrap，为一个button或者a写样式，设置完width,height.background-color,color,border-radius等，你还是会看到有边框！！！
别以为border为0就看不到边框，应该将其设置为border:none!!!
border:none;与border:0;的区别体现有两点：一是理论上的性能差异 二是浏览器兼容性的差异。
性能差异：
【border:0;】把border设为“0”像素虽然在页面上看不见，但按border默认值理解，浏览器依然对border-width/border-color进行了渲染，即已经占用了内存值。
【border:none;】把border设为“none”即没有，浏览器解析“none”时将不作出渲染动作，即不会消耗内存值。

9.同样，当你点击完按钮后，会看到显示蓝色的边框，这时你将outline(轮廓)设置为none就看不到了
10.button的cursor属性设置你鼠标移到按钮时的光标图样，设置为pointer表示一个小手图标
*/

/*
10.最近在学习CSS，在浮动上遇到一问题：既然浮动元素脱离了文档流，为什么文字会环绕在浮动元素的周边而不是跟浮动元素重合呢？ 
第一，绝对定位与浮动的区别。 

绝对定位是将元素彻底从文档流删除，并相对于其包含块定位（包含块可能是文档中的另一个元素或者是初始包含块），元素原先在正常文档流中所占的空间会关闭，
就好像该元素原来不存在一样，该元素再也不会影响其他元素的布局了。

而浮动，会以某种方式将浮动元素从文档的正常流中删除，并把浮动元素向左边和右边浮动，不过它还是会影响布局，关于浮动的有许多规则，读者可自行阅读《CSS权威指南》
一书，介绍地很详细。采用CSS的特有方式，浮动元素几乎“自成一派”，不过它们还是对文档的其余部分有影响！！！。这种影响源自于这样一个事实：一个元素浮动时，其他内容会
“环绕”该元素。

11.要想不让其他内容会“环绕”元素，可设置clear元素，可设置为right,left，both等。


*/


