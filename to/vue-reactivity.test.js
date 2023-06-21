import assert from "node:assert";

import { toVueReactivityRef } from "./vue-reactivity.js";
import { atom as a } from "nanostores";

const atom = a(0);
const ref = toVueReactivityRef(atom);

assert(atom.get() === ref.value, "Atom and ref do not have the same value");

ref.value = 1;
assert(atom.get() === 1, "Atom value should have updated after changing signal value");

atom.set(2);
assert(ref.value === 2, "Ref value should have updated after changing atom value");