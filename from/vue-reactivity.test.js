import assert from "node:assert";

import { fromVueReactivityRef } from "./vue-reactivity.js";
import { ref as r } from "@vue/reactivity";

const ref = r(0);
const atom  = fromVueReactivityRef(ref);

assert(atom.get() === ref.value, "Atom and ref do not have the same value");

atom.set(1);
assert(ref.value === 1, "Ref value should have updated after changing atom value");

ref.value = 2;
assert(atom.get() === 2, "Atom value should have updated after changing signal value");