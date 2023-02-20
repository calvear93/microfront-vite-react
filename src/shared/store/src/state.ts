import { sampleState } from './slices/sample.slice';

export const state = {
	sample: sampleState
};

export type AppState = typeof state;
