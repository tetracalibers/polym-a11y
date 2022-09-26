import"./jsx-runtime.11cbe0d2.js";import{c as e,A as d,M as m,C as s,S as i}from"./Props.7d47b2f6.js";import"./iframe.20f1aba0.js";import{V as u}from"./index.1b4703d4.js";import"./string.707f74f0.js";import"./es.map.constructor.e4c2c5b0.js";import"./es.number.to-fixed.6c61e325.js";import"./index.fc051c50.js";function r(){return r=Object.assign?Object.assign.bind():function(a){for(var n=1;n<arguments.length;n++){var l=arguments[n];for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&(a[o]=l[o])}return a},r.apply(this,arguments)}const c={},y="wrapper";function p({components:a,...n}){return e(y,r({},c,n,{components:a,mdxType:"MDXLayout"}),e(m,{title:"VisuallyHidden/document",component:u,mdxType:"Meta"}),e("h1",null,"VisuallyHidden"),e("p",null,e("strong",{parentName:"p"},"Containers for elements that are visually obscured and whose presence is communicated only to the screen reader")),e("h2",null,"What is this?"),e("p",null,"For example, the"),e(s,{mdxType:"Canvas"},e(i,{name:"using",id:"visuallyhidden--before-using",mdxType:"Story"})),e("p",null,"Enclose this element in a ",e("inlineCode",{parentName:"p"},"VisuallyHidden")," component, and the"),e(s,{mdxType:"Canvas"},e(i,{id:"visuallyhidden--using",mdxType:"Story"})),e("p",null,"The element will not be visible."),e("p",null,"However, unlike ",e("inlineCode",{parentName:"p"},"display:none;"),", etc., it remains in the DOM structure."),e("p",null,"The screen reader can continue to read this element."),e("h2",null,"props API"),e("p",null,e("a",{parentName:"p",href:"?path=/docs/visuallyhidden--using"},"Click to go to 'Docs' tab in playground")),e("h2",null,"Usecase"),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`import { VisuallyHidden } from '@polym/a11y'

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
`)),e("p",null,"Even if you do not want the label to appear in the design, do not use ",e("inlineCode",{parentName:"p"},"display:none;")," to erase its existence."),e("p",null,"Without labels, screen reader users have no way of knowing what the input field is."),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`<label htmlFor="number-input">
  <VisuallyHidden>{label}</VisuallyHidden>
</label>
`)),e("p",null,"The screen reader reads out changes in input values."),e("p",null,"There is no need to display the numbers for this reading, which is where ",e("inlineCode",{parentName:"p"},"VisuallyHidden")," comes in."),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`<VisuallyHidden role="status" aria-live="polite">
  {count}
</VisuallyHidden>
`)))}p.isMDXComponent=!0;const h=()=>{throw new Error("Docs-only story")};h.parameters={docsOnly:!0};const t={title:"VisuallyHidden/document",component:u,includeStories:["__page"]},g={};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:()=>e(d,{mdxStoryNameToKey:g,mdxComponentAnnotations:t},e(p,null))};const N=["__page"];export{N as __namedExportsOrder,h as __page,t as default};
//# sourceMappingURL=VisuallyHidden.stories.6450230d.js.map
