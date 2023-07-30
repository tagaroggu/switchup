import assert from "node:assert";

import { atom as a } from "nanostores";
import { toSolidSignal } from "./solid.js";
import { createRoot, createEffect } from "solid-js";


const [atom, [_get, set]] = createRoot(() => {
    const atom = a(0);
    const signal = toSolidSignal(atom);

    createEffect(() => {
        assert(signal[0]() === atom.get(), `Signal and atom value should be the same`);
    });

    return [atom, signal]
})

atom.set(1);
set(2);