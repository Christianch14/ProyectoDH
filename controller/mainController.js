
/* para la renderizacionn de la vistas con ejs se usa los siguientes lineas
  No necesario definir la extension ni la carpeta en donde estan almacenadas
*/
const controladorMain={
    blog: (req,res)=>{
        res.render('blog');
    },
    register: (req,res)=>{
        res.render('register')
    },
    login: (req,res)=>{
        res.render('login');
    },

    index: (req,res)=>{
        res.render('index');
    }

}
module.exports= controladorMain;


/* 
    configuracion JSON
    
/*
  {
  "name": "clayton",
  "version": "1.0.0",
  "description": "Tienda de comics clayton",
  "main": "index.js",
  "scripts": {
    "watch:sass": "node-sass public/assets/sass/main.scss public/assets/css/style.css -w",
    "devserver": "live-server",
    "start": "npm-run-all --parallel devserver watch:sass",
    "compile:sass": "node-sass public/assets/sass/main.scss public/assets/css/style.comp.css",
    "concat:css": "concat -o css/style.concat.css css/icon-font.css css/style.comp.css",
    "prefix:css": "postcss --use autoprefixer -b 'last 10 versions' css/style.concat.css -o css/style.prefix.css",
    "compress:css": "node-sass css/style.prefix.css css/style.css --output-style compressed",
    "build:css": "npm-run-all compile:sass concat:css prefix:css compress:css"
  },
  "author": "Equipo 9",
  "license": "ISC",
  "devDependencies": {
    "autoprefixer": "^7.1.4",
    "concat": "^1.0.3",
    "node-sass": "^4.5.3",
    "npm-run-all": "^4.1.1",
    "postcss-cli": "^4.1.1"
  },
  "dependencies": {
    "live-server": "^1.2.1"
  }
}
*/
