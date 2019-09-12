const withTM = require('next-transpile-modules')
const withFonts = require('next-fonts')
module.exports = withFonts(
  withTM({
    transpileModules: ['material-bread', 'react-native-svg', 'react-native-vector-icons'],
    webpack: config => {
      config.resolve.extensions = ['.web.js', '.js']
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        'react-native$': 'react-native-web',
        'react-native-svg$': 'react-native-svg-web'
      }
      return config
    }
  })
)
