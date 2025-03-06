import { Box } from '@radix-ui/themes'
import React from 'react'
import {
	InputDefault,
	type TInputDefaultProps,
} from '../../../src/components/Inputs/Default'

export default {
	title: 'Inputs/Default',
	component: InputDefault,
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
			] satisfies TInputDefaultProps['variant'][],
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
			] as TInputDefaultProps['color'][],
		},
	},
}

export const Default = (args: TInputDefaultProps) => {
	return (
		<Box maxWidth="800px">
			<InputDefault {...args} />
		</Box>
	)
}

export const Red = (args: TInputDefaultProps) => {
	return (
		<Box maxWidth="800px">
			<InputDefault {...args} />
		</Box>
	)
}
