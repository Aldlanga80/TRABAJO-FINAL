# Trabajo Final 
Tienda Simulada con React y FakeStoreAPI

## Objectivo
Crear una pagina de comercio electrónico simulada utilizando React y FakeStoreAPI para consumir datos públicos (autenticación, usuarios), tambien funciones como registro, inicio de sesión, navegación y manejos de estados global.

## Funcionalidades implementadas
- Registro de usuarios con formulario y validación.
- Inicio de sesión vía FakeStoreAPI (endpoint `/auth/login`).
- Autenticación simulada con React Context (`user`, `login`, `logout`, `register`) y uso de token.
- Navegación entre páginas públicas (Home, Login, Registro, Sobre Nosotros) y privadas (Dashboard) usando React Router.
- Ruta protegida (`PrivateRoute`) para restringir acceso si no hay usuario autenticado.
- Página “Sobre Nosotros” con secciones explicativas (de qué trata el proyecto, público, tecnologías).
- Página “Not Found” (404) con diseño amigable y botón de regreso al inicio.
- Popup/modal para editar productos (formulario edit), con overlay transparente y estilos personalizados.
- Manejo de errores/gracias/mensajes de feedback en formularios (error si faltan campos, éxito en registro).

## Instrucciones para ejecutar localmente
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Aldlanga80/TRABAJO-FINAL.git

2. Entrar al directivo del proyecto:
   cd TRABAJO-FINAL

3. Instalar las dependecias:
   npm install

4. Ejecutar la paginas o aplicacion:
   npm run dev

5. Abrir en el navegador: 

Local:   http://localhost:5173/


   

