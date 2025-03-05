import { Box, Flex } from '@radix-ui/themes'
import { color } from '@storybook/theming'
import React from 'react'
import { Input, type TInputProps } from '../../../src/components/Input'

export default {
	title: 'Input',
	component: Input,
	argTypes: {
		value: { control: 'text' },
		placeholder: { control: 'text' },
		variant: { control: 'select', options: ['soft', 'outlined', 'filled'] },
		color: {
			control: 'select',
			options: ['red', 'blue', 'yellow'],
		},
	},
}

export const Default = (args: TInputProps) => (
	<Box maxWidth="800px">
		<Input {...args} />
	</Box>
)
