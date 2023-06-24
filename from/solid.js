import { atom } from 'nanostores';
import { createEffect } from 'solid-js';

/**
 * Transforms a Solid signal into a Nanostores atom
 * @template T
 * @param {import('solid-js').Accessor<T>} accessor
 * @param {import('solid-js').Setter<T>} setter
 * @returns {import('nanostores').Atom<T>}
 */
export function fromSolidSignal(accessor, setter) {
    const a = atom();
    createEffect(() => {
        a.set(accessor())
    });
    a.listen((value) => {
        setter(value)
    });

    return a;
}