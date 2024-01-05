<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "tom.capabani@gmail.com"; 
    $subject = "Nouveau message du formulaire de contact";
    $message = "Email: " . $_POST["email"] . "\n\n";
    $message .= "Message:\n" . $_POST["message"];
    $headers = "From: " . $_POST["email"] . "\r\n";
    mail($to, $subject, $message, $headers);
}
?>
