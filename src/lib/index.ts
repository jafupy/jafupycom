import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import Banner from './assets/Banner.png';
import Wikiredesign from './assets/wikiredesign.png';
import { createClient } from '@supabase/supabase-js';

/**
 * Appends strings of classes. If non-truthy values are passed, they are ignored.
 * Uses tailwind-merge to merge tailwind classes.
 */
export function cn(...inputs: ClassValue[]): string {
	return twMerge(clsx(inputs));
}
export const assets = {
	logo: 'https://utfs.io/f/d9850d67-72a8-49ad-898e-0fb355fd9671-1zbfv.svg',
	banner: Banner,
	projects: {
		Wikiredesign,
	},
};
export const ghCDNConfig = {
	user: 'jafupy',
	repo: 'site-cdn',
};

export const tw = {
	prussianBlue: {
		200: '#EAEFEB',
		300: '#DCE1DE',
		400: '#AEC1B8',
		500: '#668988',
		600: '#354D5D',
		700: '#1E293B',
		800: '#12151F',
	},
};
