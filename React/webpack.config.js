var webpack = require('webpack');

module.exports = {
  entry: {
    '019_Lesson/019_Classwork/019_Classwork_Task 1/build/bundle': './019_Lesson/019_Classwork/019_Classwork_Task 1/jsx/main.jsx',
    '019_Lesson/019_Classwork/019_Classwork_Task 2/build/bundle': './019_Lesson/019_Classwork/019_Classwork_Task 2/jsx/main.jsx',
    '019_Lesson/019_Classwork/019_Classwork_Task 3/build/bundle': './019_Lesson/019_Classwork/019_Classwork_Task 3/jsx/main.jsx',
    '019_Lesson/019_Homework/019_Homework_Task 1/build/bundle': './019_Lesson/019_Homework/019_Homework_Task 1/jsx/main.jsx',
    '019_Lesson/019_Homework/019_Homework_Task 2/build/bundle': './019_Lesson/019_Homework/019_Homework_Task 2/jsx/main.jsx',
    '019_Lesson/019_Homework/019_Homework_Task 3/build/bundle': './019_Lesson/019_Homework/019_Homework_Task 3/jsx/main.jsx',
    '020_Lesson/020_Classwork/020_Classwork_Task 1/build/bundle': './020_Lesson/020_Classwork/020_Classwork_Task 1/jsx/main.jsx',
    '020_Lesson/020_Classwork/020_Classwork_Task 2/build/bundle': './020_Lesson/020_Classwork/020_Classwork_Task 2/jsx/main.jsx',
    '020_Lesson/020_Classwork/020_Classwork_Task 3/build/bundle': './020_Lesson/020_Classwork/020_Classwork_Task 3/jsx/main.jsx',
    '020_Lesson/020_Homework/020_Homework_Task 1/build/bundle': './020_Lesson/020_Homework/020_Homework_Task 1/jsx/main.jsx',
    '020_Lesson/020_Homework/020_Homework_Task 2/build/bundle': './020_Lesson/020_Homework/020_Homework_Task 2/jsx/main.jsx',
    '020_Lesson/020_Homework/020_Homework_Task 3/build/bundle': './020_Lesson/020_Homework/020_Homework_Task 3/jsx/main.jsx',
    '021_Lesson/021_Classwork/021_Classwork_Task 1/build/bundle': './021_Lesson/021_Classwork/021_Classwork_Task 1/jsx/main.jsx',
    '021_Lesson/021_Classwork/021_Classwork_Task 2/build/bundle': './021_Lesson/021_Classwork/021_Classwork_Task 2/jsx/main.jsx',
    '021_Lesson/021_Classwork/021_Classwork_Task 3/build/bundle': './021_Lesson/021_Classwork/021_Classwork_Task 3/jsx/main.jsx',
    '021_Lesson/021_Homework/021_Homework_Task 1/build/bundle': './021_Lesson/021_Homework/021_Homework_Task 1/jsx/main.jsx',
    '021_Lesson/021_Homework/021_Homework_Task 2/build/bundle': './021_Lesson/021_Homework/021_Homework_Task 2/jsx/main.jsx',
    '021_Lesson/021_Homework/021_Homework_Task 3/build/bundle': './021_Lesson/021_Homework/021_Homework_Task 3/jsx/main.jsx',
    '022_Lesson/022_Classwork/022_Classwork_Task 3/build/bundle': './022_Lesson/022_Classwork/022_Classwork_Task 3/jsx/main.jsx',
    '022_Lesson/022_Homework/022_Homework_Task 3/build/bundle': './022_Lesson/022_Homework/022_Homework_Task 3/jsx/main.jsx',
    '023_Lesson/023_Classwork/023_Classwork_Task 1/app/build/bundle': './023_Lesson/023_Classwork/023_Classwork_Task 1/app/src/main.js',
    '023_Lesson/023_Classwork/023_Classwork_Task 2/app/build/bundle': './023_Lesson/023_Classwork/023_Classwork_Task 2/app/src/main.jsx',
     '023_Lesson/023_Homework/023_Homework_Task 1/build/bundle': './023_Lesson/023_Homework/023_Homework_Task 1/src/main.jsx',
     '024_Lesson/024_Classwork/024_Classwork_Task 1/build/bundle': './024_Lesson/024_Classwork/024_Classwork_Task 1/jsx/main.jsx',
     '024_Lesson/024_Classwork/024_Classwork_Task 2/build/bundle': './024_Lesson/024_Classwork/024_Classwork_Task 2/jsx/main.jsx',
     '024_Lesson/024_Classwork/024_Classwork_Task 3/build/bundle': './024_Lesson/024_Classwork/024_Classwork_Task 3/jsx/main.jsx',
     '024_Lesson/024_Homework/024_Homework_Task 1/build/bundle': './024_Lesson/024_Homework/024_Homework_Task 1/jsx/main.jsx',
     '024_Lesson/024_Homework/024_Homework_Task 2/build/bundle': './024_Lesson/024_Homework/024_Homework_Task 2/jsx/main.jsx',
     '024_Lesson/024_Homework/024_Homework_Task 3/build/bundle': './024_Lesson/024_Homework/024_Homework_Task 3/jsx/main.jsx',
      '025_Lesson/025_Classwork/025_Classwork_Task 1/build/bundle': './025_Lesson/025_Classwork/025_Classwork_Task 1/src/main.jsx',
      '025_Lesson/025_Classwork/025_Classwork_Task 2/build/bundle': './025_Lesson/025_Classwork/025_Classwork_Task 2/src/main.jsx',
      '025_Lesson/025_Classwork/025_Classwork_Task 3/build/bundle': './025_Lesson/025_Classwork/025_Classwork_Task 3/src/main.jsx',
      '025_Lesson/025_Homework/025_Homework_Task 1/build/bundle': './025_Lesson/025_Homework/025_Homework_Task 1/src/main.jsx',
  },
  output: {
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: "babel-loader",
      query: {
        presets: ['es2015', 'react'],
        plugins: ["transform-es2015-destructuring", "transform-object-rest-spread"]
      }
    }]
  }
};