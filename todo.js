//When the user clicks on the completed items, the app strikes the item indicating the completion of task.
$("ul").on("click","li",function(){
  $(this).toggleClass("tasks")
})

//Clicking on trash icon removes the list item from ul
$("ul").on("click","span",function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  })
  event.stopPropagation();
})

//When user enters the to-do item and clicks enter("13"). A new item is added to list using append function.
$("input").keypress(function(event){
	if(event.which === 13){
    if($("input").val() != "" ){
    console.log($("input").val())
    $("ul").append("<li><span><i class = 'fa fa-trash'></i> </span>"+$(this).val()+"</li>")
    $(this).val("")
  }
}
})
//When user clicks on plus icon, text area under the header togles between fadeout and fade in.
$(".fa-plus").on("click",function(){
  $("input").fadeToggle();
})
