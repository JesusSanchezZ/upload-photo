//import { init } from "./js/chistes-page";

// import { init } from "./js/usuarios-page";

// import { obtenerUsuarios } from "./js/http-provider";

// console.time('prueba');
// obtenerUsuarios().then((usuarios) => {
//     console.table(usuarios);
//     console.timeEnd('prueba');
// });

// init();

//init();

// import * as CRUD from './js/crud-provider';

// CRUD.getUsuario(1).then(console.log);

// CRUD.crearUsuario({
//     name: 'Jesus',
//     job: 'Carpintero'
// }).then(console.log);

// CRUD.actualizarUsuario( 1, {
//     name: 'Mellisa',
//     job : 'Developer'
// }).then( console.log );

// CRUD.borrarUsuario(1).then(console.log);


import { init } from './js/archivos-page';

init();


// Instalacion de webpack: npm install webpack webpack-cli --save-dev
// uso de webpack desde archivo package.json --> en scripts "build" : "webpack". Se ejecuta; npm run build
/**
 * págian oficial webpack: https://webpack.js.org/configuration/
 * 
 *   plugins:  https://webpack.js.org/loaders/html-loader/             --> Mueve los archivos
 *             https://webpack.js.org/plugins/html-webpack-plugin/     --> inyección de código html en el index
 * 
 *   instalación: npm install --save-dev html-loader
 *                npm install --save-dev html-webpack-plugin
 * 
 *   DevServer: https://webpack.js.org/configuration/dev-server/      --> instalación: npm i -D webpack-dev-server, -D = --save-dev
 *            agregamos al package.json un script,  "start" : "webpack serve --config webpack.config.js --open --port=8080"
 *            Se ejecuta: npm start
 * 
 *   Cargara Archivos de estilos: 
 *             https://webpack.js.org/loaders/style-loader/
 *             https://webpack.js.org/loaders/css-loader/
 *             instalación: npm i -D style-loader
 *                          npm i -D css-loader
 * 
 *   Carga de estilos globales:
 *             paquete: https://webpack.js.org/plugins/mini-css-extract-plugin/
 *             instalación: npm i -D mini-css-extract-plugin
 * 
 *  Carga de imageness:
 *             https://v4.webpack.js.org/loaders/file-loader/
 *             instalacion: npm i -D file-loader
 * 
 *  Copiar archivos estáticos:
 *             instalación: npm i -D copy-webpack-plugin
 * 
 *  Minificación de css:
 *             instalación: npm i -D css-minimizer-webpack-plugin terser-webpack-plugin
 * 
 *  Portabilidad de la aplicación:
 *             plugin: https://babeljs.io/
 *             instalación: npm i -D babel-loader @babel/core
 *              npm i -D @babel/preset-env
 * 
 *  Configuración inicial de git
 *      git config --global user.name "username"
 *      git config --global user.email "mail"
 *      git config --global color.ui auto     --->  Opcional
 * 
 *       
 *      git init                              ---> inicializa repositorio
 *      git add .                             ---> prparamos la carga
 *      git commit -m "Primer commit"         ---> sube archivos
 *      git checkout -- .                     ---> si hubo cambios en archivo origen se pueden respaldar del repositorio de git
 *      git log
 * 
 *      Subir a gitHub
 *      git remote add origin "enlaceDelRepositorio"
 *      git branch -M main                    ---> Creamos la rama
 *      git push -u origin main               ---> Subimos al repositorio
 * 
 *      Subir Cambios al repositorio
 *          git add .
 *          git commit -m "comentario"
 *          git push
 *      git status
 * 
 *      github pages
 *          activamos en el repositorio /docs
 *          subimos cambios al repositorio
 * 
 *      Añadir comentarios ctr +  k, crt + c --> comentar, ctrl + c --> comentar
 * 
 */