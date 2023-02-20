import { useEffect } from 'react';
import { generatePath, Link, Page } from '@libs/router';
import { useAppActions, useAppState } from '@shared/store';
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
	const message = useAppState(({ sample: { state } }) => state.message);
	const update = useAppActions(({ sample: { update } }) => update);

	// effects
	useEffect(() => {
		update(200);
	}, [update]);

	// jsx
	return (
		<Page title='Inicio' className={styles.page}>
			<Link to={detailPath}>Ir a Detail</Link>
			<Link to={detailPathWithId(123)}>Ir a Detail 123</Link>

			<h1 className='font-bold underline text-brand'>
				hello world
				<div className='i-mdi-alarm text-orange-400' />
			</h1>

			<h3 className='font-semibold text-teal-600'>{message}</h3>
		</Page>
	);
};

export default MainPage;
