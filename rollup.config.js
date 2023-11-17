import _alias from '@rollup/plugin-alias'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
// import builtins from 'rollup-plugin-node-builtins'

const alias = _alias({
	entries: {
		crypto: 'empty-module',
		assert: 'empty-module',
		http: 'empty-module',
		https: 'empty-module',
		os: 'empty-module',
		url: 'empty-module',
		zlib: 'empty-module',
		stream: 'empty-module',
		_stream_duplex: 'empty-module',
		_stream_passthrough: 'empty-module',
		_stream_readable: 'empty-module',
		_stream_writable: 'empty-module',
		_stream_transform: 'empty-module',
	},
})

export default [
	{
		input: 'index.js',
		output: [
			{
				dir: 'dist',
				format: 'es',
			},
		],
		plugins: [alias, resolve({ preferBuiltins: false }), commonjs(), json()],
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
			alias,
			// builtins(),
			resolve({ browser: true, preferBuiltins: false }),
			commonjs({ browser: true }),
			json(),
		],
	},
]
