<?php

$mailTo = 'tonetree081@gmail.com';
$mailFrom = $_POST['emailFrom'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$fullSubject = "Message From: ".$subject." (".$mailFrom.")" ;

			
mail($mailTo, $fullSubject, $message, "From: ".$mailFrom);
?>