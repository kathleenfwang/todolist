var r = ''; 
var li1 = ''; 
var li2 = ''; 

var colors = [ '#ffece5',
  '#ffece5',
  '#fff2e5',
  '#fff9e5',
  '#ffffe5',
  '#f9ffe5',
  '#f2ffe5',
  '#ecffe5',
  '#e5ffe5',
  '#e5ffec',
  '#e5fff2',
  '#e5fff9',
  '#e5ffff',
  '#e5f9ff',
  '#e5f2ff',
  '#e5ecff',
  '#e5e5ff',
  '#ece5ff',
  '#f2e5ff',
  '#f9e5ff',
  '#ffe5ff',
  '#ffe5f9',
  '#ffe5f2',
  '#ffe5ec',
  '#ffe5e5' ]
var color = colors[Math.floor(Math.random()*colors.length)];

 
var urlsnip = 'https://source.unsplash.com/collection/'
var imgurls = [urlsnip +'1211902',urlsnip +'341312', urlsnip+'1482865',]

var imgurl = '';
 imgurl = imgurls[randomNum()]
function randomNum() {
  return Math.floor(Math.random()*imgurls.length)
 
}
var num = 1; 

 $("body").append('<img class ="backgroundimg" src="'+imgurl+'">') 
$('#newPic').click(function(){
  $('img').fadeOut(1000, function(){
  $('img').remove();
   $('body').hide().append('<img class ="backgroundimg" src="'+imgurls[randomNum()]+'/'+ num++ +'">').fadeIn(1000)
  });
  
})
 $('#clearAll').on('click',function(){
  
  if( confirm('Are you sure you want to clear all? You will NOT be able to undo this!'))
   
 {
   $('li').fadeOut(300,function() {
     $('li').remove()
   })
   }
 })


 //this only checks current li's on the page. will not refresh for newly added li's. I would like this li function to fire each time a new li is added. 

$('ul').on('click', 'li',function(){

   $(this).toggleClass('completed')

 
 })
 
 $('#undo').click( function(){
   
   if ( r === 'r') {
      
       
     $('ul').append('<li> <span id = "trash"> <i class="fas fa-trash-alt" ></i></span> <span id ="x">X</span>' + li1+ '<i class="fas fa-check" id = "check"></i></li>')
     r = 'q'
   }
   else {
     $('li:last-child').remove()
   }
 })
 
 $('ul').on('click','span', function(e){
   
  li1= ($(this).parent().text())
  li1=li1.slice(li1.indexOf('X')+1)
  
   $(this).parent().fadeOut(500,function(){
     $(this).remove(); }); // makes the parent of this change color. 
   r = 'r';
   
   e.stopPropagation(); // prevents other functions from "bubbling"
 })
 
 $('#inputText').keypress(function(e){
   if (e.which === 13) {
     $('ul').append('<li style ="border-bottom:2px solid' + color + '"> <span id ="trash"> <i class="fas fa-trash-alt"></i></span><span id = "x">X</span>' + $(this).val() + '<i class="fas fa-check" id = "check"></i></li>')
     $(this).val('')
     li1 = $(this).val();
     r = 'n'
   }
 })
 
 $('.fa-pencil-alt').click(function(){
   $('#input').fadeToggle(); 
 })