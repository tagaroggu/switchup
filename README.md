# switchup
Transform signals from one library into another via nanostores

## Supported libraries
- `@preact/signals-core`, which is used by preact
- `nanostores`, which is used as the intermediate store for transforming
- `@vue/reactivity`, which is used in vue 3
- `rxjs`, observables and subjects are supported
- `svelte`, as Nanostores implements [svelte's store contract](https://svelte.dev/docs#component-format-script-4-prefix-stores-with-$-to-access-their-values-store-contract)

## Roadmap
- `solid-js` signals functionality is implemented but not yet tested so not yet labelled as supported.
- `@builder.io/qwik`

## Example use
```vue
<script setup>
    import { fromPreactSignal } from 'switchup/from/preact-signals';
    import { toVueReactivityRef } from 'switchup/to/vue-reactivity';

    import data from './data.js'; // For example, this could be a preact signal, or from an entirely different package

    const wrappedData = toVueReactivityRef(fromPreactSignal(data));
</script>
<template>
    <h1>{{ wrappedData }}</h1>
</template>
```

## Why?
1. I know that nanostores already gives integrations for using the atoms and maps with libraries and frameworks, but my main goal with this was being able to take a given state implementation library and be able to use the data stored in it in another library reactively. 
2. It's a project that I was interested in creating, and so I did it. Practice is important, right? Making projects, regardless of how useless they are, is still practice, and that's part of why this exists. 