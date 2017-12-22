<?php
if (!define('WP_UNINSTALL_PLUGIN'))
	exit;
wp_mail(get_bloginfo('admin_email'),'Плагин удален', 'Произошло успешное удаление плагина из файла uninstall.php');