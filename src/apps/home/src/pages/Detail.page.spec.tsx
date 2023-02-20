import { describe, expect, test } from 'vitest';
import { MemoryRouter } from '@libs/router';
import { render, screen } from '@testing-library/react';
import { DetailPage } from './Detail.page';

describe('Detail Page', () => {
	// tests
	test('there are an anchor to root', () => {
		render(
			<MemoryRouter>
				<DetailPage />
			</MemoryRouter>
		);

		const link = screen.getByRole('link');

		expect(link).toHaveAttribute('href', '/');
	});
});
