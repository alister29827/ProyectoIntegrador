export default class AuthService {
  async register(data) {
    const formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key]);
    }

    try {
      const response = await fetch("http://localhost/RaicesFusionPHP/RegistroClientes.php", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP status ${response.status}`);
      }

      const text = await response.text();
      console.log("Respuesta del servidor:", text);
      return text;
    } catch (error) {
      console.error("❌ Error en AuthService.register:", error);
      throw error;
    }
  }
}
