import { Button, Flex, Text } from '@radix-ui/themes'

export type TExemploComponentProps = {
	title: string
}

export function ExemploComponent({ title = 'Hello' }: TExemploComponentProps) {
	return (
		<Flex direction="column" gap="2" align="center">
			<Text>{`${title} from Radix Themes :)`}</Text>
			<Button>Let's go</Button>
		</Flex>
	)
}
