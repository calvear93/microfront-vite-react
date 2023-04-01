import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import 'uno.css';
import 'virtual:unocss-devtools';

const root = createRoot(document.getElementById('app')!);

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
