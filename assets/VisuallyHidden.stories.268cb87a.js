import{V as n,d as o}from"./index.1b4703d4.js";import{j as e,b as t,F as s}from"./jsx-runtime.11cbe0d2.js";import{D as r,a as i,P as a}from"./Props.7d47b2f6.js";import"./iframe.20f1aba0.js";import{T as l,S as c}from"./Subtitle.86230e5a.js";import"./index.fc051c50.js";import"./string.707f74f0.js";import"./es.map.constructor.e4c2c5b0.js";import"./es.number.to-fixed.6c61e325.js";const m={as:{control:{type:null},description:"If you specify an HTML tag name, the component will be rendered using that tag, preserving semantic markup; if you specify a React component, you can merge the styles and props that the component has.",table:{category:"polymorphic",type:{summary:null},defaultValue:{summary:"div"}}}},d={children:{control:{type:null},description:"Child elements of the element specified by as props",table:{type:{summary:null},category:"react"}}},p={ref:{control:{type:null},description:"It can be used in the same way as a ref in React.",table:{category:"react",type:{summary:null},defaultValue:{summary:null}}}},u=()=>t(s,{children:[e(l,{}),e(c,{}),e(r,{}),e(i,{story:a})]}),R={title:"VisuallyHidden",component:n,parameters:{storySource:{source:`import { ComponentStory } from '@storybook/react'
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
`,locationsMap:{using:{startLoc:{col:60,line:44},endLoc:{col:1,line:48},startBody:{col:60,line:44},endBody:{col:1,line:48}},"before-using":{startLoc:{col:66,line:50},endLoc:{col:1,line:52},startBody:{col:66,line:50},endBody:{col:1,line:52}}}},docs:{page:()=>e(u,{}),description:{component:"Containers for elements that are visually obscured and whose presence is communicated only to the screen reader"}}},argTypes:{...m,...p,...d}},S=()=>e(n,{children:e(o.LoremIpsum,{})}),I=()=>e(o.LoremIpsum,{}),L=["Using","BeforeUsing"];export{I as BeforeUsing,S as Using,L as __namedExportsOrder,R as default};
//# sourceMappingURL=VisuallyHidden.stories.268cb87a.js.map
