import { BookmarkIcon } from '@radix-ui/react-icons'
import { Spinner } from '@radix-ui/themes'
import { ButtonRoot, type TButtonRootProps } from '../Root'

export type TButtonIconProps = TButtonRootProps & {
	iconLeft?: React.ReactNode
	iconRight?: React.ReactNode
	loadingIcon?: boolean
}

export function ButtonIcon(props: TButtonIconProps) {
	return (
		<ButtonRoot size="3" variant="classic" {...props}>
			<Spinner loading={props.loadingIcon}>
				<BookmarkIcon />
			</Spinner>
			{props.children}
		</ButtonRoot>
	)
}
