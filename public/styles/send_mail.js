$(document).ready(()=>{
  let from;
  let to;
  let subject;
  let content;
  $("#send_email").click(()=>{
    to = $("#to").val();
    subject = $("#subject").val();
    content = $("#content").val();

    // $("#message").text("Sending E-mail..Please wait");
    $.get("http://localhost:5000/send",{
      to:to,
      subject:subject,
      content:content},(data)=>{
        if(data == "sent"){
          console.log("Sent")
        }
      }
    )
  })
})
