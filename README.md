# Benatural Website

### Configuración

Instalar las dependencias necesarias que estan en el `package.json`

```bash
npm install
```

### Scripts

Para iniciar el servidor de desarrollo de webpack.

```zsh
npm start
```

Para crear el bundle del proyecto en la carpeta `dist`. Solo usar en caso de hacer el deploy a producción.

```zsh
npm run build
```

### Public path in development

La ruta por defecto de desarrollo es **http://localhost:8000/**

Para cambiar el puerto debes ir al archivo index en la carpeta config

```js
// by default
PORT = 8000;
```

### Public path in production

La ruta de producción se encuentra en el archivo index de la carpeta config.

```js
PRODUCTION_PATH = "https://benatural.com";
```
