<?php
$conexion = new mysqli("localhost", "root", "", "Raices_Fusion");

if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

$nombre = $_POST['nombre'];
$ruc = $_POST['ruc'];
$direccion = $_POST['direccion'];
$tipo = $_POST['tipo'];

$sql = "INSERT INTO Negocios (nombre, ruc, direccion, tipo)
        VALUES ('$nombre', '$ruc', '$direccion', '$tipo')";

if ($conexion->query($sql) === TRUE) {
    echo "Negocio registrado correctamente";
} else {
    echo "Error: " . $conexion->error;
}

$conexion->close();
?>
