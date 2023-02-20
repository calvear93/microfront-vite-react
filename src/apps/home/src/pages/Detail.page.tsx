import { Link, Page, useParams } from '@libs/router';
import { routes } from '../App.router';
import styles from './detail.page.module.scss';

/**
 * Detail page.
 *
 * @returns detail page
 */
export const DetailPage: React.FC = (): JSX.Element => {
	const { id } = useParams();

	return (
		<Page title='Detalle' className={styles.page}>
			<Link to={routes.Main.path}>Ir a Main</Link>

			{id && <h3>ID: {id}</h3>}
		</Page>
	);
};

export default DetailPage;
