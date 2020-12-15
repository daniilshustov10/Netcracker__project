export function isAllowedKeyCode(event) {
    return event.keyCode === 8 ||
        event.keyCode === 38 ||
        event.keyCode === 39 ||
        event.keyCode === 37 ||
        event.keyCode === 40 ||
        event.keyCode === 46 ||
        event.ctrlKey ||
        event.metaKey;
}