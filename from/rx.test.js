import assert from "node:assert";

import { fromRxSubject, fromRxObservable } from "./rx.js";
import { Subject, Observable } from "rxjs";

const subject = new Subject(0);
const atom = fromRxSubject(subject);

subject.subscribe({ next: (value) => {
    assert(value === atom.get(), 'Values do not match')
}})

subject.next(1);
atom.set(2);


const time = (ms=1000) => new Promise((res) => setTimeout(res, ms));

const observable = new Observable(async (subscriber) => {
    subscriber.next(0);
    await time(50);
    subscriber.next(1);
})
const atom2 = fromRxObservable(observable);

observable.subscribe((value) => { assert(value === atom2.get(), `(2) values are not the same, ${value} ${atom2.get()}`) })