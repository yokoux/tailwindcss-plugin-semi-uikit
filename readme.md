## tailwindcss-plugin-ths-uikit

> A Tailwind CSS plugin based on the [daisyui](https://daisyui.com/) which is a Tailwind CSS component library.

## Packages

- plugin
    `packages/uikit`
- Demo
    `packages/uikit-docs`

## Build

- plugin

    - For Windows
    
    ```shell
    pnpm run build:win:uikit
    ```

    - For Mac/Linux

    ```shell
    pnpm run build:uikit
    ```

## Configuration

```typescript
/** tailwind.config.js */
const thsuikit = require("tailwindcss-plugin-ths-uikit");

/** @type {import('tailwindcss').Config} */
module.exports = {
  // ...
  theme: {
    extend: thsuikit.THSUIKITThemeExtends,
  },
  plugins: [thsuikit.default],
};
```

## Usage 

You can reference [daisyui](https://daisyui.com/components/).

```html
<!-- Example -->
<!-- Default/Light mode "theme-light" or nothing -->
<div class="theme-light">
    <!-- Content -->
</div>
<!-- Dark mode -->
<div class="theme-dark">
    <!-- Content -->
</div>

<!-- Component -->
<button class="btn btn-outline">Button</button>
<button class="btn btn-outline btn-primary">Primary</button>
<button class="btn btn-outline btn-secondary">Secondary</button>
<button class="btn btn-outline btn-accent">Accent</button>
```