import vue from 'rollup-plugin-vue'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: './HelloWorld.vue',
  output: {
    format: 'iife',
    file: './dist/HelloWorld.js',
    name: 'MyComponent'
  },
  plugins: [
    commonjs(),
    vue()
  ]
}
