import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ files: ['**/*.{js,mjs,cjs,ts,vue}'] },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	...pluginVue.configs['flat/essential'],
	{
		files: ['**/*.vue'],
		languageOptions: { parserOptions: { parser: tseslint.parser } }
	},
	{
		plugins: ['import-helpers'],
		rules: {
			'vue/multi-word-component-names': 'off',
			'vue/attributes-order': 'warn',
			'vue/no-mutating-props': 'error',
			'@typescript-eslint/explicit-function-return-type': 'warn',
			'@typescript-eslint/no-explicit-any': 'warn',
			'no-unused-vars': 'off',
			'no-var': 'error',
			'no-duplicate-imports': 'error',
			eqeqeq: ['error', 'always'],
			'import-helpers/order-imports': [
				'warn',
				{
					// example configuration
					newlinesBetween: 'always',
					groups: [
						'/^@mui/',
						'module',
						['/^~/types/'],
						['/^~/assets/', '/^~/theme/'],
						['/^~/router/', '/^~/pages/'],
						['/^~/containers/', '/^~/intl/'],
						['/^~/services/', '/^~/hooks/', '/^~/helpers/'],
						'/^~/store/',
						'/^~/components/',
						['parent', 'sibling', 'index']
					],
					alphabetize: { order: 'asc', ignoreCase: true }
				}
			]
		}
	}
]
