export default {
  plugins: {
    autoprefixer: {
      grid: true, // включить префиксы для Grid Layout
      overrideBrowserslist: [ // переопределить browserslist
        "last 3 versions",
        "ie >= 11"
      ]
    }
  }
}