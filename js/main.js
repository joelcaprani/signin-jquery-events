$(function() {

$('.signin').on('click', function(){
 $('.modal').fadeIn('slow')
 })

$('.close').on('click', function(){
 $('.modal').fadeOut('slow')
 })

$(function() {
  $('.submit').on('click', function() {
  $("[name = 'user']").addClass('error')
  $("[name = 'pass']").addClass('error')
  })
  })

  $(function() {
    $("[name = 'user']").on('click', function() {
    $("[name = 'user']").removeClass('error')
    })
    })

  $(function() {
    $("[name = 'pass']").on('click', function() {
    $("[name = 'pass']").removeClass('error')
    })
    })

 })
   // $('.submit').click(function(){
   //    alert("Fill in Username and Password").click();
  // })
