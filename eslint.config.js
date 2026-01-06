import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import tseslint from 'typescript-eslint';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import { defineConfig, globalIgnores } from 'eslint/config';
import stylisticJs from '@stylistic/eslint-plugin-js';
import vueParser from 'vue-eslint-parser';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const autoImportConfig = require('./src/types/.eslintrc-auto-import.json');

export default defineConfig([
	{
		files: ['**/*.{ts,js,mjs,cjs,vue}'],
		languageOptions: {
			globals: { ...globals.browser, ...globals.node, ...autoImportConfig.globals },
			parser: tseslint.parser,
			parserOptions: { parser: tseslint.parser }
		}
	},
	/** js推荐配置 */
	pluginJs.configs.recommended,
	/** vue推荐配置 */
	...pluginVue.configs['flat/recommended'],
	/** prettier 配置 */
	prettierRecommended,
	...tseslint.configs.recommended,
	{
		plugins: {
			'@stylistic/js': stylisticJs
		},
		rules: {
			/** 配置 eslint-stylistic 规则 */
		}
	},
	{
		files: ['**/*.vue'],
		languageOptions: {
			parser: vueParser,
			parserOptions: {
				extraFileExtensions: ['.vue']
			}
		},
		rules: {
			// 要求组件名称始终为 “-” 链接的单词
			// 'vue/multi-word-component-names': ['error', { ignores: ['index'] }]
		}
	},
	{
		rules: {
			'@typescript-eslint/no-explicit-any': 'warn'
		}
	},
	// { extends: ['src/types/.eslintrc-auto-import.json'] },
	globalIgnores([
		'**/node_modules/**',
		'**/dist/**',
		'**/*.html',
		'.husky',
		'**/*.md',
		'**/public/**',
		'**/dist/**.d.ts'
	])
]);
