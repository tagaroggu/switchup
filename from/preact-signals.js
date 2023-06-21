import { atom } from 'nanostores';

/** 
 * Transforms a Preact signal into a Nanostores atom.
 * @template T
 * @param {import('@preact/signals-core').Signal<T>} signal
 * @returns {import('nanostores').Atom<T>}
 */
export function fromPreactSignal(signal) {
    const a = atom();
    signal.subscribe((value) => { a.set(value) });
    a.subscribe((value) => { signal.value = value });

    return a;
}