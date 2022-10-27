import vue from 'rollup-plugin-vue'
import commonjs from 'rollup-plugin-commonjs'
import multiInput from 'rollup-plugin-multi-input';
import path from 'path';

export default {
  input: ['./components/*.vue'],
  output: {
    format: 'esm',
    dir: './dist/',
  },
  plugins: [
    commonjs(),
    vue(),
    multiInput({
      relative: 'components/', 
      transformOutputPath: (output, input) => `${path.basename(output)}`
    }),
  ]
}
