import { atom, computed, onSet } from 'nanostores';

/**
 * Transforms an RxJS observable into a Nanostores atom
 * @template T
 * @param {import('rxjs').Subject<T>} subject
 * @returns {import('nanostores').Atom<T>} 
 */
export function fromRxSubject(subject) {
    const a = atom();
    subject.subscribe({ next: (value) => { a.set(value) } });
    a.listen((value) => { subject.next(value) });

    return a;
}

/**
 * Transforms an RxJS observable into a Nanostores atom. Due to how observables work, atom functions essentially as readonly
 * @template T
 * @param {import('rxjs').Observable<T>} observable
 * @returns {import('nanostores').Atom<T>}
 */
export function fromRxObservable(observable) {
    const a = atom();
    let allowChange = false;
    onSet(a, ({ abort }) => {
        if (!allowChange) {
            abort();
        }
    })
    observable.subscribe({ next: (value) => { allowChange = true; a.set(value); allowChange = false; } });

    return a
}