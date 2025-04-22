import { Flex } from '@radix-ui/themes'
import type { ReactNode } from 'react'
import ImgTitle from '../../assets/devstage.svg'

type TProps = {
	children: ReactNode
}

export function Container(props: TProps) {
	return (
		<Flex direction="column" justify="center" align="center" p="8" gap="4">
			<Flex justify="center" align="center">
				<img src={ImgTitle} alt="DevStage logo" />
			</Flex>
			{props.children}
		</Flex>
	)
}
