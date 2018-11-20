<?php 

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	


    $headers = '';
    $headers = 'MIME-Version: 1.0'.PHP_EOL;
    $headers .= 'Content-type: text/plain; charset=UTF-8'.PHP_EOL;
    $headers .= 'From: Formulario Web<mercadeo@mirellapinilla.com>'.PHP_EOL;
	$destino1 = 'presidencia@mireyapinilla.com';
	$destino2 = 'Dl@mireyapinilla.com';
	$destino3 = 'mercadeo@mireyapinilla.com';
	$nombre = $_POST['nombre'];
	$correo = $_POST['email'];
	$telefono = $_POST['tel'];
	$asunto = $_POST['asunto'];
	$mensaje = $_POST['mensaje'];

	$contenido = "Nombre: " . $nombre . "\nTelefono" . $telefono . "\nCorreo: " . $correo . "\nAsunto: " . $asunto . "\nMensaje: " . $mensaje;
	mail($destino1 ,"Contacto", $contenido, $headers);
	mail($destino2 ,"Contacto", $contenido, $headers);
	mail($destino3 ,"Contacto", $contenido, $headers);

	

	if ($_POST) {
	        $success .= "Gracias <span class='name-contact'>$nombre</span> . Tu mensaje ha sido enviado";
			
	}else {
	    $errores .= "Tu mensaje no pudo ser enviado";
	
	}

}

?>