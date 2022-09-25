import { PolymorphicComponentPropWithRef } from '@polym/react-props'
import { ElementType } from 'react'

export type CoreProps<As extends ElementType> =
  PolymorphicComponentPropWithRef<As>

export type AllProps<As extends ElementType> = CoreProps<As>
