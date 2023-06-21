// TODO: Learn Angular so this can get tested/implemented properly
import assert from "node:assert";

import { fromAngularSignal } from "./angular-signals.js";
import { signal as s} from "@preact/signals-core";

const signal = s(0);
const atom = fromAngularSignal(signal);
assert(atom.get() === signal(), 'Atom and signal do not have the same value');

atom.set(1);
assert(signal() === 1, "Signal value should have updated after changing atom value");

signal.set(2);
assert(atom.get() === 2, 'Atom value should have updated after changing signal value');