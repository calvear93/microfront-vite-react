import { PropsWithChildren } from 'react';
import { useAtom } from 'jotai';
import { sampleAtom } from '@shared/store';
import styles from './app.layout.module.scss';

export interface AppLayoutProps extends PropsWithChildren {}

/**
 * App layout (wrapper for pages with header/footer).
 *
 * @returns app layout
 */
export const AppLayout: React.FC<AppLayoutProps> = ({
	children
}): JSX.Element => {
	const [message] = useAtom(sampleAtom);

	return (
		<main className={styles.layout}>
			<header>header: {message}</header>

			{children}

			<footer>footer</footer>
		</main>
	);
};

export default AppLayout;
