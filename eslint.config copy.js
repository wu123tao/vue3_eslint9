import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import tseslint from 'typescript-eslint';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import { defineConfig, globalIgnores } from 'eslint/config';
import stylisticJs from '@stylistic/eslint-plugin-js';
import vueParser from 'vue-eslint-parser';

export default defineConfig([
	{
		files: ['**/*.{ts,js,mjs,cjs,vue}'],
		languageOptions: {
			globals: globals.browser,
			parserOptions: { parser: tseslint.parser }
		}
	},
	/** js推荐配置 */
	pluginJs.configs.recommended,
	/** vue推荐配置 */
	...pluginVue.configs['flat/recommended'],
	/** prettier 配置 */
	prettierRecommended,

	{
		plugins: {
			'@stylistic/js': stylisticJs
		},
		rules: {
			/** 配置 eslint-stylistic 规则 */
			// 确保 Prettier 的行为不会被 ESLint 覆盖
			// quotes: ['error', 'single', { allowTemplateLiterals: true }]
		}
	},
	//javascript 规则
	// {
	// 	files: ['**/*.{js,mjs,cjs,vue,ts}'],
	// 	rules: {
	// 		// "comma-dangl"
	// 	}
	// },
	// vue 规则
	{
		files: ['**/*.{vue}'],
		languageOptions: {
			parser: vueParser,
			globals: { ...globals.browser, ...globals.node },
			parserOptions: {
				parser: tseslint.parser,
				ecmaVersion: 'latest'
			}
		},
		rules: {
			// 关闭对 defineProps 的有效性检查
			'vue/valid-define-props': 'off',
			// 关闭 Prop 类型要求的警告
			'vue/require-prop-types': 'off'
		}
	},
	globalIgnores(['**/node_modules/**', '**/dist/**', '**/*.html', '.husky', '**/*.md', '**/public/**'])
]);
