import { BrowserRouter } from '@libs/router';
import { AppRouter } from './App.router';

/**
 * Here occur the initialization,
 * for routing, store and main app.
 *
 * @returns app container
 */
export const App: React.FC = (): JSX.Element => {
	return (
		<BrowserRouter basename={import.meta.env.BASE_URL}>
			<AppRouter />
		</BrowserRouter>
	);
};
