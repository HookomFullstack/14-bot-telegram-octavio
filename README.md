# Bot telegram Octavio 
## V1.0

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Bot automatizado para mensajes de bienvenida.

## Requerimientos para poder usar el bot

- [nodejs 6+](/https://nodejs.org/es/)
- [visual studio code](/https://code.visualstudio.com/)

## ¿Como lo uso?

Simple, abres un terminal CMD dentro de la carpeta y escribes

```
npm i
```

Con ese comando se instalara todas las dependencias del proyecto.

Luego, sencillamente colocas

```
nodemon index
```

Y listo ya estara funcionando de forma local.


¿Como realizo los cambios del bot?

Hay un archivo llamado cambios.js

al ingresar alli hay varias variables de texto

solo hay que editar los textos correspondientes importante que sea entre '', guardar el archivo y listo, subirlo con

```
git push heroku main
```

Y ya estara listo en el servidor.