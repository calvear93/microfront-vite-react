import { atom } from 'jotai';

export interface SampleState {
	status: number;
	message: string;
}

const _innerAtom = atom<SampleState>({
	status: 0,
	message: 'loading'
});

export const sampleAtom = atom(
	(get) => get(_innerAtom).message,
	async (_get, set, status: number) => {
		await new Promise((resolve) => setTimeout(resolve, 2000));

		set(_innerAtom, {
			status,
			message: status === 200 ? 'success' : 'error'
		});
	}
);
