import assert from "node:assert";

import { atom as a } from "nanostores";
import { toRxObservable, toRxSubject } from "./rx.js";

const atom = a(0);
const observable = toRxObservable(atom), subject = toRxSubject(atom);

observable.subscribe((value) => { assert(value === atom.get(), `Observable does not match atom, ${value} ${atom.get()}`) });
subject.subscribe((value) => { assert(value === atom.get(), `Subject does not match atom, ${value} ${atom.get()}`) });

const time = (ms=1000) => new Promise((res) => setTimeout(res, ms));

(async () => {
    await time(50);
    atom.set(1);
    await time(50);
    atom.set(2);
})()