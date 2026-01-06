import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import path from 'path';
import { generateTemplateByRouterPlugin } from './vite-plugin/generate-template-by-router';

const pathSrc = path.resolve(__dirname, 'src');

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		vue(),

		// 自定义插件
		generateTemplateByRouterPlugin(),

		AutoImport({
			imports: ['vue'],
			dts: path.resolve(pathSrc, 'types/auto-imports.d.ts'),

			eslintrc: {
				enabled: true,
				filepath: path.resolve(pathSrc, '../.eslintrc-auto-import.json'),
				globalsPropValue: true
			}
		})
	]
});
