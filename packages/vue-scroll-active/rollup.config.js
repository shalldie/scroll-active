// eslint-disable-next-line
const rollupGenerator = require('../../node_modules/@nosaid/rollup').rollupGenerator;
import vuePlugin from 'rollup-plugin-vue';
import bublePlugin from '@rollup/plugin-buble';

const ifPro = process.env.NODE_ENV === 'production';

export default rollupGenerator([
    {
        input: ifPro ? 'src/main.ts' : 'src/dev.ts', // 入口文件，支持 `js|ts` 文件
        output: {
            name: 'VueScrollActive', // library 名称
            file: 'dist/vue-scroll-active.js', // 产出文件名
            format: 'umd', // umd 格式
            globals: {
                vue: 'Vue'
            }
        },
        plugins: [vuePlugin(), bublePlugin()],
        serve: ifPro
            ? null
            : {
                  open: true,
                  openPage: '/',
                  host: '127.0.0.1',
                  port: 2235
              },
        uglify: ifPro
    }
]).map(conf => ({
    ...conf,
    external: ifPro ? ['vue'] : []
}));
