import { signal } from '@preact/signals-core';

/**
 * Transforms a Nanostores atom into a Preact signal
 * @template T
 * @param {import('nanostores').Atom<T>} store
 * @returns {import('@preact/signals-core').Signal<T>}
*/
export function toPreactSignal(store) {
    const s = signal();
    store.subscribe((value) => {s.value = value});
    s.subscribe((value) => store.set(value));

    return s;
}