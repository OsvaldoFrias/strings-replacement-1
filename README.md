# Configuración inicial
## Pre requisitos
1. Nodejs (versión utilizada en el desarrollo v16.19.1)
2. Editor de texto (vscode recomendado)

## Primeros pasos
<!-- > npm i -->
1. Abrir consola en la raíz del proyecto
```bash
npm install
```
2. Ejecutar comando:
```bash
npm start
```
3. Abrir navegador en la ruta base: `http://localhost:3000`, y devolverá el mensaje: `Cannot GET /`
4. Seleccionar un archivo a desplegar, ejemplo: `http://localhost:3000/pages/faq`

# Anotacines
* Solamente las vistas que están en la carpeta `/pages` y en la carpeta `/v2` han sido dadas de alta.
* Hay vistas que necesitan información o de una API para devolver información o agregar otro tipo de interacciones, solicitar en esos casos que se arme el ejemplo o el caso en concreto.
* Antes de solicitar un caso con API, guardar todos los cambios y subirlos al repositorio en línea.