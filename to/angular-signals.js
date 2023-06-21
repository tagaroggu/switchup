import { signal, effect } from "@angular/core";

/**
 * Transforms a Nanostores atom into an Angular signal
 * @template T
 * @param {import('nanostores').Atom<T>} store 
 * @returns {import('@angular/core').Signal<T>}
 */
export function toAngularSignal(store) {
    const s = signal();
    store.subscribe((value) => {s.set(value)});
    effect(() => { store.set(s()) });

    return s;
}