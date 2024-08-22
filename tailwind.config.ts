import type { Config } from 'tailwindcss';
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
		extend: {
			colors: {
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
				'cold-stone': {
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
				'well-red': {
					DEFAULT: '#87252D',
					200: '#F0EBEB',
					300: '#D9ADAD',
					400: '#B66067',
					500: '#87252D',
					600: '#561D23',
					700: '#34181B',
					800: '#1F1315',
				},
				lush: {
					DEFAULT: '#5F944C',
					200: '#EBF0ED',
					300: '#9CC5A0',
					400: '#6FAB6E',
					500: '#5F944C',
					600: '#427738',
					700: '#2C512B',
					800: '#141F13',
				},
				lavendar: {
					DEFAULT: '#454687',
					200: '#EBECF0',
					300: '#B1B7DF',
					400: '#7A7FC3',
					500: '#454687',
					600: '#312F59',
					700: '#1F1C34',
					800: '#15131F',
				},
				pottery: {
					DEFAULT: '#88875A',
					200: '#F3F5F0',
					300: '#E0E5B8',
					400: '#BBBA85',
					500: '#88875A',
					600: '#4C5133',
					700: '#2D2F1E',
					800: '#1C1F15',
				},
			},
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
