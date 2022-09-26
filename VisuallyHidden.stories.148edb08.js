import "react";
import { c as e, A as d, M as m, C as i, S as s } from "./Props.e30088b6.js";
import "./jsx-runtime.1e0c78f5.js";
import "./iframe.6f0d8ddb.js";
import { V as u } from "./index.70e8dcb9.js";
import "./string.15091591.js";
import "./es.map.constructor.be929aeb.js";
import "./es.number.to-fixed.963eadaa.js";
import "./index.21d6a9d3.js";
function r() {
  return r = Object.assign ? Object.assign.bind() : function(a) {
    for (var n = 1; n < arguments.length; n++) {
      var l = arguments[n];
      for (var o in l)
        Object.prototype.hasOwnProperty.call(l, o) && (a[o] = l[o]);
    }
    return a;
  }, r.apply(this, arguments);
}
const c = {}, y = "wrapper";
function p({
  components: a,
  ...n
}) {
  return /* @__PURE__ */ e(y, r({}, c, n, {
    components: a,
    mdxType: "MDXLayout"
  }), /* @__PURE__ */ e(m, {
    title: "VisuallyHidden/document",
    component: u,
    mdxType: "Meta"
  }), /* @__PURE__ */ e("h1", null, "VisuallyHidden"), /* @__PURE__ */ e("p", null, /* @__PURE__ */ e("strong", {
    parentName: "p"
  }, "Containers for elements that are visually obscured and whose presence is communicated only to the screen reader")), /* @__PURE__ */ e("h2", null, "What is this?"), /* @__PURE__ */ e("p", null, "For example, the"), /* @__PURE__ */ e(i, {
    mdxType: "Canvas"
  }, /* @__PURE__ */ e(s, {
    name: "using",
    id: "visuallyhidden--before-using",
    mdxType: "Story"
  })), /* @__PURE__ */ e("p", null, "Enclose this element in a ", /* @__PURE__ */ e("inlineCode", {
    parentName: "p"
  }, "VisuallyHidden"), " component, and the"), /* @__PURE__ */ e(i, {
    mdxType: "Canvas"
  }, /* @__PURE__ */ e(s, {
    id: "visuallyhidden--using",
    mdxType: "Story"
  })), /* @__PURE__ */ e("p", null, "The element will not be visible."), /* @__PURE__ */ e("p", null, "However, unlike ", /* @__PURE__ */ e("inlineCode", {
    parentName: "p"
  }, "display:none;"), ", etc., it remains in the DOM structure."), /* @__PURE__ */ e("p", null, "The screen reader can continue to read this element."), /* @__PURE__ */ e("h2", null, "props API"), /* @__PURE__ */ e("p", null, /* @__PURE__ */ e("a", {
    parentName: "p",
    href: "?path=/docs/visuallyhidden--using"
  }, "Click to go to 'Docs' tab in playground")), /* @__PURE__ */ e("h2", null, "Usecase"), /* @__PURE__ */ e("pre", null, /* @__PURE__ */ e("code", {
    parentName: "pre",
    className: "language-ts"
  }, `import { VisuallyHidden } from '@polym/a11y'

export const NumberInput = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <Root>
      <DecrementButton
        label="decrement"
        onClick={() => setCount((now) => now - 1)}
      />
      <input id="number-input" onChange={(e) => setCount(e.target.value)} />
      <label htmlFor="number-input">
        <VisuallyHidden>{label}</VisuallyHidden>
      </label>
      <IncrementButton
        label="increment"
        onClick={() => setCount((now) => now + 1)}
      />
      <VisuallyHidden role="status" aria-live="polite">
        {count}
      </VisuallyHidden>
    </Root>
  )
}
`)), /* @__PURE__ */ e("p", null, "Even if you do not want the label to appear in the design, do not use ", /* @__PURE__ */ e("inlineCode", {
    parentName: "p"
  }, "display:none;"), " to erase its existence."), /* @__PURE__ */ e("p", null, "Without labels, screen reader users have no way of knowing what the input field is."), /* @__PURE__ */ e("pre", null, /* @__PURE__ */ e("code", {
    parentName: "pre",
    className: "language-ts"
  }, `<label htmlFor="number-input">
  <VisuallyHidden>{label}</VisuallyHidden>
</label>
`)), /* @__PURE__ */ e("p", null, "The screen reader reads out changes in input values."), /* @__PURE__ */ e("p", null, "There is no need to display the numbers for this reading, which is where ", /* @__PURE__ */ e("inlineCode", {
    parentName: "p"
  }, "VisuallyHidden"), " comes in."), /* @__PURE__ */ e("pre", null, /* @__PURE__ */ e("code", {
    parentName: "pre",
    className: "language-ts"
  }, `<VisuallyHidden role="status" aria-live="polite">
  {count}
</VisuallyHidden>
`)));
}
p.isMDXComponent = !0;
const h = () => {
  throw new Error("Docs-only story");
};
h.parameters = {
  docsOnly: !0
};
const t = {
  title: "VisuallyHidden/document",
  component: u,
  includeStories: ["__page"]
}, g = {};
t.parameters = t.parameters || {};
t.parameters.docs = {
  ...t.parameters.docs || {},
  page: () => /* @__PURE__ */ e(d, {
    mdxStoryNameToKey: g,
    mdxComponentAnnotations: t
  }, /* @__PURE__ */ e(p, null))
};
const T = ["__page"];
export {
  T as __namedExportsOrder,
  h as __page,
  t as default
};
//# sourceMappingURL=VisuallyHidden.stories.148edb08.js.map
