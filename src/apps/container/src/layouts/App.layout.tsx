import { PropsWithChildren } from 'react';
import styles from './app.layout.module.scss';

export interface AppLayoutProps extends PropsWithChildren {}

/**
 * App layout (wrapper for pages with header/footer).
 *
 * @returns app layout
 */
export const AppLayout: React.FC<AppLayoutProps> = ({
	children
}): JSX.Element => (
	<main className={styles.layout}>
		<header>header</header>

		{children}

		<footer>footer</footer>
	</main>
);

export default AppLayout;
