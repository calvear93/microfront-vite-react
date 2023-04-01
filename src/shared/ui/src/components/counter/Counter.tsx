import { useState } from 'react';
import styles from './counter.module.scss';

export interface CounterProps
	extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'onClick'> {
	defaultCount?: number;
}

/**
 * Button component.
 *
 * @returns component
 */
export const Counter: React.FC<CounterProps> = ({
	defaultCount = 0,
	...attrs
}): JSX.Element => {
	const [count, setCount] = useState(defaultCount);

	return (
		<button
			{...attrs}
			className={styles.container}
			onClick={() => setCount(count + 1)}
			type='button'
		>
			{count}
		</button>
	);
};
