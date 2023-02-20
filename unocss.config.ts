import type { UserConfig } from 'unocss';
import tailwind from 'unocss/preset-wind';
import icons from 'unocss/preset-icons';
import { transformerDirectives, transformerVariantGroup } from 'unocss';

const fontFamily = process.env.FONT_FAMILY;

export default {
	presets: [tailwind({ preflight: true }), icons()],
	transformers: [transformerDirectives(), transformerVariantGroup()],
	theme: {
		fontFamily: {
			sans: [fontFamily, 'sans-serif'],
			serif: [fontFamily, 'serif']
		},
		colors: {
			brand: '#007a33',
			primary: '#00b2a9'
		}
	}
} as UserConfig;
