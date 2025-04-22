import { Flex } from '@radix-ui/themes'
import { HeaderSm, SubtitleLg } from '../../../../components'

export function TitleAndSubtitle(props: any) {
	return (
		<Flex direction="column" justify="center" align="center" my="4">
			<HeaderSm
				style={{
					color: '#6F9DE2',
					fontWeight: 'bolder',
				}}
			>
				CodeCraft
			</HeaderSm>
			<SubtitleLg
				style={{
					fontWeight: 'bold',
				}}
			>
				Summit 2025
			</SubtitleLg>
		</Flex>
	)
}
