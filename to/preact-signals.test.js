import assert from "node:assert";

import { atom as a } from "nanostores";
import { toPreactSignal } from "./preact-signals.js";

const atom = a(0);
const signal = toPreactSignal(atom);

assert(atom.get() === signal.value, 'Atom and signal should have the same value');

signal.value = 1;
assert(atom.get() === 1, 'Atom value should have updated after changing signal value');

atom.set(2);
assert(signal.value === 2, 'Signal value should have updated after changing atom value');