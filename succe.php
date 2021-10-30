<?php
header("Content-Type: text/html; charset=utf-8");
$email = htmlspecialchars($_POST["email"]);
$name = htmlspecialchars($_POST["name"]);
$tel = htmlspecialchars($_POST["tel"]);
$text = htmlspecialchars($_POST["text"]);
$addr = htmlspecialchars($_POST["addr"]);


$check = is_array($_POST['check']) ? $_POST['check'] : array();
$check = implode (', ', $check );

$radio = htmlspecialchars($_POST["radio"]);

$refferer = getenv('HTTP_REFERER');
$date=date("d.m.y"); // число.месяц.год  
$time=date("H:i"); // часы:минуты:секунды 
$myemail = "salvation2011@meta.ua";

$tema = "Заказ товара";
$message_to_myemail = "Текст письма: Поздравляем вас с удачной покупкой
<br><br>
Имя: $name<br>
E-mail: $email<br>
Телефон: $tel<br>
Адресс:$addr<br>
Сообщение:$text<br>
Источник (ссылка): $refferer
";

mail($myemail, $tema, $message_to_myemail, "From: Sitename <попа> \r\n Reply-To: WAYUP \r\n"."MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n" );


$tema = "Заказ товара";
$message_to_myemail = "
Текст письма<br>
Файл: <a href='http://numbers.andrewgavrilov.me/files/ripple.zip' download>Название файла</a>

";
$myemail = $email;
mail($myemail, $tema, $message_to_myemail, "From: WAYUP <попа> \r\n Reply-To: WAYUP \r\n"."MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n" );


$f = fopen("leads.xls", "a+");
fwrite($f," <tr>");    
fwrite($f," <td>$email</td> <td>$name</td> <td>$tel</td>   <td>$date / $time</td>");   
fwrite($f," <td>$refferer</td>");    
fwrite($f," </tr>");  
fwrite($f,"\n ");    
fclose($f);


?>
