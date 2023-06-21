# switchup
Transform signals from one library into another via nanostores

## Supported libraries
- `@preact/signals-core`, which is used by preact
- `nanostores`, which is used as the intermediate store for transforming
- `@vue/reactivity`, which is used in vue 3
- `@angular/core` signals are planned for support, but currently I do not know how to use Angular and signals are still in developer preview.

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