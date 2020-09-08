<?php

	// Mail settings
	$to      = "info@leonardoacostaatelier.com";
    $subject = "Kontaktformular";
    $email = $_POST['email'];

	// You can put here your email
    $header = 'From: ' . $email . "\r\n" .
	$header.= "MIME-Version: 1.0\r\n";
	$header.= "Content-Type: text/plain; charset=utf-8 . \r\n";
    $header.= "X-Priority: 3\r\n";

	if (isset($_POST["email"]) && isset($_POST["name"])  && isset($_POST["message"])) {

        $content .= $_POST["email"]    . "\r\n";
        $content .= $_POST["name"]   . "\r\n";
        $content .= $_POST["message"]   . "\r\n";

		if (mail($to, $subject, $content, $header)) {
			$result = array(
				"message"    => "Danke, dass sie uns kontaktiert haben",
				"sendstatus" => 1
			);

			echo json_encode($result);
		} else {
			$result = array(
				"message"    => "Sorry, etwas stimmt nicht.",
				"sendstatus" => 0
			);

			echo json_encode($result);
		}

	}

?>