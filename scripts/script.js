// .ready() = is a method of jquery 
// function(){} in method is an IIFE
$(document).ready(function(){
  
  console.log("doc is ready");
  
  //can use let or const 
  let userGreeting = "Hello there, ";

  $("button").click(function(){
    userGreeting += $("#fname").val();
    $("#greetingOutput").text(userGreeting);
  });
  
});
