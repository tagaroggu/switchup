import assert from "node:assert";

import { atom as a } from "nanostores";
import { toSolidSignal } from "./solid.js";

const atom = a(0);
const [get, set] = toSolidSignal(atom);

assert(atom.get() === get(), 'Atom and signal should have the same value');

set(1);
assert(atom.get() === 1, 'Atom value should have updated after changing signal value');

atom.set(2);
assert(get() === 2, 'Signal value should have updated after changing atom value');