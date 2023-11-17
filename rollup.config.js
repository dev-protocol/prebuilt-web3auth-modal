// import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import builtins from 'rollup-plugin-node-builtins'

export default [
	{
		input: 'index.js',
		output: [
			{
				dir: 'dist',
				format: 'es',
			},
		],
		plugins: [
			resolve({ preferBuiltins: false }),
			commonjs(),
			builtins(),
			json(),
		],
	},
	{
		input: 'index.js',
		output: [
			{
				dir: 'dist/browser',
				format: 'es',
			},
		],
		plugins: [
			resolve({ browser: true, preferBuiltins: false }),
			commonjs({ browser: true }),
			builtins(),
			json(),
		],
	},
]
