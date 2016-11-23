import babel from 'rollup-plugin-babel';

export default {
  entry: 'index.es',
  plugins: [
    babel(),
  ],
  targets: [
    {
      format: 'iife',
      indent: true,
      sourceMap: true,
      moduleName: 'poltocar',
      dest: 'dist/poltocar.js'
    },
    {
      format: 'cjs',
      dest: 'index.js'
    }
  ]
};
