import assert from "node:assert";

import { fromSolidSignal } from "./solid.js";
import { createSignal, createRoot, createEffect } from "solid-js";

const [[_get, set], atom] = createRoot(() => {
    const signal = createSignal(0);
    const atom = fromSolidSignal(...signal);

    createEffect(() => {
        assert(signal[0]() === atom.get(), `Signal and atom value should be the same`);
    })

    return [signal, atom];
});

set(1);
atom.set(2);