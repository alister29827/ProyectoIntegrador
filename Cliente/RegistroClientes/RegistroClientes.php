<?php
$conn = new mysqli("localhost", "root", "", "raices_fusion");

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

if (isset($_POST['nombre'], $_POST['correo'], $_POST['contrasena'])) {
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $contrasena = password_hash($_POST['contrasena'], PASSWORD_DEFAULT);

    $stmt = $conn->prepare("INSERT INTO clientes (nombre_compl_client, correo, contrasena) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $nombre, $correo, $contrasena);

    if ($stmt->execute()) {
        echo "<script>alert('Registro exitoso'); window.location.href='../InicioCliente/inicio.html';</script>";
    } else {
        echo "Error al registrar: " . $stmt->error;
    }

    $stmt->close();
} else {
    echo "Error: No se recibieron los datos correctamente.";
}

$conn->close();
?>
