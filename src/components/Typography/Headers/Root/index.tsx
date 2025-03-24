import { Heading, type HeadingProps } from '@radix-ui/themes'

export type THeaderRootProps = HeadingProps

export function HeaderRoot(props: THeaderRootProps) {
	return <Heading {...props}>{props.children}</Heading>
}
