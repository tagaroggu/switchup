import { createSignal, createEffect } from "solid-js";

/**
 * Transforms a Nanostores atom into a Solid signal
 * @template T
 * @param {import('nanostores').Atom<T>} atom
 * @returns {[import('solid-js').Accessor<T>, import('solid-js').Setter<T>]}
 */
export function toSolidSignal(atom) {
    const [a, s] = createSignal();
    atom.subscribe((value) => {
        s(value)
    });
    createEffect(() => {
        atom.set(a())
    });

    return [a, s];
}