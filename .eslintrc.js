module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@scenes': './src/scenes',
          '@utils': './src/utils',
        },
      },
    },
  },
};
