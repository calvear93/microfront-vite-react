import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { generatePath, Link, Page } from '@libs/router';
import { sampleAtom } from '@shared/store';
import { routes } from '../App.router';
import styles from './main.page.module.scss';

// routes
const detailPath = routes.Detail.path[0];
const detailPathWithId = (id: number) =>
	generatePath(routes.Detail.path[1], { id });

/**
 * Main page.
 *
 * @returns main page
 */
export const MainPage: React.FC = (): JSX.Element => {
	const [message, setStatus] = useAtom(sampleAtom);

	// effects
	useEffect(() => {
		setStatus(200);
	}, [setStatus]);

	// jsx
	return (
		<Page title='Inicio' className={styles.page}>
			<Link to={detailPath}>Ir a Detail</Link>
			<Link to={detailPathWithId(123)}>Ir a Detail 123</Link>

			<h1 className='text-brand font-bold underline'>
				hello world
				<div className='mdi-alarm text-orange-400' />
			</h1>

			<h3 className='font-semibold text-teal-600'>{message}</h3>
		</Page>
	);
};

export default MainPage;
