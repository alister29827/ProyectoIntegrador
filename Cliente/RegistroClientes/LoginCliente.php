<?php
$conn = new mysqli("localhost", "root", "", "raices_fusion");

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

session_start();

if (isset($_POST['correo'], $_POST['contrasena'])) {
    $correo = $_POST['correo'];
    $contrasena = $_POST['contrasena'];

    $stmt = $conn->prepare("SELECT * FROM clientes WHERE correo = ?");
    $stmt->bind_param("s", $correo);
    $stmt->execute();
    $resultado = $stmt->get_result();

    if ($resultado->num_rows > 0) {
        $cliente = $resultado->fetch_assoc();

        if (password_verify($contrasena, $cliente['contrasena'])) {
            $_SESSION['cliente'] = $cliente;
            //echo "success";
        } else {
            echo "wrong_password";
        }
    } else {
        echo "not_found";
    }

    $stmt->close();
} else {
    echo "no_data";
}

$conn->close();
?>
