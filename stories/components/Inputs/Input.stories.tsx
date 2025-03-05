import { Box } from '@radix-ui/themes'
import React from 'react'
import { Input, type TInputProps } from '../../../src/components/Input'

export default {
	title: 'Input',
	component: Input,
	argTypes: {
		value: { control: 'text' },
		placeholder: { control: 'text' },
		variant: {
			control: 'select',
			options: ['soft', 'classic', 'surface'] as TInputProps['variant'][],
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
			] as TInputProps['color'][],
		},
	},
}

export const Default = (args: TInputProps) => {
	return (
		<Box maxWidth="800px">
			<Input {...args} />
		</Box>
	)
}
