import { Route } from 'react-router-dom';
import { RouteComponent, RouteInfo } from '../route.interface';

/**
 * Wraps a page with a layout if defined.
 *
 * @param Element
 * @param Layout
 * @param props layout props
 *
 * @returns element inside layout
 */
export const wrapElementWithLayout = (
	Element: JSX.Element | JSX.Element[],
	Layout?: RouteComponent,
	props?: React.ComponentProps<any>
): JSX.Element | JSX.Element[] => {
	return Layout ? <Layout {...props}>{Element}</Layout> : Element;
};

/**
 * Wraps a component with a layout if defined.
 *
 * @param Component
 * @param Layout
 * @param componentProps
 * @param layoutProps
 *
 * @returns component inside layout
 */
export const wrapComponentWithLayout = (
	Component: RouteComponent,
	Layout?: RouteComponent,
	componentProps?: React.ComponentProps<any>,
	layoutProps?: React.ComponentProps<any>
): JSX.Element => {
	return Layout ? (
		<Layout {...layoutProps}>
			<Component {...componentProps} />
		</Layout>
	) : (
		<Component {...componentProps} />
	);
};

/**
 * Creates a Route from route info.
 *
 * @param name component name
 * @param routeInfo path and route config
 *
 * @returns routes as component
 */
export const routeFromInfo = (
	name: string,
	{ path, layout, page, config, pageProps, layoutProps }: RouteInfo
): JSX.Element => {
	const routePath = path as string;

	const render = wrapComponentWithLayout(
		page,
		layout,
		pageProps,
		layoutProps
	);

	return (
		<Route
			id={routePath}
			key={routePath}
			path={routePath}
			element={render}
			{...config}
		/>
	);
};
