import { HeaderRoot, type THeaderRootProps } from '../Root'

type TProps = THeaderRootProps

export type THeaderCustomProps = TProps

export function HeaderCustom(props: TProps) {
	return <HeaderRoot {...props}>{props.children}</HeaderRoot>
}
