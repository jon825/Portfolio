$(document).ready(()=>{
  let from;
  let contact_name;
  let subject;
  let text;
  $("#send_email").click(()=>{
    user_name = $("#user_name").val();
    email_address = $("#email_address").val();
    text = $("#content").val();
    if(user_name == "" || email_address == "" || text == ""){
      $("#message").empty().html("<br>Please fill out the form!")
    } else{
    // $("#message").text("Sending E-mail..Please wait");
    $.get("http://localhost:5000/send",{
      user_name:user_name,
      email_address:email_address,
      text:text
    }, $("#message").empty().html("<br>Your message has been sent! I will get back to you via email!")
    )
  }
  })
})
