# @polym/a11y

**Collection of helpers for implementing React components with accessibility in mind**

## Install

```
npm i --save @polym/a11y
```

or

```
yarn add @polym/a11y
```

## VisuallyHidden

**Containers for elements that are visually obscured and whose presence is communicated only to the screen reader**

[Click here for full documentation and demo](https://tetracalibers.github.io/polym-a11y/?path=/docs/visuallyhidden-document--page)

### Usecase

```ts
import { VisuallyHidden } from '@polym/a11y'

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
```

Even if you do not want the label to appear in the design, do not use `display:none;` to erase its existence.

Without labels, screen reader users have no way of knowing what the input field is.

```ts
<label htmlFor="number-input">
  <VisuallyHidden>{label}</VisuallyHidden>
</label>
```

The screen reader reads out changes in input values.

There is no need to display the numbers for this reading, which is where `VisuallyHidden` comes in.

```ts
<VisuallyHidden role="status" aria-live="polite">
  {count}
</VisuallyHidden>
```
