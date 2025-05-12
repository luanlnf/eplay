import { ButtonConatiner, ButtonLink } from './styles'

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
  variant?: 'primary' | 'secunday'
}

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  variant = 'primary'
}: Props) => {
  if (type === 'button') {
    return (
      <ButtonConatiner
        variant={variant}
        type="button"
        title={title}
        onClick={onClick}
      >
        {children}
      </ButtonConatiner>
    )
  }

  return (
    <ButtonLink to={to as string} title={title}>
      {children}
    </ButtonLink>
  )
}
export default Button
