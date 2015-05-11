<?

		function strip_all($str_to_strip)
		 {
			$striped=strip_tags($striped);
		 	$striped=urldecode($str_to_strip);
		 	$striped=mysql_escape_string($striped);
		 	return $striped;
		 }
		//print_r($_POST);
		$fname = $_POST['name'];
		$femail = $_POST['email'];



		if($fname != ''){
			$headers = 'MIME-Version: 1.0' . "\r\n" ;
			$headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n" ;
			$headers .= 'From: Coderiver <info@coderiver.com.ua>' . "\r\n";
			$message = "Name:\n ".$fname."\n<br>\n\n"."Email:\n ".$femail."\n<br>\n\n Useragent:".$_SERVER['HTTP_USER_AGENT']."\n\n\t\t=====".$_SERVER['REMOTE_ADDR'];
			mail('akella.a@gmail.com,html@coderiver.com.ua', '[Coderiver] Beta', $message, $headers);
		}
		echo 'Thank you! We will get in touch with you as soon as possible!';
		?>