//获得随机颜色函数
function getRandomColor(){ 
 return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6); 
 } 
//初始化
var quote="";
var author="";
//点击按钮触发函数，最好封装出来，但放到点击事件里也可以
function getQuote(){

  $.ajax({ 
  //ajax头部，依据api的要求写
     headers:{
     "X-Mashape-Key": "P635I6rEYTmsh4jWyNQz8DB7xdR9p1kDVsejsnsJDPj4jTIfMy",
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept": "application/json"
    },
    url:'https://andruxnet-random-famous-quotes.p.mashape.com/',
    type:"POST",
    success:function(data){  
    	 var randomColor=getRandomColor();
       //因为data是string类型，所以先要解析成js对象
    	 var Data=JSON.parse(data);
    	 quote=Data.quote;
    	 author=Data.author;
       //加载了jquery-ui.js后使用animate不用添加position:absolute/relative等，但仅限jquery-ui新增的属性，要用原来jquery支持的属性还是要设置position属性
         $(".quoteText").animate({
         	opacity:0
         },1000,function(){                         //要善于运用function回调函数
                  $(this).animate({                  //先将文字透明度变为0(相当于消失)，完成后调用回调函数使透明度逐渐变为1并赋值颜色和quote
                     opacity:1,                     
                     color:randomColor,
                     
                  },1000);
                  $(".text").html(quote);
             });

       $(".quoteAuthor").animate({
         	opacity:0
         },1000,function(){
                  $(this).animate({
                     opacity:1,
                     color:randomColor,
                     
                  },1000);
                  $(".author").html(author);
             });
       $("body").animate({
          backgroundColor:randomColor
                 },1000);

       $(".button").animate({
       	backgroundColor:  randomColor
       },1000);





    },
    error: function(err) { alert("error"); }

    });

}
//当 DOM（文档对象模型） 已经加载，并且页面（包括图像）已经完全呈现时，会发生 ready 事件。
//由于该事件在文档就绪后发生，因此把所有其他的 jQuery 事件和函数置于该事件中是非常好的做法。
$(document).ready(function(){
  //因为页面加载完成后要先加载一条quote，不然什么都没有很难看，所以要先执行一次函数
   getQuote();
  // 用$(".new").on("click",getQuote)也可以，和下面的等价
  $(".new").click(function(){
  	getQuote();
  })


//还没搞懂，但先记着吧
  $(".tweet").click(function(){
      var url='https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quote + '" ' + author);
      window.open(url);    //
    
  });

   $(".tumblr").click(function(){
      var url='https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='+encodeURIComponent(author)+'&content=' + encodeURIComponent(quote);
      window.open(url);
    
  });

});