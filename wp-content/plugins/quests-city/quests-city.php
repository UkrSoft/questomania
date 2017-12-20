<?php
/*
Plugin Name: QuestsCity
Plugin URI: https://www.quests.city/
Description: Описание плагина QuestsCity.
Version: Номер версии плагина, например: 1.0
Author: QuestsCity
Author URI: https://www.quests.city/
*/
require_once dirname(__FILE__)."/deactivate.php";

register_activation_hook(__FILE__, 'quest_activate');
register_deactivation_hook(__FILE__, 'quest_deactivate');
register_uninstall_hook(__FILE__, "quest_uninstall");

function quest_activate (){
	$date = "[".date("Y-m-d H:i:s")."]";
	error_log($date." Плагин активирован\r\n", 3, dirname(__FILE__)."/quest_errors_log.log");
}