import { ref, effect } from '@vue/reactivity';

/**
 * Transforms a Nanostores atom into a Vue reactivity ref
 * @template T
 * @param {import('nanostores').Atom<T>} store
 * @return {import('@vue/reactivity').Ref<T>}
 */
export function toVueReactivityRef(store) {
    const r = ref();
    store.subscribe((value) => r.value = value);
    effect(() => { store.set(r.value) });

    return r;
}