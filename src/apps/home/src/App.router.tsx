import { lazy } from 'react';
import { createRouter } from '@libs/router';

export const routes = {
	Main: {
		path: '/',
		page: lazy(() => import('./pages/Main.page'))
	},
	Detail: {
		path: ['detail', 'detail/:id'],
		page: lazy(() => import('./pages/Detail.page'))
	}
};

const Router = createRouter({
	routes,
	loader: <h1>Loading</h1>,
	fallback: <h1>Not Found</h1>
});

/**
 * Here you can define logic for authorization
 * redirection or app splitting.
 *
 * @returns application router
 */
export const AppRouter: React.FC = (): JSX.Element => {
	return <Router />;
};
