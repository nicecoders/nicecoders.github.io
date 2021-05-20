export default {
  target: 'node',
  disableTypeCheck: true,
  cjs: { type: 'babel', lazy: true },
};

// export default {
//   cjs: { type: 'babel', lazy: true },
//   esm: {
//     type: 'babel',
//     importLibToEs: true,
//   },
//   extraBabelPlugins: [
//     [
//       '@babel/plugin-transform-runtime',
//       {
//         corejs: 3,
//       },
//     ],
//   ],
// };
