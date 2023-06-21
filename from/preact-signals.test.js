import assert from "node:assert";

import { fromPreactSignal } from "./preact-signals.js";
import { signal as s} from "@preact/signals-core";

const signal = s(0);
const atom = fromPreactSignal(signal);
assert(atom.get() === signal.value, 'Atom and signal do not have the same value');

atom.set(1);
assert(signal.value === 1, "Signal value should have updated after changing atom value");

signal.value = 2;
assert(atom.get() === 2, 'Atom value should have updated after changing signal value');