import { Observable, Subject } from 'rxjs';

/**
 * Transforms a Nanostores atom into an RxJS subject
 * @template T
 * @param {import('nanostores').Atom<T>} store
 * @returns {import('rxjs').Subject<T>}
 */
export function toRxSubject(store) {
    const s = new Subject();
    store.subscribe((value) => { s.next(value) });
    s.subscribe((value) => { store.set(value) });

    return s;
}

/**
 * Transforms a Nanostores atom into an RxJS observable
 * @template T
 * @param {import('nanostores').Atom<T>} store
 * @returns {import('rxjs').Observable<T>} 
 */
export function toRxObservable(store) {
    const o = new Observable((subscriber) => {
        store.subscribe((value) => {
            subscriber.next(value);
        })
    })

    return o;
}