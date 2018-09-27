<?php
/**
 * Created by PhpStorm.
 * User: radomir
 * Date: 15/06/2018
 * Time: 17:55
 */
header('Access-Control-Allow-Origin: *');

// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

$table = '';



// data pro odeslani
if (isset($_POST['data'])) {
    echo 'Message has been sent';

    foreach (json_decode($_POST['data']) as $key => $value) {
        $table .= '<tr><td>' . $key . '</td><td>' . $value . '</td></tr>';
    }

    $mail = new PHPMailer(true);                              // Passing `true` enables exceptions
    try {
        //Server settings
        $mail->SMTPDebug = 2;                                 // Enable verbose debug output
        $mail->isSMTP();                                      // Set mailer to use SMTP
        $mail->Host = 'smtp-180270.m70.wedos.net';  // Specify main and backup SMTP servers
        $mail->SMTPAuth = true;                               // Enable SMTP authentication
        $mail->Username = 'radek@brivestudio.com';                 // SMTP username
        $mail->Password = 'Skakalpespresoves82@';                           // SMTP password
        $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 587;                                    // TCP port to connect to

        //Recipients
        $mail->setFrom('radek@brivestudio.com', 'Mailer');
        $mail->addAddress('hello@brivestudio.com');     // Add a recipient
        $mail->addReplyTo('hello@brivestudio.com', 'Information');

        //Content
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = 'Contact form brivestudio.com';
        $mail->Body = '<table>' . $table . '</table>';

        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
    }

}