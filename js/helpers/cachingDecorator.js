
export default function cachingDecorator(func, hashFn) {
    let cache = new Map();

    return function (...args) {
        let key = hashFn(...args);

        if (cache.has(key)) {
            return cache.get(key);
        }

        let result = func.apply(this, args);
        cache.set(key, result);

        return result;
    }
}
