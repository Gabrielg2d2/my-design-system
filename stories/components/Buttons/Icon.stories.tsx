import { Box } from '@radix-ui/themes'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {
	ButtonDefault,
	type TButtonDefaultProps,
} from '../../../src/components/Buttons/Default'

import { BookmarkIcon } from '@radix-ui/react-icons'
import * as RootStories from './Root.stories'

const meta: Meta<TButtonDefaultProps> = {
	title: 'Buttons/Icon',
	component: (args: TButtonDefaultProps) => {
		return (
			<ButtonDefault {...args}>
				<BookmarkIcon /> Text Button
			</ButtonDefault>
		)
	},
	argTypes: {
		...RootStories.Default.argTypes,
	},
	args: {
		...RootStories.Default.args,
		variant: 'soft',
	},
}

export default meta
type Story = StoryObj<TButtonDefaultProps>

export const Default: Story = {}
