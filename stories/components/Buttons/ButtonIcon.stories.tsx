import { Box } from '@radix-ui/themes'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {
	ButtonIcon,
	type TButtonIconProps,
} from '../../../src/components/Buttons/ButtonIcon'

import * as RootStories from './Root.stories'

const meta: Meta<TButtonIconProps> = {
	title: 'Buttons/ButtonIcon',
	component: (args: TButtonIconProps) => {
		return <ButtonIcon {...args}>Text Button</ButtonIcon>
	},
	argTypes: {
		...RootStories.Default.argTypes,
		loadingIcon: {
			control: 'boolean',
			description: 'Show loading icon',
			defaultValue: false,
		},
	},
	args: {
		...RootStories.Default.args,
		loadingIcon: false,
	},
}

export default meta
type Story = StoryObj<TButtonIconProps>

export const Default: Story = {}
