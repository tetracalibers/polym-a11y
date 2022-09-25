import { ElementType, forwardRef, ReactElement } from 'react'
import { InvisibleContainer } from './InvisibleContainer'
import { AllProps } from './model'

type VisuallyHiddenComponent = <As extends ElementType>(
  props: AllProps<As>
) => ReactElement | null

const _VisuallyHidden = <As extends ElementType>({
  ref,
  as,
  children,
  ...props
}: AllProps<As>) => {
  return (
    <InvisibleContainer {...props} ref={ref} as={as || 'div'}>
      {children}
    </InvisibleContainer>
  )
}

export const VisuallyHidden: VisuallyHiddenComponent =
  forwardRef(_VisuallyHidden)
