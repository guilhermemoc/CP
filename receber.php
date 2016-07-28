<?php

	$config = array(
		'servidor' => 'mysql.pcimporta.com.br',
		'usuario'  => 'pcimporta',
		'senha'    => '19asdfcpp',
		'banco'    => 'pcimporta'
	);

	$mysqli  = new mysqli($config['servidor'], $config['usuario'], $config['senha'], $config['banco']) or die(mysqli_error());
	$nome     = isset($_POST['name']) ? $_POST['name']:'';
	$email    = isset($_POST['email']) ? $_POST['email']:'';
	$telefone = isset($_POST['telefone']) ? $_POST['telefone']:'';

	if($telefone == 'NaN') {
		$data = array(
			'nome'     => "'". stripslashes($nome) ."'",
			'email'    => "'". stripslashes($email) ."'",
			'telefone' => "'NaN'"
		);
	} else {
		$data = array(
			'nome'     => "'". stripslashes($nome) ."'",
			'email'    => "'". stripslashes($email) ."'",
			'telefone' => "'". stripslashes($telefone) ."'"
		);
	}

	$data = implode(',', $data);
	$sql = "INSERT INTO leads (nome, email, telefone) VALUES (". $data .")";

	$mysqli->query($sql) or die(mysqli_error($mysqli));

	echo json_encode(array(
		"status" => "success",
		"data"   => $data
	));

