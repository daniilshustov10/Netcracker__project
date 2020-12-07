export function debounce(func, time) {
    let timeoutId = null;

    return function(...args) {
        if (timeoutId) clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, time)
    }
}

