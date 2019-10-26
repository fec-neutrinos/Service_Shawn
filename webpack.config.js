const path = require('path');

// module.exports = {
//   entry: __dirname + '/client/src/index.jsx',
//   module: {
//     rules: [
//       {
//         test: /\.jsx$/,
//         exclude: /node_modules/,
//         include: [path.resolve(__dirname, 'node_modules/react-native')],
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-react', '@babel/preset-env']
//           }
//         }
//       },
//       {
//         test: /\.svg$/,
//         exclude: /node_modules/,
//         loader: 'svg-inline-loader'
//       }
//     ]
//   },
//   output: {
//     filename: 'bundle.js',
//     path: __dirname + '/public'
//   },
//   externals: {
//     'styled-components': {
//       commonjs: 'styled-components',
//       commonjs2: 'styled-components',
//       amd: 'styled-components',
//     },
//   },
//   resolve: {
//     extensions: ['.js', '.jsx'],
//     alias: {
//       react: path.resolve('./node_modules/react')
//     }
//   }
// };

module.exports = {
  entry: __dirname + '/client/src/index.jsx',
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      react: path.resolve('./node_modules/react')
    }
  }
};