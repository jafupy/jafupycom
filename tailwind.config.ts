import type { Config } from 'tailwindcss';
import colors, { yellow } from 'tailwindcss/colors';
import typography from '@tailwindcss/typography';

const config = {
	content: ['./src/**/*.{html,js,svelte,ts,svx}'],
	prefix: '',
	theme: {
		fontFamily: {
			sans: ['Manrope', 'sans-serif'],
			mono: ['JetBrains Mono', 'monospace'],
			serif: ['Merriweather', 'serif'],
		},
		colors: {
			neutral: {
				50: '#EEF6F8',
				100: '#D3DFE1',
				200: '#B8C8CB',
				300: '#9FAFB4',
				400: '#87969D',
				500: '#717D87',
				600: '#5B6570',
				700: '#464F59',
				800: '#333A42',
				900: '#20262C',
				950: '#0F1315',
			},
			green: colors.emerald,
			red: colors.rose,
			blue: {
				100: '#15131F',
				200: '#EBECF0',
				300: '#B8BFE9',
				400: '#8896D9',
				500: '#7A7FC3',
				600: '#454687',
				700: '#353260',
				800: '#292645',
				900: '#1F1D34',
				950: '#181626',
			},
			yellow: colors.amber,
			black: colors.black,
			white: colors.white,
			tw: colors,
			'old-rose': {
				DEFAULT: 'hsl(359deg, 38.1%, 67.1%)' /* #CB8B8C */,
				200: 'hsl(0deg, 16.7%, 92.9%)',
				300: 'hsl(0deg, 22.2%, 89.4%)',
				400: 'hsl(0deg, 32.7%, 79.6%)',
				500: 'hsl(359deg, 38.1%, 67.1%)',
				600: 'hsl(0deg, 24.4%, 44.1%)',
				700: 'hsl(358deg, 26.2%, 20.2%)',
				800: 'hsl(0deg, 24%, 9.8%)',
			},
			'prussian-blue': {
				DEFAULT: '#1E293B',
				200: '#EAEFEB',
				300: '#DCE1DE',
				400: '#AEC1B8',
				500: '#668988',
				600: '#354D5D',
				700: '#1E293B',
				800: '#12151F',
			},
		},
		extend: {
			colors: {},
			spacing: {
				'ch-sm': '60ch',
				'ch-md': '80ch',
				'ch-lg': '90ch',
				'ch-xl': '120ch',
			},
			keyframes: {
				'accordion-down': {
					from: { width: '0' },
					to: { width: 'initial' },
				},
				'accordion-up': {
					from: { width: 'initial' },
					to: { width: '0' },
				},
				'h-open': {
					from: { height: '0' },
					to: { height: 'initial' },
				},
				'h-close': {
					from: { height: 'initial' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [typography],
} satisfies Config;

export default config;
