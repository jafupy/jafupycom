import Root from './root.svelte';

import Button from './button.svelte';
import Separator from './separator.svelte';
import HoldButton from './button-hold.svelte';
import InputText from './input-text.svelte';

export const M: {
	Button: typeof Button;
	Separator: typeof Separator;
	HoldButton: typeof HoldButton;
	InputText: typeof InputText;
} = {
	Button,
	Separator,
	HoldButton,
	InputText,
};

export default Root;
