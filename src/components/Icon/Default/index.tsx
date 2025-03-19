import { IconRoot, type TIconRootProps } from '../Root'

type TProps = TIconRootProps

export type TIconDefaultProps = TProps

export function IconDefault(props: TIconDefaultProps) {
	return <IconRoot {...props} />
}
