<?php


	$get = isset($_GET['page']) ? $_GET['page']:'home';
	switch($get) {
		case 'home': default:
			require_once('site.php');
		break;

		case 'ola':
			require_once('ola.php');
		break;

		case 'conhecer':
			require('bot.php');
		exit;
	}

