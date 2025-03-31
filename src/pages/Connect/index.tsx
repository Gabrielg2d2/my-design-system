import { Flex } from '@radix-ui/themes'
import ImgTitle from './assets/devstage.svg'
import { BackgroundGrid } from './components/BackgroundGrid'

export function PageConnect(props: any) {
	return (
		<BackgroundGrid
			gradientColors={[
				'rgb(23, 26, 30) 70%',
				'rgb(28, 52, 82) 90%',
				'rgb(18, 76, 168) 100%',
			]}
			gradientDirection="topRight"
		>
			<Flex justify="center" align="center">
				<h1 style={{ border: '1px solid red' }}>Connect</h1>
			</Flex>
			<Flex justify="center" align="center">
				<img src={ImgTitle} alt="DevStage logo" />
			</Flex>
		</BackgroundGrid>
	)
}
