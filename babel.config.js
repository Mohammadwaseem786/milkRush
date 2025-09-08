module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.svg'],
        alias: {
          assets: './src/assests',
          screens: './src/screens',
          components: './src/components',
        },
      },
    ],
  ],
};
