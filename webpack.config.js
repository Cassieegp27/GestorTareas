const path = require('path');

module.exports = {
    mode:'development',  
    entry: './src/index.js', // Punto de entrada de la applicación
    output: {
        filename: 'bundle.js', // Nombre del archivo de salida
         path: path.resolve(__dirname,'dist'), //Carpeta de salida
    },
 module: {
rules: [
{
    test: /\.css$/, // Expresión regular o regex para identificar archivos CSS
use: ['style-loader', 'css-loader'], // Librerias o loaders que sirven para procesar archivos CSS
},
{
    test: /\.js$/, //Regex para identificar archivos javascript
    exclude: /node_modules/, //excluir carpeta node_modules
    use: {
        loader: 'babel-loader', // loader para llevar javascript moderno a javascript antiguo para que sea compatible con todos los navegadores
        options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  devtool: 'source-map', //Generar source map p mapas de codigo para facilitar la depuración
  devServer: {
    static: {
        directory: path.resolve(__dirname, 'dist'),
    },
    compress: true, //Habilitar compresión grip
    port: 9000, //puerto del servidor de desarrollo
  },
}; 