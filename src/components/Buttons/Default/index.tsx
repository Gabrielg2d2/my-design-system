import { ButtonRoot, type TButtonRootProps } from '../Root'

export type TButtonDefaultProps = TButtonRootProps

export function ButtonDefault(props: TButtonDefaultProps) {
	return (
		<ButtonRoot size="3" variant="classic" {...props}>
			{props.children}
		</ButtonRoot>
	)
}
