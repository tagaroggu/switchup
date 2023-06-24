import assert from "node:assert";

import { fromSolidSignal } from "./solid.js";
import { createSignal } from "solid-js";

const [get, set] = createSignal(0);
const atom = fromSolidSignal(get, set);
assert(atom.get() === get(), `Atom and signal do not have the same value ${atom.get()} ${get()}`);

atom.set(1);
assert(get() === 1, "Signal value should have updated after changing atom value");

set(2);
assert(atom.get() === 2, 'Atom value should have updated after changing signal value');