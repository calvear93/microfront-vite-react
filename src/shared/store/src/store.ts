/// <reference types="vite/client" />
/// <reference types="redux" />
import { createStore, createTypedHooks } from 'easy-peasy';
import { type AppState, state } from './state';

export const {
	useStoreActions: useAppActions,
	useStoreDispatch: useAppDispatch,
	useStoreState: useAppState
} = createTypedHooks<AppState>();

export const AppStore = createStore(state, {
	devTools: import.meta.env.VITE_APP_STORE_DEVTOOLS === 'true',
	name: import.meta.env.VITE_APP_NAME
});
