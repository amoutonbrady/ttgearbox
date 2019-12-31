import { writable } from 'svelte/store';

export const STATUS = {
	SUCCESS: 'success',
	ERROR: 'error',
	WARNING: 'warning',
	INFO: 'info',
};

function createNotification() {
	const initialState = { show: false, status: STATUS.INFO, text: '' };
	const { subscribe, set, update } = writable(initialState);

	return {
		subscribe,
		show: ({ status = STATUS.INFO, duration = 5000, text = '' }) => {
			update(state => {
				setTimeout(() => set({ ...initialState, text }), duration);

				return { ...state, show: true, status, text };
			});
		},
	};
}

export const notification = createNotification();
