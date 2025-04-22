import { Flex } from '@radix-ui/themes'
import { HeaderSm, SubtitleLg } from '../../components'
import ImgTitle from './assets/devstage.svg'
import { BackgroundGrid } from './components/BackgroundGrid'

export function PageConnect(props: any) {
	return (
		<BackgroundGrid>
			<Flex direction="column" justify="center" align="center" p="8" gap="4">
				<Flex justify="center" align="center">
					<img src={ImgTitle} alt="DevStage logo" />
				</Flex>

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
			</Flex>
		</BackgroundGrid>
	)
}
