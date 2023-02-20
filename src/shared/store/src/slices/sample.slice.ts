import { Action, action } from 'easy-peasy';

export interface SampleState {
	status: number;
	message: string;
}

export interface SampleSlice {
	state: SampleState;
	update: Action<SampleSlice, number>;
}

/**
 * Sample slice for app store.
 *
 * @example
 *  import { useStoreActions, useStoreState } from 'app/App.store';
 *
 *  export const AnyComponent = () => {
 *	  const message = useStoreState(({ sample: { state } }) => state.message);
 *	  const update = useStoreActions(({ sample: { update } }) => update);
 *
 *	  useEffect(() => {
 *		  update(200);
 *	  }, [update]);
 *	  ...
 *  }
 *
 * @returns sample slice
 */
export const sampleState: SampleSlice = {
	state: { status: 0, message: 'loading' },
	update: action(({ state }, status) => {
		state.status = status;
		state.message = status === 200 ? 'success' : 'error';
	})
};
