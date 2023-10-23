<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $project = $_POST["project"];
    $message = $_POST["message"];

    // You can customize the email content and recipient
    $to = "email@example.com";
    $subject = "New Contact Form Submission";
    $message_body = "Name: $name\nEmail: $email\nProject: $project\nMessage:\n$message";

    // Send the email
    if (mail($to, $subject, $message_body)) {
        echo "Message sent successfully.";
    } else {
        echo "Message sending failed.";
    }
}
?>
