export default function renderDOM(element, selector) {
    const root = document.querySelector(selector);
    root.append(element);
}
