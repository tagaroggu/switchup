// TODO: Learn Angular so this can get tested/implemented properly
import assert from "node:assert";

import { atom as a } from "nanostores";
import { toAngularSignal } from "./angular-signals.js";

const atom = a(0);
const signal = toAngularSignal(atom);

assert(atom.get() === signal(), 'Atom and signal should have the same value');

signal.set(1);
assert(atom.get() === 1, 'Atom value should have updated after changing signal value');

atom.set(2);
assert(signal() === 2, 'Signal value should have updated after changing atom value');