<?php 

//header( "Refresh: 3 url=https://www.ucliktechnologies.com/google-workspace/" );

/*if(isset($_POST['submit'])){
    $to = "shami.lkct@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $uname = $_POST['user-name'];
    $uemail = $_POST['user-email'];
    $phone = $_POST['user-phone'];
    $message = $_POST['user-msg'];
    $subject = "Form submission";
    $subject2 = "Copy of your form submission";
    $message = $uname . " " . $uemail . " Applicant Deatils:". $phone ." ".$message."". "\n\n" . $_POST['message'];
    //$message = $first_name . " " . $last_name . " wrote the following:" . "\n\n" . $_POST['message'];
    $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];
    
   
    
    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    }*/
    
if(isset($_POST['submit']))

{
    if(isset($_POST['submit']))
     {
    $to = "pankajgunwal38@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $select-box = $_POST['select-box'];
    $subject = "Form submission";
    $subject2 = "Copy of your form submission";
    $message ="Name:". $first_name. "\n\n" . "Phone: " . $phone ."\n\n". "Email: ".$from. "\n\n"." Google Workspace Query:" . "\n\n" . $_POST['message'];
    $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    // echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
     header('Location: thankyou.html'); 
      }
    
   }
   
?>
    




