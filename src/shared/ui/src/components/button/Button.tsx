import styles from './button.module.scss';

export interface ButtonProps
	extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'onClick'> {
	text?: string;
}

/**
 * Button component.
 *
 * @returns component
 */
export const Button: React.FC<ButtonProps> = ({
	text,
	...attrs
}): JSX.Element => (
	<button {...attrs} className={styles.container} type='button'>
		{text}
	</button>
);
