import { atom } from 'nanostores';
import { effect } from '@vue/reactivity';

/**
 * @template T
 * @param {import('@vue/reactivity').Ref<T>} ref
 * @returns {import('nanostores').Atom<T>}
 */
export function fromVueReactivityRef(ref) {
    const a = atom();
    effect(() => { a.set(ref.value) });
    a.subscribe((value) => { ref.value = value });

    return a;
}