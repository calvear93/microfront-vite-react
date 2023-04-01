import { Route } from 'react-router-dom';
import { FC, LazyExoticComponent } from 'react';

type RouteProps = Omit<
	Parameters<typeof Route>[0],
	'id' | 'path' | 'element' | 'children'
>;

export type RouteComponent = FC | LazyExoticComponent<any>;

export type RoutePath = string | string[];

export interface RouteInfo {
	path: RoutePath;

	page: RouteComponent;

	layout?: RouteComponent;

	pageProps?: React.ComponentProps<any>;

	layoutProps?: React.ComponentProps<any>;

	config?: RouteProps;
}

/**
 * Lookup of routes info, where name
 * is page's React file name or a unique key.
 */
export type RoutesInfoCollection = Record<string, RouteInfo>;
