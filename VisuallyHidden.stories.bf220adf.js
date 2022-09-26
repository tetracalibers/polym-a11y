import "react";
import { V as n, d as o } from "./index.70e8dcb9.js";
import { j as e, a as t, F as s } from "./jsx-runtime.1e0c78f5.js";
import { D as r, a as i, P as a } from "./Props.e30088b6.js";
import "./iframe.6f0d8ddb.js";
import { T as l, S as c } from "./Subtitle.a22b4ba1.js";
import "./index.21d6a9d3.js";
import "./string.15091591.js";
import "./es.map.constructor.be929aeb.js";
import "./es.number.to-fixed.963eadaa.js";
const m = {
  as: {
    control: {
      type: null
    },
    description: "If you specify an HTML tag name, the component will be rendered using that tag, preserving semantic markup; if you specify a React component, you can merge the styles and props that the component has.",
    table: {
      category: "polymorphic",
      type: {
        summary: null
      },
      defaultValue: {
        summary: "div"
      }
    }
  }
}, d = {
  children: {
    control: {
      type: null
    },
    description: "Child elements of the element specified by as props",
    table: {
      type: {
        summary: null
      },
      category: "react"
    }
  }
}, p = {
  ref: {
    control: {
      type: null
    },
    description: "It can be used in the same way as a ref in React.",
    table: {
      category: "react",
      type: {
        summary: null
      },
      defaultValue: {
        summary: null
      }
    }
  }
}, u = () => /* @__PURE__ */ t(s, {
  children: [/* @__PURE__ */ e(l, {}), /* @__PURE__ */ e(c, {}), /* @__PURE__ */ e(r, {}), /* @__PURE__ */ e(i, {
    story: a
  })]
}), S = {
  title: "VisuallyHidden",
  component: n,
  parameters: {
    storySource: {
      source: `import { ComponentStory } from '@storybook/react'
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
`,
      locationsMap: {
        using: {
          startLoc: {
            col: 60,
            line: 44
          },
          endLoc: {
            col: 1,
            line: 48
          },
          startBody: {
            col: 60,
            line: 44
          },
          endBody: {
            col: 1,
            line: 48
          }
        },
        "before-using": {
          startLoc: {
            col: 66,
            line: 50
          },
          endLoc: {
            col: 1,
            line: 52
          },
          startBody: {
            col: 66,
            line: 50
          },
          endBody: {
            col: 1,
            line: 52
          }
        }
      }
    },
    docs: {
      page: () => /* @__PURE__ */ e(u, {}),
      description: {
        component: "Containers for elements that are visually obscured and whose presence is communicated only to the screen reader"
      }
    }
  },
  argTypes: {
    ...m,
    ...p,
    ...d
  }
}, I = () => /* @__PURE__ */ e(n, {
  children: /* @__PURE__ */ e(o.LoremIpsum, {})
}), L = () => /* @__PURE__ */ e(o.LoremIpsum, {}), x = ["Using", "BeforeUsing"];
export {
  L as BeforeUsing,
  I as Using,
  x as __namedExportsOrder,
  S as default
};
//# sourceMappingURL=VisuallyHidden.stories.bf220adf.js.map
