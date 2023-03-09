/**
 * Global types definition for
 * environment variables.
 *
 * @summary environment variables schema
 */
interface ImportMetaEnv {
	readonly NODE_ENV: 'development' | 'production' | 'test';
	readonly MODE: NODE_ENV;
	readonly VITE_APP_ENV: 'dev' | 'qa' | 'stg' | 'prod';

	readonly DEV: 'true' | 'false';
	readonly PROD: 'true' | 'false';
	readonly VITEST: boolean;
	readonly SSR: 'true' | 'false';
	readonly VITE_APP_STORE_DEVTOOLS: 'true' | 'false';

	// SECTION: project info from package.json
	readonly VITE_APP_VERSION: string;
	readonly VITE_APP_PROJECT: string;
	readonly VITE_APP_NAME: string;
	readonly VITE_APP_TITLE: string;
	readonly VITE_APP_DESCRIPTION: string;

	// SECTION: base config
	readonly PORT: string;
	readonly BASE_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
