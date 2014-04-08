<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Signup</title>
  </head>
  <body>
  	<?php
  		$name = $_REQUEST["name"];
  		$email = $_REQUEST["email"];
  		$message = $_REQUEST["message"];

  		$content = "Name:" . "\t" . $name . "\n\n" . "Email:" . "\t" . $email . "\n\n" . "Message:" . "\t" . $message;

  		mail("julia.ryanx@gmail.com", "Contact Received", $content)

  	?>
  </body>
</html>