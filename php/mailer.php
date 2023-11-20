<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php';

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host = 'smtp.ionos.co.uk'; // Update with your SMTP host
    $mail->SMTPAuth = true;
    $mail->Username = 'david.fox@davidfoxdev.co.uk'; // Update with your SMTP username
    $mail->Password = 'DennisBergkamp10!'; // Update with your SMTP password
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

    // Recipients
    $mail->setFrom('david.fox@davidfoxdev.co.uk', 'David Fox Portfolio');
    $mail->addAddress('david.fox@davidfoxdev.co.uk'); // Primary email
    $mail->addReplyTo('davidfoxtechcode@gmail.com', 'David Fox'); // Reply-to email
    $mail->addCC('talentedmrfox@gmail.com'); // Tertiary email as CC

    // Attachments
    if (!empty($_FILES['attachment']['name'])) {
        $mail->addAttachment($_FILES['attachment']['tmp_name'], $_FILES['attachment']['name']);
    }

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'New Inquiry from Portfolio';
    $mail->Body    = 'Name: ' . htmlspecialchars($_POST['name']) . '<br>'
        . 'Email: ' . htmlspecialchars($_POST['email']) . '<br>'
        . 'Message: ' . htmlspecialchars($_POST['message']);
    $mail->AltBody = 'This is the plain text version of the email content';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
