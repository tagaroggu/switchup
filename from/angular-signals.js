import {  effect } from "@angular/core";
import { atom } from "nanostores";

/**
 * Transforms an Angular signal into a Nanostores atom
 * @template T
 * @param {import('@angular/core').Signal<T>} signal 
 * @returns {import('nanostores').Atom<T>}
 */
export function FromAngularSignal(signal) {
    const a = atom();
    effect(() => {a.set(signal())});
    a.listen((value) => { signal.set(value) });

    return a;
}