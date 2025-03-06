import { Box } from '@radix-ui/themes'
import React from 'react'
import {
	InputRoot,
	type TInputRootProps,
} from '../../../src/components/Inputs/Root'

export default {
	title: 'Inputs/Root',
	component: InputRoot,
	argTypes: {
		value: { control: 'text' },
		placeholder: { control: 'text' },
		defaultValue: { control: 'text' },
		variant: {
			control: 'select',
			options: [
				'soft',
				'classic',
				'surface',
			] satisfies TInputRootProps['variant'][],
		},
		color: {
			control: 'select',
			options: [
				'red',
				'blue',
				'green',
				'yellow',
				'purple',
				'gray',
				'violet',
			] as TInputRootProps['color'][],
		},
	},
}

export const Default = (args: TInputRootProps) => {
	return (
		<Box maxWidth="800px">
			<InputRoot {...args} />
		</Box>
	)
}

Default.args = {
	placeholder: 'Placeholder here...',
}
