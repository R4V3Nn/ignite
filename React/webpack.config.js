var webpack = require('webpack');

module.exports = {
  entry: {
    '019_Lesson/019_Classwork/019_Classwork_Task 1/build/bundle': './019_Lesson/019_Classwork/019_Classwork_Task 1/jsx/main.jsx',
    '019_Lesson/019_Classwork/019_Classwork_Task 2/build/bundle': './019_Lesson/019_Classwork/019_Classwork_Task 2/jsx/main.jsx',
    '019_Lesson/019_Classwork/019_Classwork_Task 3/build/bundle': './019_Lesson/019_Classwork/019_Classwork_Task 3/jsx/main.jsx',
    '019_Lesson/019_Homework/019_Homework_Task 1/build/bundle': './019_Lesson/019_Homework/019_Homework_Task 1/jsx/main.jsx',
    '019_Lesson/019_Homework/019_Homework_Task 2/build/bundle': './019_Lesson/019_Homework/019_Homework_Task 2/jsx/main.jsx',
    '019_Lesson/019_Homework/019_Homework_Task 3/build/bundle': './019_Lesson/019_Homework/019_Homework_Task 3/jsx/main.jsx',
  },
  output: {
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: "babel-loader",
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
};