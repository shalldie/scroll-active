// eslint-disable-next-line
const rollupGenerator = require('../../node_modules/@nosaid/rollup').rollupGenerator;

const ifPro = process.env.NODE_ENV === 'production';

export default rollupGenerator([
    {
        input: ifPro ? 'src/ScrollActive.ts' : 'src/dev.ts', // 入口文件，支持 `js|ts` 文件
        output: {
            name: 'ScrollActive', // library 名称
            file: 'dist/scroll-active.js', // 产出文件名
            format: 'umd' // umd 格式
        },
        serve: ifPro
            ? null
            : {
                  open: true,
                  openPage: '/',
                  host: '127.0.0.1',
                  port: 2233
              },
        uglify: ifPro
    }
]);
