import { describe, afterEach, test, expect } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { Counter } from './Counter';

describe(Counter.name, () => {
	// hooks
	afterEach(cleanup);

	// tests
	test('renders text', () => {
		const counter = 0;
		render(<Counter defaultCount={counter} />);

		const btn = screen.getByText(counter);

		expect(btn.tagName).toBe('BUTTON');
	});

	test('button pressing increases counter', () => {
		const counter = 0;
		const expected = '1';
		render(<Counter defaultCount={counter} />);

		const btn = screen.getByText(counter);
		fireEvent.click(btn);

		expect(btn.tagName).toBe('BUTTON');
		expect(btn.textContent).toBe(expected);
	});
});
