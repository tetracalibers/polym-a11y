import { ComponentStory } from '@storybook/react'
import { desc_as } from './args/common/as'
import { desc_children } from './args/common/children'
import { desc_ref } from './args/common/ref'
import { VisuallyHidden } from '../components/VisuallyHidden'
import { LoremIpsum } from 'react-lorem-ipsum'
import React from 'react'
import {
  Title,
  Subtitle,
  Description,
  ArgsTable,
  PRIMARY_STORY
} from '@storybook/addon-docs'

const DocsPage = () => (
  <>
    <Title />
    <Subtitle />
    <Description />
    <ArgsTable story={PRIMARY_STORY} />
  </>
)

export default {
  title: 'VisuallyHidden',
  component: VisuallyHidden,
  parameters: {
    docs: {
      page: () => <DocsPage />,
      description: {
        component:
          'Containers for elements that are visually obscured and whose presence is communicated only to the screen reader'
      }
    }
  },
  argTypes: {
    ...desc_as,
    ...desc_ref,
    ...desc_children
  }
}

export const Using: ComponentStory<typeof VisuallyHidden> = () => (
  <VisuallyHidden>
    <LoremIpsum />
  </VisuallyHidden>
)

export const BeforeUsing: ComponentStory<typeof VisuallyHidden> = () => (
  <LoremIpsum />
)
