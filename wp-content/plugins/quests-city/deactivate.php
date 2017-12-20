<?php
function quest_deactivate (){
	$date = "[".date("Y-m-d H:i:s")."]";
	error_log($date." Плагин деактивирован\r\n", 3, dirname(__FILE__)."/quest_errors_log.log");
}